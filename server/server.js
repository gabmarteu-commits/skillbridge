const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');
require('dotenv').config();
const DEFAULT_DATA = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.static(path.join(__dirname, '../public')));

// ===== JSON File-based Storage (no native dependencies) =====
const DB_PATH = path.join(__dirname, 'skillbridge-db.json');

function loadDB() {
  try {
    if (fs.existsSync(DB_PATH)) {
      return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
    }
  } catch (e) {}
  return { conversions: [], popularSkills: [], conversionStats: [] };
}

function saveDB(db) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
  } catch (e) {
    console.error('Failed to save DB:', e.message);
  }
}

let db = loadDB();

// ===== Dynamic Data Store (curated skills, repos, app repos) =====
const DATA_PATH = path.join(__dirname, 'skillbridge-data.json');

function loadDynamicData() {
  try {
    if (fs.existsSync(DATA_PATH)) {
      const saved = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
      // Merge with defaults to ensure all fields exist
      return {
        curatedSkills: saved.curatedSkills || DEFAULT_DATA.curatedSkills,
        skillRepos: saved.skillRepos || DEFAULT_DATA.skillRepos,
        appRepos: saved.appRepos || DEFAULT_DATA.appRepos
      };
    }
  } catch (e) {
    console.error('Failed to load dynamic data:', e.message);
  }
  // First time: save defaults
  const data = { ...DEFAULT_DATA };
  saveDynamicData(data);
  return data;
}

function saveDynamicData(data) {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Failed to save dynamic data:', e.message);
  }
}

let dynamicData = loadDynamicData();

// Helpers
function addConversion(conv) {
  db.conversions.unshift({
    id: Date.now(),
    ...conv,
    created_at: new Date().toISOString()
  });
  if (db.conversions.length > 200) db.conversions = db.conversions.slice(0, 200);
  saveDB(db);
}

function upsertPopularSkill(repo, description, stargazers, forks, htmlUrl) {
  const existing = db.popularSkills.find(s => s.repo_name === repo);
  if (existing) {
    existing.convert_count = (existing.convert_count || 0) + 1;
    existing.last_converted = new Date().toISOString();
    existing.stargazers = stargazers || existing.stargazers;
    existing.forks = forks || existing.forks;
  } else {
    db.popularSkills.push({
      id: Date.now(),
      repo_name: repo,
      description: description || '',
      stargazers: stargazers || 0,
      forks: forks || 0,
      html_url: htmlUrl || `https://github.com/${repo}`,
      convert_count: 1,
      last_converted: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
  }
  saveDB(db);
}

function updateStats(targetAI) {
  const existing = db.conversionStats.find(s => s.target_ai === targetAI);
  if (existing) {
    existing.count = (existing.count || 0) + 1;
    existing.last_used = new Date().toISOString();
  } else {
    db.conversionStats.push({
      id: Date.now(),
      target_ai: targetAI,
      count: 1,
      last_used: new Date().toISOString()
    });
  }
  saveDB(db);
}

// ============ API ROUTES ============

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), node: process.version });
});

// Fetch skill from GitHub (proxy - no CORS issues!)
app.get('/api/fetch-skill', async (req, res) => {
  const { repo } = req.query;
  if (!repo) return res.status(400).json({ error: 'Missing repo parameter. Use: ?repo=owner/name' });

  const possiblePaths = [
    'CLAUDE.md', 'claude.md', '.cursorrules',
    'skills/CLAUDE.md', 'skills/claude.md',
    'docs/CLAUDE.md', 'docs/claude.md',
    '.github/CLAUDE.md', 'SKILL.md', 'skill.md',
    'README.md', 'README.markdown'
  ];
  const branches = ['main', 'master'];

  for (const branch of branches) {
    for (const filePath of possiblePaths) {
      try {
        const url = `https://raw.githubusercontent.com/${repo}/${branch}/${filePath}`;
        const response = await fetch(url, { timeout: 10000 });
        if (response.ok) {
          const content = await response.text();
          if (content.length > 100) {
            // Track this fetch
            try {
              const repoInfo = await fetchRepoInfo(repo);
              upsertPopularSkill(
                repo,
                repoInfo.description || '',
                repoInfo.stargazers_count || 0,
                repoInfo.forks_count || 0,
                `https://github.com/${repo}`
              );
            } catch(e) { /* ignore tracking errors */ }

            return res.json({
              success: true,
              content,
              filename: filePath,
              branch,
              repo,
              sourceUrl: `https://github.com/${repo}/blob/${branch}/${filePath}`
            });
          }
        }
      } catch (e) {
        // Try next path
      }
    }
  }

  res.status(404).json({
    error: `No skill file found in ${repo}. Tried: ${possiblePaths.join(', ')}`,
    triedPaths: possiblePaths.map(p => `https://raw.githubusercontent.com/${repo}/main/${p}`)
  });
});

