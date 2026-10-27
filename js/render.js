/**
 * CampusLaunch — render.js
 * All page rendering functions: Home, Hackathons, Roadmap, Resources, Weekly, Toolkit, Community, Saved
 */

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function renderHome() {
  const upcoming = CAMPUS_LAUNCH_DATA.hackathons
    .filter(h => daysUntil(h.startDate) >= 0)
    .sort((a,b) => parseDate(a.deadline) - parseDate(b.deadline))
    .slice(0, 3);

  const totalTasks = CAMPUS_LAUNCH_DATA.roadmapStages.reduce((s,st) => s + st.tasks.length, 0);
  const doneTasks = AppState.completedTasks.length;
  const pct = Math.round((doneTasks / totalTasks) * 100);

  // Dashboard strip cards
  const dashEl = document.getElementById('dashboard-strip-content');
  if (dashEl) {
    const urgentDeadlines = CAMPUS_LAUNCH_DATA.hackathons
      .filter(h => daysUntil(h.deadline) >= 0 && daysUntil(h.deadline) <= 30)
      .sort((a,b) => daysUntil(a.deadline) - daysUntil(b.deadline));
    const nextDeadline = urgentDeadlines[0];

    dashEl.innerHTML = `
      <div class="card card-glass">
        <div class="card-header">
          <span class="card-title">Hackathons Tracked</span>
          <span class="card-icon">🚀</span>
        </div>
        <div class="card-value brand">${CAMPUS_LAUNCH_DATA.hackathons.length}</div>
        <div class="card-meta">Verified opportunities for you</div>
      </div>
      <div class="card card-glass" style="cursor:pointer;" onclick="navigateTo('hackathons')">
        <div class="card-header">
          <span class="card-title">Next Deadline</span>
          <span class="card-icon">⏰</span>
        </div>
        <div class="card-value ${nextDeadline && daysUntil(nextDeadline.deadline) <= 7 ? 'urgent' : 'warning'}">${nextDeadline ? `${daysUntil(nextDeadline.deadline)}d` : 'N/A'}</div>
        <div class="card-meta">${nextDeadline ? nextDeadline.name : 'No upcoming deadlines'}</div>
      </div>
      <div class="card card-glass" style="cursor:pointer;" onclick="navigateTo('roadmap')">
        <div class="card-header">
          <span class="card-title">Roadmap Progress</span>
          <span class="card-icon">🗺️</span>
        </div>
        <div class="card-value brand">${pct}%</div>
        <div class="card-meta">${doneTasks} / ${totalTasks} tasks complete</div>
      </div>`;
  }

  // Upcoming hackathons preview
  const upcomingEl = document.getElementById('home-hackathon-preview');
  if (upcomingEl) {
    upcomingEl.innerHTML = `<div class="hackathon-grid stagger">${upcoming.map(hackathonCardHTML).join('')}</div>`;
  }

  // Recent resources
  const resEl = document.getElementById('home-resources-preview');
  if (resEl) {
    const res = CAMPUS_LAUNCH_DATA.learningResources.slice(0, 4);
    resEl.innerHTML = `<div class="resource-grid stagger">${res.map(resourceCardHTML).join('')}</div>`;
  }
}

