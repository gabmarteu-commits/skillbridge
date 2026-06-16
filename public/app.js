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
    // Search
    searchTitle:'🔍 Buscar Skills y Repositorios', searchSub:'Buscá skills individuales o repositorios completos. Un repo puede contener muchos skills adentro.',
    searchBtn:'Buscar', searching:'Buscando...', searchNoResults:'No se encontraron resultados. Probá con otra palabra.',
    searchResultsSkills:'Skills Individuales', searchResultsRepos:'Repositorios Encontrados',
    searchSkillBadge:'SKILL INDIVIDUAL', searchRepoBadge:'REPOSITORIO',
    searchViewSkills:'Ver {count} skills', searchLoadFile:'Cargar archivo',
    searchFilesInRepo:'Archivos skill en este repo:',
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
    // Search
    searchTitle:'🔍 Search Skills & Repositories', searchSub:'Search individual skills or complete repositories. A repo can contain many skills inside.',
    searchBtn:'Search', searching:'Searching...', searchNoResults:'No results found. Try a different term.',
    searchResultsSkills:'Individual Skills', searchResultsRepos:'Repositories Found',
    searchSkillBadge:'INDIVIDUAL SKILL', searchRepoBadge:'REPOSITORY',
    searchViewSkills:'View {count} skills', searchLoadFile:'Load file',
    searchFilesInRepo:'Skill files in this repo:',
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
  // Show CURRENT language (ES = viewing in Spanish, EN = viewing in English)
  document.getElementById('langBtn').textContent = lang === 'es' ? 'ES' : 'EN';
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
// Loaded dynamically from backend. Start with empty, fill on init.
let CURATED_SKILLS = [];

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
// Loaded dynamically from backend
let SKILL_REPOS = [];

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
// Popular repos that are NOT skill repos — loaded dynamically from backend
let APP_REPOS = [];

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

// ===================== SEARCH =====================
let searchFilter = 'all'; // all | skills | repos
let searchRepoCache = {}; // cache browse-repo results

function setSearchFilter(f) {
  searchFilter = f;
  document.querySelectorAll('.search-filter').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-filter') === f);
  });
  // Re-render current results if any
  const resultsEl = document.getElementById('searchResults');
  if (resultsEl.dataset.lastQuery) {
    renderSearchResults(resultsEl.dataset.lastQuery, JSON.parse(resultsEl.dataset.lastResults || '{}'));
  }
}

async function performSearch() {
  const query = document.getElementById('searchInput').value.trim();
  const resultsEl = document.getElementById('searchResults');
  const btn = document.getElementById('searchBtn');

  if (!query) { resultsEl.innerHTML = ''; return; }

  btn.innerHTML = '<span class="spinner"></span> ' + (lang === 'es' ? 'Buscando...' : 'Searching...');
  resultsEl.innerHTML = `<div class="search-loading"><span class="spinner"></span></div>`;

  const results = { skills: [], repos: [] };

  // 1. Search curated skills locally (if filter allows)
  if (searchFilter !== 'repos') {
    const q = query.toLowerCase();
    results.skills = CURATED_SKILLS.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.type.toLowerCase().includes(q) ||
      s.id.toLowerCase().includes(q)
    );
  }

  // 2. Search GitHub repos (if filter allows)
  if (searchFilter !== 'skills') {
    try {
      // Use multiple search queries for better coverage
      const searchQueries = [
        `${query} claude skill`,
        `${query} CLAUDE.md`,
        `${query} skill`,
        query
      ];
      const allRepos = [];
      const seen = new Set();

      for (const sq of searchQueries) {
        try {
          const resp = await fetch(`/api/search-skills?q=${encodeURIComponent(sq)}`);
          if (resp.ok) {
            const items = await resp.json();
            for (const r of items) {
              if (!seen.has(r.full_name)) {
                seen.add(r.full_name);
                allRepos.push(r);
              }
            }
          }
        } catch (e) {}
        if (allRepos.length >= 10) break;
      }

      results.repos = allRepos.slice(0, 15);

      // For each repo, pre-fetch skill count
      for (const repo of results.repos) {
        if (!searchRepoCache[repo.full_name]) {
          fetch(`/api/browse-repo?repo=${encodeURIComponent(repo.full_name)}`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (data && data.success) {
                searchRepoCache[repo.full_name] = data;
                // Re-render if this repo is visible
                updateRepoSkillCount(repo.full_name, data);
              }
            })
            .catch(() => {});
        }
      }

    } catch (e) {
      console.error('Search repos error:', e);
    }
  }

  resultsEl.dataset.lastQuery = query;
  resultsEl.dataset.lastResults = JSON.stringify({ skills: results.skills.map(s => s.id), repos: results.repos.map(r => r.full_name) });

  renderSearchResults(query, results);
  btn.innerHTML = '🔍 ' + t('searchBtn');
}