// Helper: fetch repo info from GitHub API
async function fetchRepoInfo(repoName) {
  try {
    const resp = await fetch(`https://api.github.com/repos/${repoName}`, {
      headers: process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}
    });
    if (resp.ok) return await resp.json();
  } catch (e) {}
  return {};
}

// Save conversion
app.post('/api/convert', (req, res) => {
  const { name, sourceFormat, targetFormat, originalContent, convertedContent } = req.body;
  if (!name || !convertedContent) {
    return res.status(400).json({ error: 'Missing name or convertedContent' });
  }

  addConversion({
    name,
    source_format: sourceFormat || 'claude',
    target_format: targetFormat || 'kimi',
    original_content: originalContent || '',
    converted_content: convertedContent
  });
  updateStats(targetFormat || 'kimi');

  res.json({ success: true, id: Date.now() });
});

// Get recent conversions
app.get('/api/conversions', (req, res) => {
  res.json(db.conversions.slice(0, 50));
});

// Get most converted skills (from our DB)
app.get('/api/most-converted', (req, res) => {
  const counts = {};
  db.conversions.forEach(c => {
    counts[c.name] = (counts[c.name] || 0) + 1;
  });
  const sorted = Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
  res.json(sorted);
});

// Get popular skills (fetched from GitHub + tracked)
app.get('/api/popular-skills', (req, res) => {
  res.json(db.popularSkills.sort((a, b) => (b.convert_count || 0) - (a.convert_count || 0)).slice(0, 20));
});

// Search GitHub for Claude skills
app.get('/api/search-skills', async (req, res) => {
  const { q = 'claude skill CLAUDE.md' } = req.query;
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=30`,
      process.env.GITHUB_TOKEN ? { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } } : {}
    );
    if (!response.ok) throw new Error('GitHub API error');
    const data = await response.json();
    const items = (data.items || [])
      .filter(r => r.stargazers_count > 10)
      .map(r => ({
        full_name: r.full_name,
        description: r.description,
        stargazers_count: r.stargazers_count,
        forks_count: r.forks_count,
        html_url: r.html_url,
        owner_avatar: r.owner?.avatar_url
      }));
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Browse a GitHub repo to find all skill files inside it, grouped by folder
app.get('/api/browse-repo', async (req, res) => {
  const { repo } = req.query;
  if (!repo) return res.status(400).json({ error: 'Missing repo parameter' });

  const skillExtensions = ['.md', '.cursorrules', '.mdc'];
  const skillNamePatterns = ['CLAUDE', 'SKILL', 'claude', 'skill', 'cursor', 'prompt', 'agent', 'ai-', 'llm', 'system', 'instruction'];

  try {
    const branches = ['main', 'master'];
    let allFiles = [];

    for (const branch of branches) {
      try {
        const treeResp = await fetch(
          `https://api.github.com/repos/${repo}/git/trees/${branch}?recursive=1`,
          process.env.GITHUB_TOKEN ? { headers: { Authorization: `token ${process.env.GITHUB_TOKEN}` } } : {}
        );

        if (treeResp.ok) {
          const treeData = await treeResp.json();
          allFiles = (treeData.tree || [])
            .filter(item => item.type === 'blob')
            .map(item => {
              const isSkillFile = skillExtensions.some(ext => item.path.endsWith(ext));
              const matchesPattern = skillNamePatterns.some(p =>
                item.path.toLowerCase().includes(p.toLowerCase())
              );
              const dir = item.path.includes('/') ? item.path.substring(0, item.path.lastIndexOf('/')) : '(root)';
              return {
                path: item.path,
                size: item.size,
                dir,
                isSkillFile,
                matchesPattern,
                score: (isSkillFile ? 2 : 0) + (matchesPattern ? 3 : 0)
              };
            })
            .filter(f => f.isSkillFile || f.matchesPattern)
            .sort((a, b) => b.score - a.score);
          break;
        }
      } catch (e) { /* try next branch */ }
    }

    const repoInfo = await fetchRepoInfo(repo);

    // Group by directory
    const byDir = {};
    allFiles.forEach(f => {
      if (!byDir[f.dir]) byDir[f.dir] = [];
      byDir[f.dir].push(f);
    });

    // Sort dirs: root first, then by number of files (most first)
    const sortedDirs = Object.keys(byDir).sort((a, b) => {
      if (a === '(root)') return -1;
      if (b === '(root)') return 1;
      return byDir[b].length - byDir[a].length;
    });

    const groups = sortedDirs.map(dir => ({
      dir,
      count: byDir[dir].length,
      files: byDir[dir].slice(0, 50) // cap per group
    }));

    const highConfidence = allFiles.filter(f => f.score >= 3);

    res.json({
      success: true,
      repo,
      totalFiles: allFiles.length,
      highConfidenceCount: highConfidence.length,
      groups,
      repoInfo: {
        description: repoInfo.description,
        stargazers_count: repoInfo.stargazers_count,
        forks_count: repoInfo.forks_count,
        html_url: repoInfo.html_url,
        topics: repoInfo.topics || []
      }
    });

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Get stats
app.get('/api/stats', (req, res) => {
  const topTargets = {};
  db.conversions.forEach(c => {
    const t = c.target_format || 'kimi';
    topTargets[t] = (topTargets[t] || 0) + 1;
  });
  res.json({
    totalConversions: db.conversions.length,
    targetStats: db.conversionStats,
    topTargets: Object.entries(topTargets).map(([target_format, count]) => ({ target_format, count }))
  });
});