// ─── HACKATHON PAGE ────────────────────────────────────────────────────────────
function renderHackathons() {
  const list = getFilteredHackathons();
  const container = document.getElementById('hackathon-list');
  if (!container) return;

  const countEl = document.getElementById('hackathon-count');
  if (countEl) countEl.textContent = `${list.length} opportunities`;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">No hackathons match your filters</div>
        <div class="empty-text">Try adjusting your filters or search term.</div>
        <button class="btn btn-secondary btn-sm" onclick="resetHackathonFilters()">Reset Filters</button>
      </div>`;
    return;
  }

  container.innerHTML = `<div class="hackathon-grid stagger">${list.map(hackathonCardHTML).join('')}</div>`;
}

function resetHackathonFilters() {
  AppState.hackFilters = { search: '', format: 'all', level: 'all', domain: 'all', sort: 'deadline' };
  const searchEl = document.getElementById('hack-search');
  if (searchEl) searchEl.value = '';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.filter-chip[data-value="all"]').forEach(c => c.classList.add('active'));
  renderHackathons();
}

// ─── ROADMAP PAGE ─────────────────────────────────────────────────────────────
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  if (!container) return;

  const totalAll = CAMPUS_LAUNCH_DATA.roadmapStages.reduce((s,st) => s + st.tasks.length, 0);
  const doneAll = AppState.completedTasks.length;
  const pctAll = Math.round((doneAll / totalAll) * 100);

  // Update overall progress
  const overallEl = document.getElementById('roadmap-overall-pct');
  if (overallEl) overallEl.textContent = `${pctAll}%`;
  const overallBar = document.getElementById('roadmap-overall-bar');
  if (overallBar) overallBar.style.width = `${pctAll}%`;

  // SVG ring
  const ring = document.getElementById('progress-ring-fill');
  if (ring) {
    const r = 54; const circ = 2 * Math.PI * r;
    ring.style.strokeDasharray = circ;
    ring.style.strokeDashoffset = circ - (pctAll / 100) * circ;
  }
  const ringText = document.getElementById('progress-ring-text');
  if (ringText) ringText.textContent = `${pctAll}%`;

  container.innerHTML = `<div class="roadmap-stages stagger">
    ${CAMPUS_LAUNCH_DATA.roadmapStages.map(stage => stageCardHTML(stage)).join('')}
  </div>`;
}

function stageCardHTML(stage) {
  const stageTasks = stage.tasks.length;
  const stageDone = stage.tasks.filter(t => AppState.completedTasks.includes(t.id)).length;
  const stagePct = Math.round((stageDone / stageTasks) * 100);
  const isExpanded = AppState.expandedStages.has(stage.id);

  const tasksHTML = stage.tasks.map(t => {
    const done = AppState.completedTasks.includes(t.id);
    const resHTML = t.resources.map(r =>
      `<a href="${r.url}" target="_blank" rel="noopener noreferrer" class="task-tag" style="color:var(--brand-accent);border-color:var(--border-brand);">📎 ${r.name}</a>`
    ).join('');

    return `
      <div class="task-item ${done ? 'completed' : ''}" data-id="${t.id}" onclick="toggleTask('${t.id}')">
        <div class="task-checkbox ${done ? 'checked' : ''}">${done ? '✓' : ''}</div>
        <div class="task-content">
          <div class="task-title">${t.title}</div>
          <div class="task-desc">${t.topics}</div>
          <div class="task-tags" style="margin-bottom:6px;">
            ${diffTag(t.difficulty)}
            <span class="task-tag">⏱ ${t.time}</span>
          </div>
          <div class="task-tags">${resHTML}</div>
          ${t.exercise ? `<div style="margin-top:8px;padding:8px 10px;background:rgba(124,58,237,0.06);border-left:3px solid var(--brand-primary);border-radius:0 6px 6px 0;font-size:0.78rem;color:var(--text-secondary);"><strong style="color:var(--brand-accent);">🛠 Exercise:</strong> ${t.exercise}</div>` : ''}
        </div>
      </div>`;
  }).join('');

  return `
    <div class="stage-card ${isExpanded ? 'expanded' : ''}" id="${stage.id}">
      <div class="stage-header" onclick="toggleStage('${stage.id}')">
        <div class="stage-number">${stage.stageNumber}</div>
        <div class="stage-info">
          <div class="stage-title">${stage.title}</div>
          <div class="stage-meta">⏳ ${stage.timeline} · ${stageDone}/${stageTasks} tasks done</div>
        </div>
        <div class="stage-progress-wrap">
          <div class="stage-progress-bar"><div class="stage-progress-fill" style="width:${stagePct}%"></div></div>
          <span class="stage-percent">${stagePct}%</span>
        </div>
        <span class="stage-chevron">›</span>
      </div>
      <div class="stage-body">
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:var(--space-4);line-height:1.65;padding:12px;background:rgba(124,58,237,0.05);border-radius:var(--radius-md);">💡 ${stage.whyItMatters}</p>
        <div class="task-list">${tasksHTML}</div>
      </div>
    </div>`;
}

function toggleStage(id) {
  if (AppState.expandedStages.has(id)) AppState.expandedStages.delete(id);
  else AppState.expandedStages.add(id);
  renderRoadmap();
}

// ─── RESOURCES PAGE ────────────────────────────────────────────────────────────
function renderResources() {
  const container = document.getElementById('resource-list');
  if (!container) return;

  const { search, category } = AppState.resourceFilters;
  let list = [...CAMPUS_LAUNCH_DATA.learningResources];

  if (search) {
    const q = search.toLowerCase();
    list = list.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.tags.some(t => t.toLowerCase().includes(q))
    );
  }
  if (category !== 'all') {
    list = list.filter(r => r.category.toLowerCase().includes(category.toLowerCase()));
  }

  const countEl = document.getElementById('resource-count');
  if (countEl) countEl.textContent = `${list.length} resources`;

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">
      <div class="empty-icon">📚</div>
      <div class="empty-title">No resources match your search</div>
      <button class="btn btn-secondary btn-sm" onclick="AppState.resourceFilters={search:'',category:'all'};renderResources();">Clear Filters</button>
    </div>`;
    return;
  }
  container.innerHTML = `<div class="resource-grid stagger">${list.map(resourceCardHTML).join('')}</div>`;
}

