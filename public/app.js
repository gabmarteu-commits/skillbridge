// ===================== I18N =====================
const i18n = {
  es: {
    // Nav
    navConverter:'Convertidor', navCurated:'Skills', navRepos:'Repos', navApps:'Apps', navInstall:'Instalación', navTry:'Probar',
    // Hero
    heroBadge:'HERRAMIENTA GRATUITA', heroTitle:'Convertí Skills de Claude a ', heroSub:'Transformá tus skills de CLAUDE.md a cualquier formato compatible. Pegá, convertí, descargá — listo en segundos.',
    heroStart:'Empezar a Convertir →', heroExamples:'Ver Skills Disponibles',
    // Converter
    convLabel:'CONVERTIDOR', convTitle:'Pegá tu CLAUDE.md', convSub:'Mirá cómo se transforma al formato de tu IA elegido al instante',
    convTarget:'Convertir a:', btnClear:'Limpiar', btnCopy:'Copiar', btnDownload:'Descargar .skill',
    // GitHub loader
    ghTitle:'Cargar desde GitHub', ghDesc:'Pegá una URL de GitHub para cargar su CLAUDE.md automáticamente',
    ghLoad:'Cargar', ghSupport:'Soporta: CLAUDE.md, claude.md, .cursorrules, skills/CLAUDE.md, docs/CLAUDE.md, SKILL.md',
    ghErrUrl:'URL inválida. Usá: github.com/owner/repo o owner/repo',
    ghErrNotFound:'No se encontró CLAUDE.md. El repo puede no tener un skill file.',
    ghErrServer:'Error del servidor. Probá de nuevo más tarde.',
    ghOk:'¡Skill cargado exitosamente!',
    copyOk:'¡Copiado!', downloadOk:'¡Descargado!',
    // Section 1: Curated Skills
    curatedTitle:'Skills Individuales Populares',
    curatedSub:'Skills probadas y listas para usar. Tocá "Cargar en convertidor" para transformarlas.',
    curatedLoad:'Cargar en convertidor',
    // Section 2: Skill Repos
    reposTitle:'Colecciones de Skills para IA',
    reposSub:'Repositorios cuyo propósito principal es almacenar y distribuir skills de IA. Tocá "Convertir" para extraer su skill principal.',
    reposConvert:'Convertir',
    reposList:'Ver lista',
    // Section 3: App Repos
    appsTitle:'Aplicaciones y Frameworks con Skills',
    appsSub:'Repositorios populares que NO son de skills (son apps, dashboards, herramientas) pero que contienen un CLAUDE.md o SKILL.md embebido. Tocá "Extraer skill" para obtenerlo.',
    appsExtract:'Extraer skill',
    appsView:'Ver repo',
    appTagDashboard:'Dashboard', appTagTool:'Herramienta', appTagFramework:'Framework', appTagPlatform:'Plataforma',
    // Installation
    installTitle:'Cómo Instalar el Skill en tu IA', installSub:'Guías paso a paso para cada plataforma',
    // Footer
    footerTag:'Convertí skills de IA entre plataformas. Gratuito y open source.',
    footerProduct:'Producto', footerConv:'Convertidor', footerSkills:'Skills', footerRepos:'Repos', footerInstall:'Instalación',
    footerResources:'Recursos',
    // Tabs
    tabKimi:'Kimi', tabCursor:'Cursor', tabCodeium:'Codeium', tabClaude:'Claude', tabOther:'Otras',
  },
  en: {
    // Nav
    navConverter:'Converter', navCurated:'Skills', navRepos:'Repos', navApps:'Apps', navInstall:'Install', navTry:'Try It',
    // Hero
    heroBadge:'FREE DEVELOPER TOOL', heroTitle:'Convert Claude Skills to ', heroSub:'Transform your CLAUDE.md skills to any compatible format. Paste, convert, download — done in seconds.',
    heroStart:'Start Converting →', heroExamples:'View Available Skills',
    // Converter
    convLabel:'CONVERTER', convTitle:'Paste Your CLAUDE.md', convSub:'Watch it transform into your chosen AI format instantly',
    convTarget:'Convert to:', btnClear:'Clear', btnCopy:'Copy', btnDownload:'Download .skill',
    // GitHub loader
    ghTitle:'Load from GitHub', ghDesc:'Paste a GitHub repo URL to auto-load its CLAUDE.md',
    ghLoad:'Load', ghSupport:'Supports: CLAUDE.md, claude.md, .cursorrules, skills/CLAUDE.md, docs/CLAUDE.md, SKILL.md',
    ghErrUrl:'Invalid URL. Use: github.com/owner/repo or owner/repo',
    ghErrNotFound:'No CLAUDE.md found. The repo may not have a skill file.',
    ghErrServer:'Server error. Please try again later.',
    ghOk:'Skill loaded successfully!',
    copyOk:'Copied!', downloadOk:'Downloaded!',
    // Section 1: Curated Skills
    curatedTitle:'Popular Individual Skills',
    curatedSub:'Tested and ready-to-use skills. Click "Load in converter" to transform them.',
    curatedLoad:'Load in converter',
    // Section 2: Skill Repos
    reposTitle:'AI Skill Collections',
    reposSub:'Repositories whose main purpose is to store and distribute AI skills. Click "Convert" to extract their main skill.',
    reposConvert:'Convert',
    reposList:'View list',
    // Section 3: App Repos
    appsTitle:'Apps & Frameworks with Skills',
    appsSub:'Popular repositories that are NOT skill repos (they are apps, dashboards, tools) but contain an embedded CLAUDE.md or SKILL.md. Click "Extract skill" to get it.',
    appsExtract:'Extract skill',
    appsView:'View repo',
    appTagDashboard:'Dashboard', appTagTool:'Tool', appTagFramework:'Framework', appTagPlatform:'Platform',
    // Installation
    installTitle:'How to Install the Skill in Your AI', installSub:'Step-by-step guides for each platform',
    // Footer
    footerTag:'Convert AI skills across platforms. Free and open source.',
    footerProduct:'Product', footerConv:'Converter', footerSkills:'Skills', footerRepos:'Repos', footerInstall:'Install',
    footerResources:'Resources',
    // Tabs
    tabKimi:'Kimi', tabCursor:'Cursor', tabCodeium:'Codeium', tabClaude:'Claude', tabOther:'Others',
  }
};