// ===== API: Dynamic Data (curated skills, repos, app repos) =====
app.get('/api/data/curated-skills', (req, res) => {
  res.json(dynamicData.curatedSkills || []);
});

app.get('/api/data/skill-repos', (req, res) => {
  res.json(dynamicData.skillRepos || []);
});

app.get('/api/data/app-repos', (req, res) => {
  res.json(dynamicData.appRepos || []);
});

// Add new items (no auth needed — open platform)
app.post('/api/data/curated-skills', (req, res) => {
  const skill = req.body;
  if (!skill || !skill.id || !skill.name) {
    return res.status(400).json({ error: 'Skill must have id and name' });
  }
  // Prevent duplicates
  const existing = dynamicData.curatedSkills.findIndex(s => s.id === skill.id);
  if (existing >= 0) {
    dynamicData.curatedSkills[existing] = skill;
  } else {
    dynamicData.curatedSkills.push(skill);
  }
  saveDynamicData(dynamicData);
  res.json({ success: true, skills: dynamicData.curatedSkills });
});

app.post('/api/data/skill-repos', (req, res) => {
  const repo = req.body;
  if (!repo || !repo.full_name) {
    return res.status(400).json({ error: 'Repo must have full_name' });
  }
  const existing = dynamicData.skillRepos.findIndex(r => r.full_name === repo.full_name);
  if (existing >= 0) {
    dynamicData.skillRepos[existing] = repo;
  } else {
    dynamicData.skillRepos.push(repo);
    // Re-rank
    dynamicData.skillRepos.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
    dynamicData.skillRepos.forEach((r, i) => r.rank = i + 1);
  }
  saveDynamicData(dynamicData);
  res.json({ success: true, repos: dynamicData.skillRepos });
});

app.post('/api/data/app-repos', (req, res) => {
  const repo = req.body;
  if (!repo || !repo.full_name) {
    return res.status(400).json({ error: 'Repo must have full_name' });
  }
  const existing = dynamicData.appRepos.findIndex(r => r.full_name === repo.full_name);
  if (existing >= 0) {
    dynamicData.appRepos[existing] = repo;
  } else {
    dynamicData.appRepos.push(repo);
  }
  saveDynamicData(dynamicData);
  res.json({ success: true, repos: dynamicData.appRepos });
});

// Reset to defaults (useful if data gets corrupted)
app.post('/api/data/reset', (req, res) => {
  dynamicData = { ...DEFAULT_DATA };
  saveDynamicData(dynamicData);
  res.json({ success: true, message: 'Data reset to defaults' });
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`SkillBridge Server running on port ${PORT}`);
  console.log(`Storage: ${DB_PATH}`);
  console.log(`Node version: ${process.version}`);
});