function resourceCardHTML(r) {
  const saved = AppState.savedResources.includes(r.id);
  const catColor = { Python:'domain-ai', JavaScript:'domain-web', 'Web Development':'domain-web',
    'Data Structures & Algorithms':'domain-cyber', 'Git & GitHub':'domain-data',
    'AI & Machine Learning':'domain-ai', 'Mathematics for Computer Science':'domain-app',
    'Hackathon Preparation':'domain-open', 'Resume & Internship Preparation':'domain-data' };
  const cls = catColor[r.category] || 'domain-open';

  return `
    <div class="resource-card fade-in">
      <div class="resource-header">
        <div>
          <div class="resource-title">${r.title}</div>
          <div class="resource-author">${r.author}</div>
        </div>
        <button class="bookmark-btn res-bookmark ${saved ? 'saved' : ''}" data-id="${r.id}" onclick="toggleSaveResource('${r.id}')" aria-label="Bookmark ${r.title}">${saved ? '🔖' : '🏷️'}</button>
      </div>
      <p class="resource-desc">${r.description}</p>
      <div class="resource-footer">
        <span class="domain-tag ${cls}">${r.category}</span>
        ${diffTag(r.difficulty)}
        <span class="resource-meta-tag">⏱ ${r.estimatedTime}</span>
        <span class="resource-meta-tag meta-free">${r.isFree ? '✅ Free' : '💳 Paid'}</span>
      </div>
      <div style="display:flex;gap:8px;margin-top:8px;">
        <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;justify-content:center;">📖 Start Learning</a>
      </div>
    </div>`;
}