let lang = localStorage.getItem('skillbridge_lang') || (navigator.language.startsWith('es') ? 'es' : 'en');

function t(key) { return i18n[lang][key] || key; }

function toggleLang() {
  lang = lang === 'es' ? 'en' : 'es';
  localStorage.setItem('skillbridge_lang', lang);
  renderLang();
  renderCuratedSkills();
  renderSkillRepos();
  renderAppRepos();
  renderInstallTabs(activeTab);
}

function renderLang() {
  document.getElementById('langBtn').textContent = lang === 'es' ? 'EN' : 'ES';
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (key === 'heroTitle') { el.innerHTML = t(key) + '<span class="gradient">Kimi</span>'; }
    else if (el.tagName === 'INPUT') { /* skip */ }
    else { el.textContent = t(key); }
  });
}

// ===================== CONVERTER =====================
const AI_CONFIGS = {
  kimi:    { name:'Kimi', frontmatter:true, file:'SKILL.md', brand:'Kimi', brandAlt:'Moonshot AI' },
  anthropic:{ name:'Claude', frontmatter:true, file:'CLAUDE.md', brand:'Claude', brandAlt:'Anthropic' },
  cursor:  { name:'Cursor', frontmatter:false, file:'.cursorrules', brand:'Cursor', brandAlt:'Cursor IDE' },
  codeium: { name:'Codeium', frontmatter:true, file:'SKILL.md', brand:'Codeium', brandAlt:'Windsurf' },
  custom:  { name:'Generic AI', frontmatter:true, file:'SKILL.md', brand:'AI', brandAlt:'AI Assistant' },
};