function renderSearchResults(query, results) {
  const el = document.getElementById('searchResults');
  const showSkills = searchFilter !== 'repos';
  const showRepos = searchFilter !== 'skills';

  let html = '';

  // Skills section
  if (showSkills && results.skills && results.skills.length > 0) {
    html += `<h3>🎯 ${t('searchResultsSkills')} <span class="count">${results.skills.length}</span></h3>`;
    for (const s of results.skills) {
      html += `
        <div class="result-skill-row">
          <span class="badge-skill">${t('searchSkillBadge')}</span>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;font-size:14px;">${s.name}</div>
            <div style="font-size:12px;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.description}</div>
          </div>
          <span style="font-size:11px;color:var(--dim);flex-shrink:0;">⭐ ${s.stars >= 1000 ? (s.stars/1000).toFixed(1)+'k' : s.stars}</span>
          <button class="btn-load" onclick="loadPreset('${s.id}')">⚡ ${t('curatedLoad')}</button>
        </div>
      `;
    }
  }

  // Repos section
  if (showRepos && results.repos && results.repos.length > 0) {
    if (html) html += '<div style="height:16px;"></div>';
    html += `<h3>📦 ${t('searchResultsRepos')} <span class="count">${results.repos.length}</span></h3>`;
    for (const r of results.repos) {
      const cache = searchRepoCache[r.full_name];
      const skillCount = cache ? cache.skillFiles.length : null;
      html += `
        <div class="result-repo-row" id="search-repo-${r.full_name.replace(/[\/]/g,'--')}">
          <div class="result-repo-header">
            <span class="badge-repo">${t('searchRepoBadge')}</span>
            <a href="${r.html_url}" target="_blank" rel="noopener">${r.full_name}</a>
            <span class="repo-stats">⭐ ${fmtNum(r.stargazers_count)} · 🍴 ${fmtNum(r.forks_count)}</span>
          </div>
          <div class="result-repo-desc">${r.description || ''}</div>
          <div class="result-repo-footer">
            <div class="result-repo-meta">
              ${skillCount !== null
                ? `<button class="skill-count-badge" onclick="toggleRepoFiles('${r.full_name.replace(/'/g,"\\'")}')">📄 ${t('searchViewSkills').replace('{count}', skillCount)}</button>`
                : `<span style="font-size:11px;color:var(--dim);"><span class="spinner"></span> ${lang==='es'?'Contando skills...':'Counting skills...'}</span>`
              }
            </div>
            <div class="repo-actions">
              <button class="preset-chip" onclick="convertRepo('${r.full_name}')">⚡ ${lang==='es'?'Convertir':'Convert'}</button>
              <a href="${r.html_url}" class="btn-sm" target="_blank" rel="noopener">🔗 GitHub</a>
            </div>
          </div>
          <div class="repo-files-list hidden" id="repo-files-${r.full_name.replace(/[\/]/g,'--')}"></div>
        </div>
      `;
    }
  }

  if (!html) {
    html = `<div class="search-empty">🔍 ${t('searchNoResults')}</div>`;
  }

  el.innerHTML = html;
}

function updateRepoSkillCount(repoName, data) {
  const el = document.getElementById(`search-repo-${repoName.replace(/[\/]/g, '--')}`);
  if (!el) return;
  const metaEl = el.querySelector('.result-repo-meta');
  if (metaEl && data.skillFiles) {
    metaEl.innerHTML = `<button class="skill-count-badge" onclick="toggleRepoFiles('${repoName.replace(/'/g,"\\'")}')">📄 ${t('searchViewSkills').replace('{count}', data.skillFiles.length)}</button>`;
  }
}