// ─── WEEKLY PLAN PAGE ─────────────────────────────────────────────────────────
let onboardingStep = 0;
const onboardingAnswers = {};
const ONBOARDING_QUESTIONS = [
  {
    id: 'semester', label: 'Step 1 of 5', text: 'Which semester are you currently in?',
    options: [
      { icon: '🌱', label: 'Semester 1 (Just Joined)' },
      { icon: '📚', label: 'Semester 2' },
      { icon: '🚀', label: 'Semester 3+' }
    ]
  },
  {
    id: 'languages', label: 'Step 2 of 5', text: 'Which programming languages do you already know?',
    options: [
      { icon: '🆕', label: 'None yet, absolute beginner!' },
      { icon: '🐍', label: 'Python basics' },
      { icon: '🌐', label: 'HTML / CSS' },
      { icon: '⚡', label: 'JavaScript' }
    ],
    multi: true
  },
  {
    id: 'hours', label: 'Step 3 of 5', text: 'How many hours per week can you realistically dedicate?',
    options: [
      { icon: '🌙', label: '5-7 hours (Light)' },
      { icon: '📅', label: '8-14 hours (Steady)' },
      { icon: '🔥', label: '15-20 hours (Intense)' }
    ]
  },
  {
    id: 'interest', label: 'Step 4 of 5', text: 'What excites you most right now?',
    options: [
      { icon: '🤖', label: 'AI & Machine Learning' },
      { icon: '🌐', label: 'Web Development' },
      { icon: '🏆', label: 'Competitive Programming' },
      { icon: '🔭', label: 'Exploring Everything' }
    ]
  },
  {
    id: 'hackathon', label: 'Step 5 of 5', text: 'Have you participated in a hackathon before?',
    options: [
      { icon: '🙅', label: 'Never — I want to try my first!' },
      { icon: '👶', label: 'Yes, once (as a beginner)' },
      { icon: '💪', label: 'Yes, multiple times' }
    ]
  }
];

function renderWeekly() {
  if (AppState.onboardingAnswers) {
    renderWeekPlan(AppState.onboardingAnswers);
  } else {
    renderOnboarding();
  }
}

function renderOnboarding() {
  const container = document.getElementById('weekly-content');
  if (!container) return;

  const q = ONBOARDING_QUESTIONS[onboardingStep];
  const dotsHTML = ONBOARDING_QUESTIONS.map((_, i) =>
    `<div class="step-dot ${i < onboardingStep ? 'done' : i === onboardingStep ? 'active' : ''}"></div>`
  ).join('');

  const optionsHTML = q.options.map((opt, i) => `
    <button class="option-btn" id="opt-${onboardingStep}-${i}" onclick="selectOption(${onboardingStep}, ${i}, '${opt.label}', ${q.multi || false})">
      <div class="opt-icon">${opt.icon}</div>
      <div class="opt-label">${opt.label}</div>
    </button>`).join('');

  container.innerHTML = `
    <div style="max-width:640px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:var(--space-8);">
        <div class="section-eyebrow">✨ Personalized Weekly Plan</div>
        <h2 class="section-title">Your Next 7 Days</h2>
        <p class="section-subtitle">Answer 5 quick questions to get a realistic, personalized action plan.</p>
      </div>
      <div class="onboarding-card">
        <div class="step-indicator">${dotsHTML}</div>
        <div class="q-label">${q.label}</div>
        <div class="q-text">${q.text}</div>
        <div class="option-grid">${optionsHTML}</div>
        <div style="display:flex;justify-content:space-between;margin-top:var(--space-6);">
          ${onboardingStep > 0 ? `<button class="btn btn-ghost btn-sm" onclick="onboardingBack()">← Back</button>` : '<div></div>'}
          <button class="btn btn-primary btn-sm" id="next-btn" onclick="onboardingNext()" disabled>Continue →</button>
        </div>
      </div>
    </div>`;
}

function selectOption(step, idx, label, multi) {
  if (!multi) {
    document.querySelectorAll(`.option-btn[id^="opt-${step}-"]`).forEach(b => b.classList.remove('selected'));
    document.getElementById(`opt-${step}-${idx}`)?.classList.add('selected');
    onboardingAnswers[ONBOARDING_QUESTIONS[step].id] = label;
  } else {
    const btn = document.getElementById(`opt-${step}-${idx}`);
    btn?.classList.toggle('selected');
    const selected = Array.from(document.querySelectorAll(`.option-btn[id^="opt-${step}-"].selected`)).map(b => b.querySelector('.opt-label').textContent);
    onboardingAnswers[ONBOARDING_QUESTIONS[step].id] = selected.join(', ') || '';
  }
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.disabled = !onboardingAnswers[ONBOARDING_QUESTIONS[step].id];
}