function convert(input, targetId) {
  if (!input.trim()) return '';
  const cfg = AI_CONFIGS[targetId];
  const titleMatch = input.match(/^#\s+(.+)$/m);
  const name = titleMatch ? titleMatch[1].toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'') : 'converted-skill';
  const lines = input.split('\n');
  const firstPara = lines.find(l => l.trim() && !l.startsWith('#') && !l.startsWith('---')) || '';
  const desc = firstPara.length > 300 ? firstPara.substring(0,297)+'...' : firstPara;
  let body = input.replace(/^---\n[\s\S]*?\n---\n?/,'');

  let out = '';
  if (cfg.frontmatter) {
    out += `---\nname: ${name}\ndescription: >\n  ${desc.replace(/\n/g,'\n  ')}\n---\n\n`;
  }
  let transformed = body.replace(/^#\s+(.+)$/m,'# $1')
    .replace(/\/command\s+(\w+)/g,'`$1`')
    .replace(/\bclaude\b/gi, cfg.brand)
    .replace(/\banthropic\b/gi, cfg.brandAlt).trim();
  if (targetId === 'cursor') transformed = `# ${name}\n\n${desc}\n\n${transformed}`;
  out += transformed;
  return out;
}

function onInput() {
  const inp = document.getElementById('input').value;
  const target = document.getElementById('targetSelect').value;
  const out = convert(inp, target);
  document.getElementById('output').value = out;
  const secs = (inp.match(/^#{2,3}\s+/gm) || []).length;
  document.getElementById('statOrig').textContent = inp.split('\n').length;
  document.getElementById('statConv').textContent = out.split('\n').length;
  document.getElementById('statSec').textContent = secs;
}

function onTargetChange() {
  const target = document.getElementById('targetSelect').value;
  const cfg = AI_CONFIGS[target];
  document.getElementById('outputFormat').textContent = cfg.file;
  document.getElementById('outputLabel').textContent = cfg.file;
  onInput();
}

function clearInput() {
  document.getElementById('input').value = '';
  document.getElementById('output').value = '';
  document.getElementById('statOrig').textContent = '0';
  document.getElementById('statConv').textContent = '0';
  document.getElementById('statSec').textContent = '0';
}

async function copyOutput() {
  const out = document.getElementById('output').value;
  if (!out) return;
  await navigator.clipboard.writeText(out);
  showToast(t('copyOk'), 'success');
}

function downloadOutput() {
  const out = document.getElementById('output').value;
  if (!out) return;
  const target = document.getElementById('targetSelect').value;
  const filename = AI_CONFIGS[target].file;
  const blob = new Blob([out], {type:'text/markdown'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; a.click(); URL.revokeObjectURL(url);
  showToast(t('downloadOk'), 'success');
}

function showToast(msg, type) {
  const existing = document.querySelector('.toast'); if (existing) existing.remove();
  const div = document.createElement('div'); div.className = `toast ${type}`; div.textContent = msg;
  document.body.appendChild(div); setTimeout(() => div.remove(), 3000);
}

// ===================== GITHUB LOADER (via Backend API) =====================
function extractRepo(input) {
  const m = input.match(/github\.com\/([^\/]+)\/([^\/\s]+)/);
  if (m) return `${m[1]}/${m[2].replace(/\.git$/,'')}`;
  const s = input.match(/^([\w-]+)\/([\w.-]+)$/);
  if (s) return `${s[1]}/${s[2]}`;
  return null;
}

async function loadFromGithub(repoOverride) {
  const input = repoOverride || document.getElementById('githubUrl').value.trim();
  const errEl = document.getElementById('githubError');
  const okEl = document.getElementById('githubSuccess');
  const btn = document.getElementById('ghLoadBtn');
  const repo = extractRepo(input);

  errEl.classList.add('hidden'); okEl.classList.add('hidden');
  if (!repo) { errEl.textContent = t('ghErrUrl'); errEl.classList.remove('hidden'); return; }

  btn.innerHTML = '<span class="spinner"></span>';

  try {
    const response = await fetch(`/api/fetch-skill?repo=${encodeURIComponent(repo)}`);
    const data = await response.json();

    if (data.success && data.content) {
      document.getElementById('input').value = data.content;
      onInput();
      okEl.textContent = `${t('ghOk')} (${data.filename})`;
      okEl.classList.remove('hidden');
      document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
    } else {
      errEl.textContent = data.error || t('ghErrNotFound');
      errEl.classList.remove('hidden');
    }
  } catch (e) {
    errEl.textContent = t('ghErrServer');
    errEl.classList.remove('hidden');
  }

  btn.textContent = t('ghLoad');
}

// ===================== SECTION 1: CURATED SKILLS =====================
// Individual skills (not repos) — curated, tested, ready to use
const CURATED_SKILLS = [
  {
    id: 'karpathy',
    name: 'Karpathy Guidelines',
    icon: '👨‍🔬', iconClass: 'blue',
    type: 'Coding Style',
    typeClass: 'blue',
    description: 'Behavioral guidelines by Andrej Karpathy to reduce common LLM coding mistakes. Covers thinking before coding, simplicity first, surgical changes, and goal-driven execution.',
    repo: 'multica-ai/andrej-karpathy-skills',
    stars: 175500, lines: 45,
    content: `# CLAUDE.md\n\nBehavioral guidelines to reduce common LLM coding mistakes.\n\n## 1. Think Before Coding\n\n**Don't assume. Don't hide confusion. Surface tradeoffs.**\n\nBefore implementing:\n- State your assumptions explicitly. If uncertain, ask.\n- If multiple interpretations exist, present them - don't pick silently.\n- If a simpler approach exists, say so. Push back when warranted.\n\n## 2. Simplicity First\n\n**Minimum code that solves the problem. Nothing speculative.**\n\n- No features beyond what was asked.\n- No abstractions for single-use code.\n- If you write 200 lines and it could be 50, rewrite it.\n\n## 3. Surgical Changes\n\n**Touch only what you must. Clean up only your own mess.**\n\n- Don't "improve" adjacent code, comments, or formatting.\n- Don't refactor things that aren't broken.\n- Match existing style, even if you'd do it differently.\n\n## 4. Goal-Driven Execution\n\n**Define success criteria. Loop until verified.**\n\nTransform tasks into verifiable goals:\n- "Add validation" → "Write tests for invalid inputs, then make them pass"\n- "Fix the bug" → "Write a test that reproduces it, then make it pass"`
  },
  {
    id: 'tdd',
    name: 'Superpowers TDD',
    icon: '🧪', iconClass: 'purple',
    type: 'Testing',
    typeClass: 'purple',
    description: 'Test-Driven Development workflow for all feature implementation. RED-GREEN-REFACTOR cycle with debugging methodology for Claude Code.',
    repo: 'anthropics/superpowers-tdd',
    stars: 12400, lines: 38,
    content: `# TDD Workflow\n\nTest-Driven Development cycle for all feature implementation.\n\n## RED: Write a Failing Test\n\n- Write a test that describes the desired behavior\n- The test must fail initially\n- Focus on one behavior at a time\n\n## GREEN: Write Minimum Code\n\n- Write only enough code to make the test pass\n- Do not anticipate future requirements\n- Hardcoded values are OK in this phase\n\n## REFACTOR: Clean Up\n\n- Remove duplication\n- Improve naming\n- Run tests after each change\n- Keep tests green\n\n## Debugging\n\n1. Isolate with binary search\n2. Form a hypothesis\n3. Test with minimal reproduction\n4. Fix only after confirmation`
  },
  {
    id: 'creator',
    name: 'Anthropic Skill Creator',
    icon: '✨', iconClass: 'orange',
    type: 'Meta / Guide',
    typeClass: 'orange',
    description: 'How to create effective skills for AI agents. Covers what makes a good skill, writing effective instructions, and common mistakes to avoid.',
    repo: 'anthropics/skills-create',
    stars: 18300, lines: 42,
    content: `# Skill Creator Guide\n\nHow to create effective skills for AI agents.\n\n## What Makes a Good Skill\n\n1. Solves a specific, repeatable problem\n2. Has clear trigger conditions (when to use)\n3. Contains actionable instructions, not just information\n4. Is concise but complete\n\n## Writing Effective Instructions\n\n- Use imperative voice (do this, check that)\n- Be specific, not vague\n- Include decision trees (if X then Y)\n- Add guardrails (what NOT to do)\n\n## Common Mistakes\n\n- Too broad (not specific enough)\n- Too long (context overflow)\n- Information dump vs actionable guide\n- Missing trigger conditions`
  }
];

function loadPreset(id) {
  const skill = CURATED_SKILLS.find(s => s.id === id);
  if (!skill) return;
  document.getElementById('input').value = skill.content;
  onInput();
  location.href = '#converter';
}

function renderCuratedSkills() {
  const el = document.getElementById('curatedList');
  el.innerHTML = CURATED_SKILLS.map(s => `
    <div class="skill-card">
      <div class="skill-card-header">
        <div class="skill-icon ${s.iconClass}">${s.icon}</div>
        <div>
          <h3>${s.name}</h3>
          <div class="skill-meta">
            <span class="type-badge ${s.typeClass}">${s.type}</span>
            <span>⭐ ${s.stars >= 1000 ? (s.stars/1000).toFixed(1)+'k' : s.stars}</span>
            <span>📄 ~${s.lines} lines</span>
          </div>
        </div>
      </div>
      <p>${s.description}</p>
      <div class="skill-actions">
        <button class="btn-load" onclick="loadPreset('${s.id}')">⚡ ${t('curatedLoad')}</button>
        <a href="https://github.com/${s.repo}" class="btn-sm" target="_blank" rel="noopener">📎 GitHub</a>
      </div>
    </div>
  `).join('');
}

// ===================== SECTION 2: SKILL REPOSITORIES =====================
// Repos whose MAIN PURPOSE is skills (collections, marketplaces, official)
const SKILL_REPOS = [
  {
    rank: 1, full_name: 'anthropics/skills',
    description: 'Official Anthropic skills repository — curated collection of CLAUDE.md skills from Anthropic',
    stargazers_count: 24500, forks_count: 2100,
    html_url: 'https://github.com/anthropics/skills',
    skillFiles: ['CLAUDE.md', 'skills/*.md']
  },
  {
    rank: 2, full_name: 'ComposioHQ/awesome-claude-skills',
    description: 'Community-curated list of awesome Claude Skills with examples and usage guides',
    stargazers_count: 64600, forks_count: 7100,
    html_url: 'https://github.com/ComposioHQ/awesome-claude-skills',
    skillFiles: ['CLAUDE.md', '*.md']
  },
  {
    rank: 3, full_name: 'addyosmani/agent-skills',
    description: 'Production-grade engineering skills for AI agents — performance, testing, architecture',
    stargazers_count: 59600, forks_count: 6500,
    html_url: 'https://github.com/addyosmani/agent-skills',
    skillFiles: ['CLAUDE.md', 'skills/**/*.md']
  },
  {
    rank: 4, full_name: 'nexu-io/open-design',
    description: 'Open-source Claude Design alternative with 259+ design skills for AI',
    stargazers_count: 64900, forks_count: 7300,
    html_url: 'https://github.com/nexu-io/open-design',
    skillFiles: ['CLAUDE.md', 'design-skills/*.md']
  },
  {
    rank: 5, full_name: 'moonshot-ai/skills',
    description: 'Official Kimi (Moonshot AI) skills repository — SKILL.md format examples and templates',
    stargazers_count: 5200, forks_count: 890,
    html_url: 'https://github.com/moonshot-ai/skills',
    skillFiles: ['SKILL.md', 'skills/*.md']
  },
  {
    rank: 6, full_name: 'anthropics/superpowers-tdd',
    description: 'TDD superpower for Claude Code — test-driven development workflow skill',
    stargazers_count: 12400, forks_count: 1800,
    html_url: 'https://github.com/anthropics/superpowers-tdd',
    skillFiles: ['CLAUDE.md']
  },
  {
    rank: 7, full_name: 'anthropics/superpowers-git',
    description: 'Git superpower for Claude Code — advanced Git workflow and best practices skill',
    stargazers_count: 9800, forks_count: 1500,
    html_url: 'https://github.com/anthropics/superpowers-git',
    skillFiles: ['CLAUDE.md']
  },
  {
    rank: 8, full_name: 'anthropics/superpowers-debug',
    description: 'Debug superpower for Claude Code — systematic debugging methodology skill',
    stargazers_count: 8700, forks_count: 1200,
    html_url: 'https://github.com/anthropics/superpowers-debug',
    skillFiles: ['CLAUDE.md']
  },
  {
    rank: 9, full_name: 'anthropics/skills-create',
    description: 'Skill creation guide — how to write effective CLAUDE.md skills for Claude',
    stargazers_count: 18300, forks_count: 2400,
    html_url: 'https://github.com/anthropics/skills-create',
    skillFiles: ['CLAUDE.md']
  },
  {
    rank: 10, full_name: 'punkpeye/awesome-claude-agents',
    description: 'Collection of Claude agents and skills with real-world use cases and prompts',
    stargazers_count: 4100, forks_count: 520,
    html_url: 'https://github.com/punkpeye/awesome-claude-agents',
    skillFiles: ['CLAUDE.md', '*.md']
  }
];

function fmtNum(n) { return n >= 1000 ? (n/1000).toFixed(1)+'k' : String(n); }
function rankClass(r) { return r===1?'gold':r===2?'silver':r===3?'bronze':''; }

function renderSkillRepos() {
  const el = document.getElementById('skillReposList');
  el.innerHTML = SKILL_REPOS.map(r => `
    <div class="repo-row">
      <div class="repo-rank ${rankClass(r.rank)}">${r.rank}</div>
      <div class="repo-info">
        <a href="${r.html_url}" target="_blank" rel="noopener">${r.full_name}</a>
        <p>${r.description || ''} <span style="color:var(--dim)">| Files: ${r.skillFiles.join(', ')}</span></p>
      </div>
      <div class="repo-stats">
        <span>⭐ ${fmtNum(r.stargazers_count)}</span>
        <span>🍴 ${fmtNum(r.forks_count)}</span>
      </div>
      <div class="repo-actions">
        <button class="preset-chip" onclick="convertRepo('${r.full_name}')">⚡ ${t('reposConvert')}</button>
        <a href="${r.html_url}" class="btn-sm" target="_blank" rel="noopener">🔗 GitHub</a>
      </div>
    </div>
  `).join('');
}

async function convertRepo(repoName) {
  document.getElementById('githubUrl').value = repoName;
  await loadFromGithub(repoName);
}

// ===================== SECTION 3: APP REPOS WITH EMBEDDED SKILLS =====================
// Popular repos that are NOT skill repos — they are apps/tools/frameworks with embedded CLAUDE.md
const APP_REPOS = [
  {
    full_name: 'affaan-m/ECC',
    description: 'Engineering Coding Challenges platform — includes CLAUDE.md with coding style guidelines for the platform',
    type: 'Platform', typeClass: 'platform',
    stargazers_count: 215600, forks_count: 33100,
    html_url: 'https://github.com/affaan-m/ECC',
    skillPath: 'CLAUDE.md'
  },
  {
    full_name: 'JuliusBrussee/caveman',
    description: 'Token compression tool — cuts 65% of LLM tokens by talking like caveman. Contains .cursorrules for Claude Code',
    type: 'Tool', typeClass: 'tool',
    stargazers_count: 72600, forks_count: 4100,
    html_url: 'https://github.com/JuliusBrussee/caveman',
    skillPath: '.cursorrules'
  },
  {
    full_name: 'safishamsi/graphify',
    description: 'Code-to-knowledge-graph converter — turns code/schemas/docs into queryable graphs. Has skills/ directory with AI instructions',
    type: 'Tool', typeClass: 'tool',
    stargazers_count: 67200, forks_count: 6800,
    html_url: 'https://github.com/safishamsi/graphify',
    skillPath: 'skills/CLAUDE.md'
  },
  {
    full_name: 'santifer/career-ops',
    description: 'AI-powered job search platform with 14 skill modes for different career paths',
    type: 'Platform', typeClass: 'platform',
    stargazers_count: 53700, forks_count: 10700,
    html_url: 'https://github.com/santifer/career-ops',
    skillPath: 'CLAUDE.md'
  },
  {
    full_name: 'jeecgboot/JeecgBoot',
    description: 'AI low-code Java platform with one-click code generation. Contains docs/CLAUDE.md for AI-assisted development',
    type: 'Framework', typeClass: 'framework',
    stargazers_count: 46800, forks_count: 16100,
    html_url: 'https://github.com/jeecgboot/JeecgBoot',
    skillPath: 'docs/CLAUDE.md'
  },
  {
    full_name: 'Significant-Gravitas/AutoGPT',
    description: 'Autonomous GPT-4 agent framework. Has .github/CLAUDE.md with development guidelines for contributors',
    type: 'Framework', typeClass: 'framework',
    stargazers_count: 174000, forks_count: 45600,
    html_url: 'https://github.com/Significant-Gravitas/AutoGPT',
    skillPath: '.github/CLAUDE.md'
  }
];

function renderAppRepos() {
  const el = document.getElementById('appReposList');
  el.innerHTML = APP_REPOS.map(r => `
    <div class="app-repo-card">
      <div class="app-repo-header">
        <a href="${r.html_url}" target="_blank" rel="noopener">${r.full_name}</a>
        <span class="app-tag ${r.typeClass}">${t('appTag'+r.type) || r.type}</span>
      </div>
      <div class="app-repo-desc">${r.description}</div>
      <div class="app-repo-footer">
        <div class="app-repo-meta">
          <span>⭐ ${fmtNum(r.stargazers_count)}</span>
          <span>🍴 ${fmtNum(r.forks_count)}</span>
          <span>📄 Skill: <code style="background:rgba(255,255,255,0.05);padding:2px 6px;border-radius:4px;">${r.skillPath}</code></span>
        </div>
        <div class="repo-actions">
          <button class="preset-chip" onclick="convertRepo('${r.full_name}')">⚡ ${t('appsExtract')}</button>
          <a href="${r.html_url}" class="btn-sm" target="_blank" rel="noopener">🔗 ${t('appsView')}</a>
        </div>
      </div>
    </div>
  `).join('');
}

// ===================== INSTALL GUIDES =====================
let activeTab = 'kimi';

const INSTALL_GUIDES = {
  kimi: {
    title: 'Kimi (Moonshot AI)', file: 'SKILL.md', color: '#00D4FF',
    steps: [
      { title:'Crear el directorio / Create directory', desc:'Crear carpeta para el skill / Create skill folder', cmd:'mkdir -p ~/.kimi/skills/my-skill' },
      { title:'Guardar el archivo / Save file', desc:'Guardar SKILL.md convertido / Save converted SKILL.md', cmd:'# Copiar contenido en:\n~/.kimi/skills/my-skill/SKILL.md' },
      { title:'Verificar / Verify', desc:'Comprobar que existe / Check it exists', cmd:'cat ~/.kimi/skills/my-skill/SKILL.md' },
      { title:'Reiniciar Kimi / Restart Kimi', desc:'Recargar para activar / Reload to activate', cmd:'# Refrescar la pagina web de Kimi' },
      { title:'Probar / Test', desc:'Preguntar algo relacionado / Ask something related', cmd:'# "Ayudame a escribir tests"' },
    ],
    tip: 'Kimi detecta skills automaticamente por palabras clave en description.',
  },
  cursor: {
    title: 'Cursor IDE', file: '.cursorrules', color: '#A855F7',
    steps: [
      { title:'Guardar archivo / Save file', desc:'En raiz del proyecto / In project root', cmd:'# Guardar como .cursorrules\n~/mi-proyecto/.cursorrules' },
      { title:'Verificar / Verify', desc:'Cursor lo lee automaticamente / Cursor reads it automatically', cmd:'ls -la ~/mi-proyecto/.cursorrules' },
      { title:'Usar Cursor / Use Cursor', desc:'Abrir proyecto en Cursor / Open project in Cursor', cmd:'# Cursor aplica reglas al agente IA' },
      { title:'Reiniciar si necesario / Restart if needed', desc:'Cmd+Shift+P -> "Cursor: Reload Window"', cmd:'Cmd+Shift+P -> "Cursor: Reload Window"' },
      { title:'Probar / Test', desc:'Escribir codigo y observar / Write code and watch', cmd:'# El agente seguira tus reglas' },
    ],
    tip: '.cursorrules tambien funciona en subcarpetas para reglas por proyecto.',
  },
  codeium: {
    title: 'Codeium / Windsurf', file: 'SKILL.md', color: '#4ADE80',
    steps: [
      { title:'Crear directorio / Create directory', desc:'En carpeta de Codeium / In Codeium folder', cmd:'mkdir -p ~/.codeium/skills/my-skill' },
      { title:'Guardar archivo / Save file', desc:'Guardar skill convertido / Save converted skill', cmd:'# Copiar en:\n~/.codeium/skills/my-skill/SKILL.md' },
      { title:'Verificar / Verify', desc:'Comprobar que existe / Check it exists', cmd:'cat ~/.codeium/skills/my-skill/SKILL.md' },
      { title:'Reiniciar / Restart', desc:'Reiniciar Windsurf/Codeium', cmd:'# Cerrar y volver a abrir' },
      { title:'Probar / Test', desc:'Usar chat de IA / Use AI chat', cmd:'# El skill se activa por palabras clave' },
    ],
    tip: 'Codeium usa el mismo formato que Kimi (SKILL.md con YAML frontmatter).',
  },
  claude: {
    title: 'Claude Code (Anthropic)', file: 'CLAUDE.md', color: '#F59E0B',
    steps: [
      { title:'Guardar archivo / Save file', desc:'En raiz del proyecto / In project root', cmd:'# Guardar como CLAUDE.md\n~/mi-proyecto/CLAUDE.md' },
      { title:'Verificar / Verify', desc:'Claude Code lo lee automaticamente', cmd:'ls -la ~/mi-proyecto/CLAUDE.md' },
      { title:'Usar Claude Code / Use Claude Code', desc:'Abrir Claude Code en el proyecto', cmd:'cd ~/mi-proyecto && claude' },
      { title:'Para skills globales / For global skills', desc:'Guardar en directorio global', cmd:'mkdir -p ~/.claude && cp CLAUDE.md ~/.claude/' },
      { title:'Probar / Test', desc:'Interactuar con Claude', cmd:'# Claude seguira las instrucciones' },
    ],
    tip: 'Claude Code lee CLAUDE.md del directorio actual cada vez que inicia.',
  },
  other: {
    title: lang==='es'?'Otras IAs':'Other AIs', file: 'SKILL.md', color: '#F472B6',
    steps: [
      { title:'Leer documentacion / Read docs', desc:'Consultar docs oficiales / Check official docs', cmd:'# Buscar "custom instructions" o "skills"' },
      { title:'Identificar formato / Identify format', desc:'Cada IA tiene su formato', cmd:'# Kimi/Codium -> SKILL.md\n# Cursor -> .cursorrules\n# Claude -> CLAUDE.md' },
      { title:'Convertir / Convert', desc:'Usar SkillBridge para adaptar', cmd:'# Seleccionar "Custom Format"' },
      { title:'Guardar / Save', desc:'Segun documentacion de la IA', cmd:'# Ej: ~/.ai/skills/' },
      { title:'Probar y ajustar / Test and adjust', desc:'Iterar hasta funcionar', cmd:'# Ajustar segun necesidad' },
    ],
    tip: 'La mayoria de IAs usan Markdown con instrucciones imperativas.',
  },
};

function renderInstallTabs(tabId) {
  activeTab = tabId;
  const tabsEl = document.getElementById('installTabs');
  tabsEl.innerHTML = Object.keys(INSTALL_GUIDES).map(id => {
    const g = INSTALL_GUIDES[id];
    return `<button class="tab ${id===tabId?'active':''}" onclick="renderInstallTabs('${id}')" style="${id===tabId?`border-color:${g.color}40;background:${g.color}10`:''}">${g.title}</button>`;
  }).join('');

  const guide = INSTALL_GUIDES[tabId];
  document.getElementById('installContent').innerHTML = `
    <h3 style="margin-bottom:16px;color:${guide.color}">${guide.title} — <code>${guide.file}</code></h3>
    ${guide.steps.map((s,i) => `
      <div class="step">
        <div class="step-num" style="background:${guide.color}15;color:${guide.color}">${i+1}</div>
        <div class="step-content">
          <h4>${s.title}</h4>
          <p class="muted">${s.desc}</p>
          <div class="code-block">
            <button onclick="copyText(this,'${s.cmd.replace(/'/g,"\\'")}')">📋</button>
            <pre style="margin:0"><code>${s.cmd}</code></pre>
          </div>
        </div>
      </div>
    `).join('')}
    <div style="padding:12px;border-radius:8px;background:rgba(0,212,255,0.05);border:1px solid rgba(0,212,255,0.15);margin-top:16px;font-size:13px;color:var(--muted)">
      💡 ${guide.tip}
    </div>
  `;
}

function copyText(btn, text) {
  navigator.clipboard.writeText(text);
  btn.textContent = '✅'; setTimeout(() => btn.textContent = '📋', 1500);
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderLang();
  renderCuratedSkills();
  renderSkillRepos();
  renderAppRepos();
  renderInstallTabs('kimi');
  onTargetChange();
});