async function toggleRepoFiles(repoName) {
  const containerId = `repo-files-${repoName.replace(/[\/]/g, '--')}`;
  const container = document.getElementById(containerId);
  if (!container) return;

  // Toggle visibility
  if (!container.classList.contains('hidden') && container.innerHTML) {
    container.classList.add('hidden');
    return;
  }

  container.classList.remove('hidden');

  // Check cache first
  if (searchRepoCache[repoName]) {
    renderRepoFiles(container, repoName, searchRepoCache[repoName]);
    return;
  }

  container.innerHTML = '<div style="text-align:center;padding:10px;"><span class="spinner"></span></div>';

  try {
    const resp = await fetch(`/api/browse-repo?repo=${encodeURIComponent(repoName)}`);
    const data = await resp.json();
    if (data.success) {
      searchRepoCache[repoName] = data;
      renderRepoFiles(container, repoName, data);
    } else {
      container.innerHTML = '<div style="color:var(--dim);font-size:12px;">Could not browse repo files</div>';
    }
  } catch (e) {
    container.innerHTML = '<div style="color:var(--dim);font-size:12px;">Error loading files</div>';
  }
}

function renderRepoFiles(container, repoName, data) {
  const files = data.skillFiles || [];
  if (files.length === 0) {
    container.innerHTML = '<div style="color:var(--dim);font-size:12px;">No skill files detected</div>';
    return;
  }

  let html = `<h4>${t('searchFilesInRepo')}</h4>`;
  for (const f of files.slice(0, 15)) {
    const isHighConfidence = f.score >= 3;
    html += `
      <div class="repo-file-item">
        <span>${isHighConfidence ? '✅' : '◻️'}</span>
        <code>${f.path}</code>
        <span style="margin-left:auto;font-size:11px;color:var(--dim);">${(f.size/1024).toFixed(1)}KB</span>
        <button onclick="loadRepoFile('${repoName.replace(/'/g,"\\'")}', '${f.path.replace(/'/g,"\\'")}')">${t('searchLoadFile')}</button>
      </div>
    `;
  }
  if (files.length > 15) {
    html += `<div style="font-size:11px;color:var(--dim);padding:5px 0;">...and ${files.length - 15} more files</div>`;
  }
  container.innerHTML = html;
}

async function loadRepoFile(repoName, filePath) {
  // Use the fetch-skill endpoint but force a specific path
  // We'll construct a manual fetch to raw.githubusercontent
  const branches = ['main', 'master'];
  for (const branch of branches) {
    try {
      const url = `https://raw.githubusercontent.com/${repoName}/${branch}/${filePath}`;
      const resp = await fetch(url);
      if (resp.ok) {
        const content = await resp.text();
        if (content.length > 50) {
          document.getElementById('input').value = content;
          onInput();
          document.getElementById('converter').scrollIntoView({ behavior: 'smooth' });
          showToast(t('ghOk') + ` (${filePath})`, 'success');
          return;
        }
      }
    } catch (e) {}
  }
  showToast('Failed to load file', 'error');
}

// ===================== DYNAMIC DATA LOADING =====================
async function loadDynamicData() {
  try {
    // Load curated skills
    const csResp = await fetch('/api/data/curated-skills');
    if (csResp.ok) {
      CURATED_SKILLS = await csResp.json();
      renderCuratedSkills();
    }

    // Load skill repos
    const srResp = await fetch('/api/data/skill-repos');
    if (srResp.ok) {
      SKILL_REPOS = await srResp.json();
      renderSkillRepos();
    }

    // Load app repos
    const arResp = await fetch('/api/data/app-repos');
    if (arResp.ok) {
      APP_REPOS = await arResp.json();
      renderAppRepos();
    }
  } catch (e) {
    console.error('Failed to load dynamic data:', e);
    // Fallback: keep whatever we have (defaults loaded from inline if any)
  }
}

// ===================== INIT =====================
document.addEventListener('DOMContentLoaded', () => {
  renderLang();
  loadDynamicData();
  renderInstallTabs('kimi');
  onTargetChange();
});