function onboardingNext() {
  if (!onboardingAnswers[ONBOARDING_QUESTIONS[onboardingStep].id]) return;
  onboardingStep++;
  if (onboardingStep >= ONBOARDING_QUESTIONS.length) {
    AppState.onboardingAnswers = { ...onboardingAnswers };
    persist('cl-onboarding', AppState.onboardingAnswers);
    renderWeekPlan(AppState.onboardingAnswers);
    onboardingStep = 0;
  } else {
    renderOnboarding();
  }
}

function onboardingBack() {
  if (onboardingStep > 0) { onboardingStep--; renderOnboarding(); }
}

function generateWeekPlan(answers) {
  const isBeginnerLang = answers.languages?.includes('None') || !answers.languages;
  const isHeavy = answers.hours?.includes('15-20');
  const isSteady = answers.hours?.includes('8-14');
  const isAI = answers.interest?.includes('AI');
  const isWeb = answers.interest?.includes('Web');
  const noHackathon = answers.hackathon?.includes('Never');

  const plan = [
    {
      day: 'Monday', emoji: '🟣',
      tasks: [
        { id: 'w-mon-1', text: isBeginnerLang ? 'CS50P: Complete Week 1 lecture + problem set' : 'Python: Practice 3 dictionary/list problems on HackerRank', type: 'learn' },
        { id: 'w-mon-2', text: 'Set up VS Code with Python extension + Run "Hello World"', type: 'code' },
      ]
    },
    {
      day: 'Tuesday', emoji: '🔵',
      tasks: [
        { id: 'w-tue-1', text: isBeginnerLang ? 'Practice: for loops, while loops, functions (30 min)' : 'LeetCode: Solve 1 Easy Array problem', type: 'code' },
        { id: 'w-tue-2', text: 'Git: Initialize a repo, make 3 commits, push to GitHub', type: 'build' },
      ]
    },
    {
      day: 'Wednesday', emoji: '🟢',
      tasks: [
        { id: 'w-wed-1', text: isAI ? 'Kaggle Learn: "Python" micro-course – first 2 exercises' : (isWeb ? 'MDN: HTML semantic structure – build a club profile page' : 'CS50P: Week 2 - Conditionals & Loops lecture'), type: 'learn' },
        { id: 'w-wed-2', text: noHackathon ? 'Browse CampusLaunch Hackathon Hub – bookmark 2 beginner hackathons' : 'Join 1 active hackathon community Discord server', type: 'hack' },
      ]
    },
    {
      day: 'Thursday', emoji: '🟡',
      tasks: [
        { id: 'w-thu-1', text: isWeb ? 'CSS: Build a flexbox-based navigation bar for a project' : 'Build: Student GPA Calculator CLI in Python (functions + loops)', type: 'build' },
        { id: 'w-thu-2', text: 'Read GitHub Skills: "Intro to GitHub" interactive lesson', type: 'learn' },
      ]
    },
    {
      day: 'Friday', emoji: '🟠',
      tasks: [
        { id: 'w-fri-1', text: isAI ? 'Kaggle: Load a dataset with Pandas – explore 3 statistics' : 'JavaScript.info: Read Part 1 Chapter 1 – Variables and Types', type: 'learn' },
        { id: 'w-fri-2', text: 'Claim GitHub Student Developer Pack (free tools & credits)', type: 'hack' },
        ...(isHeavy || isSteady ? [{ id: 'w-fri-3', text: 'LeetCode: Solve "Two Sum" and "Valid Anagram" (beginner DSA)', type: 'code' }] : [])
      ]
    },
    {
      day: 'Saturday', emoji: '⚡',
      tasks: [
        { id: 'w-sat-1', text: 'Weekend Project: Build a To-Do List web app with localStorage', type: 'build' },
        { id: 'w-sat-2', text: isAI ? 'Watch: 3Blue1Brown Neural Networks Episode 1 (visual intuition)' : 'CSS Grid Garden: Complete first 10 levels', type: 'learn' },
        ...(isHeavy ? [{ id: 'w-sat-3', text: 'CodeChef Starters: Participate in weekly contest (Div 4)', type: 'hack' }] : [])
      ]
    },
    {
      day: 'Sunday', emoji: '🌟',
      tasks: [
        { id: 'w-sun-1', text: 'Review & Polish: Add README to your GitHub project', type: 'build' },
        { id: 'w-sun-2', text: 'Plan next week: Open CampusLaunch Roadmap — check off completed tasks', type: 'hack' },
        { id: 'w-sun-3', text: 'Rest & Recharge — no burnout in Week 1! 🧘', type: 'learn' }
      ]
    }
  ];

  return plan;
}

