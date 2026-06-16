// Default data for SkillBridge - can be extended without code changes
const DEFAULT_DATA = {
  // Curated individual skills
  curatedSkills: [
    {
      id: 'karpathy',
      name: 'Karpathy Guidelines',
      icon: '👨‍🔬', iconClass: 'blue',
      type: 'Coding Style', typeClass: 'blue',
      description: 'Behavioral guidelines by Andrej Karpathy to reduce common LLM coding mistakes. Covers thinking before coding, simplicity first, surgical changes, and goal-driven execution.',
      repo: 'multica-ai/andrej-karpathy-skills',
      stars: 175500, lines: 45,
      content: `# CLAUDE.md\n\nBehavioral guidelines to reduce common LLM coding mistakes.\n\n## 1. Think Before Coding\n\n**Don't assume. Don't hide confusion. Surface tradeoffs.**\n\nBefore implementing:\n- State your assumptions explicitly. If uncertain, ask.\n- If multiple interpretations exist, present them - don't pick silently.\n- If a simpler approach exists, say so. Push back when warranted.\n\n## 2. Simplicity First\n\n**Minimum code that solves the problem. Nothing speculative.**\n\n- No features beyond what was asked.\n- No abstractions for single-use code.\n- If you write 200 lines and it could be 50, rewrite it.\n\n## 3. Surgical Changes\n\n**Touch only what you must. Clean up only your own mess.**\n\n- Don't "improve" adjacent code, comments, or formatting.\n- Don't refactor things that aren't broken.\n- Match existing style, even if you'd do it differently.\n\n## 4. Goal-Driven Execution\n\n**Define success criteria. Loop until verified.**\n\nTransform tasks into verifiable goals:\n- "Add validation" → "Write tests for invalid inputs, then make them pass"\n- "Fix the bug" → "Write a test that reproduces it, then make it pass"`
    },
    {
      id: 'tdd',
      name: 'Superpowers TDD',
      icon: '🧪', iconClass: 'purple',
      type: 'Testing', typeClass: 'purple',
      description: 'Test-Driven Development workflow for all feature implementation. RED-GREEN-REFACTOR cycle with debugging methodology for Claude Code.',
      repo: 'anthropics/superpowers-tdd',
      stars: 12400, lines: 38,
      content: `# TDD Workflow\n\nTest-Driven Development cycle for all feature implementation.\n\n## RED: Write a Failing Test\n\n- Write a test that describes the desired behavior\n- The test must fail initially\n- Focus on one behavior at a time\n\n## GREEN: Write Minimum Code\n\n- Write only enough code to make the test pass\n- Do not anticipate future requirements\n- Hardcoded values are OK in this phase\n\n## REFACTOR: Clean Up\n\n- Remove duplication\n- Improve naming\n- Run tests after each change\n- Keep tests green\n\n## Debugging\n\n1. Isolate with binary search\n2. Form a hypothesis\n3. Test with minimal reproduction\n4. Fix only after confirmation`
    },
    {
      id: 'creator',
      name: 'Anthropic Skill Creator',
      icon: '✨', iconClass: 'orange',
      type: 'Meta / Guide', typeClass: 'orange',
      description: 'How to create effective skills for AI agents. Covers what makes a good skill, writing effective instructions, and common mistakes to avoid.',
      repo: 'anthropics/skills-create',
      stars: 18300, lines: 42,
      content: `# Skill Creator Guide\n\nHow to create effective skills for AI agents.\n\n## What Makes a Good Skill\n\n1. Solves a specific, repeatable problem\n2. Has clear trigger conditions (when to use)\n3. Contains actionable instructions, not just information\n4. Is concise but complete\n\n## Writing Effective Instructions\n\n- Use imperative voice (do this, check that)\n- Be specific, not vague\n- Include decision trees (if X then Y)\n- Add guardrails (what NOT to do)\n\n## Common Mistakes\n\n- Too broad (not specific enough)\n- Too long (context overflow)\n- Information dump vs actionable guide\n- Missing trigger conditions`
    }
  ],

  // Skill repos (collections whose main purpose is skills)
  skillRepos: [
    { rank: 1, full_name: 'anthropics/skills', description: 'Official Anthropic skills repository — curated collection of CLAUDE.md skills from Anthropic', stargazers_count: 24500, forks_count: 2100, html_url: 'https://github.com/anthropics/skills', skillFiles: ['CLAUDE.md', 'skills/*.md'] },
    { rank: 2, full_name: 'ComposioHQ/awesome-claude-skills', description: 'Community-curated list of awesome Claude Skills with examples and usage guides', stargazers_count: 64600, forks_count: 7100, html_url: 'https://github.com/ComposioHQ/awesome-claude-skills', skillFiles: ['CLAUDE.md', '*.md'] },
    { rank: 3, full_name: 'addyosmani/agent-skills', description: 'Production-grade engineering skills for AI agents — performance, testing, architecture', stargazers_count: 59600, forks_count: 6500, html_url: 'https://github.com/addyosmani/agent-skills', skillFiles: ['CLAUDE.md', 'skills/**/*.md'] },
    { rank: 4, full_name: 'nexu-io/open-design', description: 'Open-source Claude Design alternative with 259+ design skills for AI', stargazers_count: 64900, forks_count: 7300, html_url: 'https://github.com/nexu-io/open-design', skillFiles: ['CLAUDE.md', 'design-skills/*.md'] },
    { rank: 5, full_name: 'moonshot-ai/skills', description: 'Official Kimi (Moonshot AI) skills repository — SKILL.md format examples and templates', stargazers_count: 5200, forks_count: 890, html_url: 'https://github.com/moonshot-ai/skills', skillFiles: ['SKILL.md', 'skills/*.md'] },
    { rank: 6, full_name: 'anthropics/superpowers-tdd', description: 'TDD superpower for Claude Code — test-driven development workflow skill', stargazers_count: 12400, forks_count: 1800, html_url: 'https://github.com/anthropics/superpowers-tdd', skillFiles: ['CLAUDE.md'] },
    { rank: 7, full_name: 'anthropics/superpowers-git', description: 'Git superpower for Claude Code — advanced Git workflow and best practices skill', stargazers_count: 9800, forks_count: 1500, html_url: 'https://github.com/anthropics/superpowers-git', skillFiles: ['CLAUDE.md'] },
    { rank: 8, full_name: 'anthropics/superpowers-debug', description: 'Debug superpower for Claude Code — systematic debugging methodology skill', stargazers_count: 8700, forks_count: 1200, html_url: 'https://github.com/anthropics/superpowers-debug', skillFiles: ['CLAUDE.md'] },
    { rank: 9, full_name: 'anthropics/skills-create', description: 'Skill creation guide — how to write effective CLAUDE.md skills for Claude', stargazers_count: 18300, forks_count: 2400, html_url: 'https://github.com/anthropics/skills-create', skillFiles: ['CLAUDE.md'] },
    { rank: 10, full_name: 'punkpeye/awesome-claude-agents', description: 'Collection of Claude agents and skills with real-world use cases and prompts', stargazers_count: 4100, forks_count: 520, html_url: 'https://github.com/punkpeye/awesome-claude-agents', skillFiles: ['CLAUDE.md', '*.md'] }
  ],

  // App repos with embedded skills
  appRepos: [
    { full_name: 'affaan-m/ECC', description: 'Engineering Coding Challenges platform — includes CLAUDE.md with coding style guidelines for the platform', type: 'Platform', typeClass: 'platform', stargazers_count: 215600, forks_count: 33100, html_url: 'https://github.com/affaan-m/ECC', skillPath: 'CLAUDE.md' },
    { full_name: 'JuliusBrussee/caveman', description: 'Token compression tool — cuts 65% of LLM tokens by talking like caveman. Contains .cursorrules for Claude Code', type: 'Tool', typeClass: 'tool', stargazers_count: 72600, forks_count: 4100, html_url: 'https://github.com/JuliusBrussee/caveman', skillPath: '.cursorrules' },
    { full_name: 'safishamsi/graphify', description: 'Code-to-knowledge-graph converter — turns code/schemas/docs into queryable graphs. Has skills/ directory with AI instructions', type: 'Tool', typeClass: 'tool', stargazers_count: 67200, forks_count: 6800, html_url: 'https://github.com/safishamsi/graphify', skillPath: 'skills/CLAUDE.md' },
    { full_name: 'santifer/career-ops', description: 'AI-powered job search platform with 14 skill modes for different career paths', type: 'Platform', typeClass: 'platform', stargazers_count: 53700, forks_count: 10700, html_url: 'https://github.com/santifer/career-ops', skillPath: 'CLAUDE.md' },
    { full_name: 'jeecgboot/JeecgBoot', description: 'AI low-code Java platform with one-click code generation. Contains docs/CLAUDE.md for AI-assisted development', type: 'Framework', typeClass: 'framework', stargazers_count: 46800, forks_count: 16100, html_url: 'https://github.com/jeecgboot/JeecgBoot', skillPath: 'docs/CLAUDE.md' },
    { full_name: 'Significant-Gravitas/AutoGPT', description: 'Autonomous GPT-4 agent framework. Has .github/CLAUDE.md with development guidelines for contributors', type: 'Framework', typeClass: 'framework', stargazers_count: 174000, forks_count: 45600, html_url: 'https://github.com/Significant-Gravitas/AutoGPT', skillPath: '.github/CLAUDE.md' }
  ]
};

module.exports = DEFAULT_DATA;