function renderWeekPlan(answers) {
  const container = document.getElementById('weekly-content');
  if (!container) return;

  const plan = generateWeekPlan(answers);
  const total = plan.reduce((s,d) => s + d.tasks.length, 0);
  const done = plan.reduce((s,d) => s + d.tasks.filter(t => AppState.completedWeekTasks.includes(t.id)).length, 0);
  const pct = Math.round((done / total) * 100);

  const daysHTML = plan.map(day => {
    const tasksHTML = day.tasks.map(t => `
      <div class="week-task ${AppState.completedWeekTasks.includes(t.id) ? 'done' : ''}" data-id="${t.id}" onclick="toggleWeekTask('${t.id}')">
        <div class="week-task-check">${AppState.completedWeekTasks.includes(t.id) ? '✓' : ''}</div>
        <span class="week-task-type type-${t.type}">${{learn:'📖 Learn',code:'💻 Code',build:'🛠 Build',hack:'🚀 Hack'}[t.type]}</span>
        <span style="flex:1;">${t.text}</span>
      </div>`).join('');

    return `
      <div class="day-card">
        <div class="day-header">
          <span>${day.emoji} ${day.day}</span>
          <span style="color:var(--text-muted);font-weight:400;font-size:0.78rem;">${day.tasks.length} tasks</span>
        </div>
        <div class="day-tasks">${tasksHTML}</div>
      </div>`;
  }).join('');

  // Profile tags from answers
  const answerTags = Object.values(answers).filter(Boolean).join(' · ');

  container.innerHTML = `
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:16px;margin-bottom:var(--space-8);">
      <div>
        <div class="section-eyebrow">✨ Personalized For You</div>
        <h2 class="section-title">Your Next 7 Days</h2>
        <p style="font-size:0.82rem;color:var(--text-tertiary);margin-top:4px;">Based on: ${answerTags}</p>
      </div>
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
        <div class="card" style="padding:12px 16px;text-align:center;min-width:120px;">
          <div style="font-size:1.6rem;font-weight:800;background:var(--brand-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;" id="week-progress-pct">${pct}%</div>
          <div style="font-size:0.75rem;color:var(--text-muted);">Week Progress</div>
        </div>
        <button class="btn btn-ghost btn-sm" onclick="resetOnboarding()">✏️ Retake Quiz</button>
        <button class="btn btn-secondary btn-sm" onclick="regeneratePlan()">🔄 Regenerate</button>
      </div>
    </div>
    <div class="week-plan-grid stagger">${daysHTML}</div>`;
}

function resetOnboarding() {
  AppState.onboardingAnswers = null;
  AppState.completedWeekTasks = [];
  persist('cl-onboarding', null);
  persist('cl-week-tasks', []);
  onboardingStep = 0;
  renderWeekly();
}

function regeneratePlan() {
  AppState.completedWeekTasks = [];
  persist('cl-week-tasks', []);
  renderWeekPlan(AppState.onboardingAnswers);
  showToast('Plan regenerated! 🔄', '🔄');
}

// ─── TOOLKIT PAGE ─────────────────────────────────────────────────────────────
function renderToolkit() {
  const guidesEl = document.getElementById('toolkit-guides');
  const worksheetsEl = document.getElementById('toolkit-worksheets');

  if (guidesEl) {
    guidesEl.innerHTML = `<div class="toolkit-grid stagger">
      ${CAMPUS_LAUNCH_DATA.toolkit.guides.map(g => `
        <div class="guide-card" onclick="openGuideModal('${g.id}')" role="button" tabindex="0" aria-label="Read guide: ${g.title}">
          <div class="guide-icon">${g.icon}</div>
          <div class="guide-title">${g.title}</div>
          <div class="guide-summary">${g.summary}</div>
          <div style="margin-top:12px;font-size:0.78rem;color:var(--brand-accent);">Read Guide →</div>
        </div>`).join('')}
    </div>`;
  }

  if (worksheetsEl) {
    worksheetsEl.innerHTML = CAMPUS_LAUNCH_DATA.toolkit.worksheets.map(ws => {
      let body = '';
      if (ws.items) {
        body = ws.items.map(item => `
          <div style="display:flex;gap:10px;padding:10px 0;border-bottom:1px solid var(--border-subtle);align-items:flex-start;">
            <div class="task-checkbox" style="margin-top:2px;flex-shrink:0;">☐</div>
            <div>
              <div style="font-size:0.88rem;font-weight:600;">${item.label}</div>
              <div style="font-size:0.78rem;color:var(--text-tertiary);margin-top:2px;">${item.desc}</div>
            </div>
          </div>`).join('');
      } else if (ws.questions) {
        body = ws.questions.map((q, i) => `
          <div style="padding:10px 0;border-bottom:1px solid var(--border-subtle);">
            <span style="color:var(--brand-accent);font-weight:700;">${i+1}.</span>
            <span style="font-size:0.88rem;margin-left:6px;">${q}</span>
          </div>`).join('');
      } else if (ws.slides) {
        body = ws.slides.map(s => `
          <div style="padding:12px;margin-bottom:8px;background:var(--bg-secondary);border-radius:var(--radius-md);">
            <div style="font-size:0.75rem;font-weight:700;color:var(--brand-accent);margin-bottom:4px;">${s.slide}</div>
            <div style="font-size:0.85rem;color:var(--text-secondary);">${s.content}</div>
          </div>`).join('');
      }

      return `
        <div class="worksheet-card" style="margin-bottom:var(--space-5);">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:var(--space-5);">
            <div style="padding:4px 10px;border-radius:var(--radius-full);background:rgba(124,58,237,0.15);color:var(--brand-accent);font-size:0.72rem;font-weight:700;">${ws.type}</div>
            <h3 style="font-size:0.95rem;font-weight:700;">${ws.title}</h3>
          </div>
          ${body}
        </div>`;
    }).join('');
  }
}

function openGuideModal(id) {
  const guide = CAMPUS_LAUNCH_DATA.toolkit.guides.find(g => g.id === id);
  if (!guide) return;

  // Simple markdown-like rendering
  function renderContent(text) {
    return text.trim()
      .replace(/^### (.+)$/gm, '<h3 style="font-size:0.95rem;font-weight:700;color:var(--brand-accent);margin:20px 0 10px;">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 style="font-size:1.05rem;font-weight:800;margin:24px 0 12px;">$1</h2>')
      .replace(/^\*\*(.+?)\*\*/gm, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^- (.+)$/gm, '<div style="display:flex;gap:8px;padding:6px 0;font-size:0.88rem;"><span style="color:var(--brand-accent);flex-shrink:0;">›</span><span>$1</span></div>')
      .replace(/^\d+\. \*\*(.+?)\*\*(.+)$/gm, '<div style="padding:8px 0;font-size:0.88rem;"><strong style="color:var(--text-primary);">$1</strong><span style="color:var(--text-secondary);">$2</span></div>')
      .replace(/^\d+\. (.+)$/gm, '<div style="display:flex;gap:8px;padding:6px 0;font-size:0.88rem;"><span style="color:var(--brand-accent);font-weight:700;flex-shrink:0;">›</span><span>$1</span></div>')
      .replace(/❌ (.+)/g, '<div style="color:var(--red);font-size:0.85rem;padding:4px 0;">❌ $1</div>')
      .replace(/🚫 (.+)/g, '<div style="color:var(--red);font-size:0.85rem;padding:4px 0;">🚫 $1</div>');
  }

  const modal = document.getElementById('guide-modal');
  document.getElementById('guide-modal-content').innerHTML = `
    <div class="modal-header">
      <div>
        <div style="font-size:2rem;margin-bottom:8px;">${guide.icon}</div>
        <h2 style="font-size:1.15rem;font-weight:800;letter-spacing:-0.02em;line-height:1.3;">${guide.title}</h2>
        <p style="font-size:0.82rem;color:var(--text-tertiary);margin-top:4px;">${guide.summary}</p>
      </div>
      <button class="modal-close" onclick="closeModal('guide-modal')" aria-label="Close">✕</button>
    </div>
    <div class="modal-body" style="line-height:1.7;">
      ${renderContent(guide.content)}
    </div>`;
  modal.classList.add('open');
}

// ─── COMMUNITY PAGE ────────────────────────────────────────────────────────────
function renderCommunity() {
  const container = document.getElementById('community-list');
  if (!container) return;

  container.innerHTML = `<div class="opp-grid stagger">
    ${CAMPUS_LAUNCH_DATA.communityOpportunities.map(opp => `
      <div class="opp-card fade-in">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <span class="opp-category">${opp.category}</span>
          ${opp.format === 'Online' ? '<span class="badge badge-online">🌐 Online</span>' : '<span class="badge badge-offline">📍 In-Person</span>'}
        </div>
        <div class="opp-title">${opp.title}</div>
        <div class="opp-organizer">by ${opp.organizer}</div>
        <div class="opp-desc">${opp.description}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;">
          <span class="task-tag">📅 ${opp.date}</span>
          ${opp.status === 'Verified' ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
        </div>
        <div style="display:flex;gap:8px;margin-top:4px;">
          <a href="${opp.link}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">View Details</a>
        </div>
      </div>`).join('')}
  </div>`;
}

// ─── SAVED PAGE ────────────────────────────────────────────────────────────────
function renderSaved() {
  const hackContainer = document.getElementById('saved-hackathons');
  const resContainer = document.getElementById('saved-resources');

  const savedHacks = CAMPUS_LAUNCH_DATA.hackathons.filter(h => AppState.saved.includes(h.id));
  const savedRes = CAMPUS_LAUNCH_DATA.learningResources.filter(r => AppState.savedResources.includes(r.id));

  if (hackContainer) {
    if (savedHacks.length === 0) {
      hackContainer.innerHTML = `<div class="empty-state">
        <div class="empty-icon">🔖</div>
        <div class="empty-title">No saved hackathons yet</div>
        <div class="empty-text">Browse the Hackathon Hub and click the bookmark icon to save opportunities.</div>
        <button class="btn btn-primary btn-sm" onclick="navigateTo('hackathons')">🚀 Discover Hackathons</button>
      </div>`;
    } else {
      hackContainer.innerHTML = `<div class="hackathon-grid stagger">${savedHacks.map(hackathonCardHTML).join('')}</div>`;
    }
  }

  if (resContainer) {
    if (savedRes.length === 0) {
      resContainer.innerHTML = `<div class="empty-state">
        <div class="empty-icon">📚</div>
        <div class="empty-title">No bookmarked resources yet</div>
        <div class="empty-text">Go to Resources and bookmark anything that looks useful.</div>
        <button class="btn btn-primary btn-sm" onclick="navigateTo('resources')">📖 Browse Resources</button>
      </div>`;
    } else {
      resContainer.innerHTML = `<div class="resource-grid stagger">${savedRes.map(resourceCardHTML).join('')}</div>`;
    }
  }
}
