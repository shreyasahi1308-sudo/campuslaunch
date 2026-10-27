/**
 * CampusLaunch — app.js
 * Main application controller: navigation, state, render orchestration
 */

// ─── APP STATE ────────────────────────────────────────────────────────────────
const AppState = {
  currentPage: 'home',
  theme: localStorage.getItem('cl-theme') || 'dark',
  saved: JSON.parse(localStorage.getItem('cl-saved') || '[]'),
  savedResources: JSON.parse(localStorage.getItem('cl-saved-res') || '[]'),
  completedTasks: JSON.parse(localStorage.getItem('cl-completed') || '[]'),
  completedWeekTasks: JSON.parse(localStorage.getItem('cl-week-tasks') || '[]'),
  onboardingAnswers: JSON.parse(localStorage.getItem('cl-onboarding') || 'null'),
  hackFilters: { search: '', format: 'all', level: 'all', domain: 'all', sort: 'deadline' },
  resourceFilters: { search: '', category: 'all' },
  expandedStages: new Set(['stage-1']),
};

// ─── PERSIST STATE ────────────────────────────────────────────────────────────
function persist(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

// ─── THEME ────────────────────────────────────────────────────────────────────
function applyTheme(theme) {
  AppState.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  persist('cl-theme', theme);
}

function toggleTheme() {
  applyTheme(AppState.theme === 'dark' ? 'light' : 'dark');
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function navigateTo(page) {
  AppState.currentPage = page;

  // Update sections
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`page-${page}`);
  if (target) target.classList.add('active');

  // Update nav links
  document.querySelectorAll('.nav-link[data-page]').forEach(l => {
    l.classList.toggle('active', l.dataset.page === page);
  });

  // Close mobile nav
  document.getElementById('mobile-nav')?.classList.remove('open');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Render page-specific content
  renderPage(page);
}

function renderPage(page) {
  switch(page) {
    case 'home':       renderHome(); break;
    case 'hackathons': renderHackathons(); break;
    case 'roadmap':    renderRoadmap(); break;
    case 'resources':  renderResources(); break;
    case 'weekly':     renderWeekly(); break;
    case 'toolkit':    renderToolkit(); break;
    case 'community':  renderCommunity(); break;
    case 'saved':      renderSaved(); break;
  }
}

// ─── SCROLL NAV ───────────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ─── DATE UTILITIES ────────────────────────────────────────────────────────────
function parseDate(str) { return new Date(str + 'T00:00:00'); }

function daysUntil(dateStr) {
  const now = new Date(); now.setHours(0,0,0,0);
  const target = parseDate(dateStr);
  return Math.ceil((target - now) / 86400000);
}

function formatDate(str) {
  return parseDate(str).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function deadlineBadge(dateStr) {
  const d = daysUntil(dateStr);
  if (d < 0) return `<span class="hackathon-deadline deadline-passed">⏱ Closed</span>`;
  if (d <= 5) return `<span class="hackathon-deadline deadline-urgent">🔥 ${d}d left</span>`;
  if (d <= 14) return `<span class="hackathon-deadline deadline-warning">⚡ ${d} days left</span>`;
  return `<span class="hackathon-deadline deadline-normal">📅 ${d} days left</span>`;
}

function formatBadge(f) {
  const map = { 'Online': 'badge-online 🌐', 'In-Person': 'badge-offline 📍', 'Hybrid': 'badge-hybrid 🔄' };
  const parts = (map[f] || 'badge-online 🌐').split(' ');
  return `<span class="badge ${parts[0]}">${parts.slice(1).join(' ')} ${f}</span>`;
}

function domainTag(d) {
  const map = {
    'AI/ML': 'domain-ai', 'Web Development': 'domain-web', 'App Development': 'domain-app',
    'Cybersecurity': 'domain-cyber', 'Open Innovation': 'domain-open', 'Data Science': 'domain-data',
    'Smart Cities': 'domain-open', 'Decentralized Systems': 'domain-data',
    'EdTech': 'domain-web', 'FinTech': 'domain-web', 'E-Commerce': 'domain-app'
  };
  return `<span class="domain-tag ${map[d] || 'domain-open'}">${d}</span>`;
}

function diffTag(level) {
  const cls = level.toLowerCase().includes('beginner') ? 'difficulty-beginner' :
              level.toLowerCase().includes('intermediate') ? 'difficulty-intermediate' : 'difficulty-advanced';
  return `<span class="task-tag ${cls}">${level}</span>`;
}

// ─── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg, icon = '✅') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'toast toast-success';
  t.innerHTML = `<span class="toast-icon">${icon}</span>${msg}`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// ─── BOOKMARK ─────────────────────────────────────────────────────────────────
function toggleSave(id) {
  const idx = AppState.saved.indexOf(id);
  if (idx === -1) {
    AppState.saved.push(id);
    showToast('Hackathon saved! View in Saved tab.', '🔖');
  } else {
    AppState.saved.splice(idx, 1);
    showToast('Removed from saved.', '🗑️');
  }
  persist('cl-saved', AppState.saved);
  // Refresh save buttons without full re-render
  document.querySelectorAll(`.bookmark-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('saved', AppState.saved.includes(id));
    btn.textContent = AppState.saved.includes(id) ? '🔖' : '🏷️';
  });
  if (AppState.currentPage === 'saved') renderSaved();
}

function toggleSaveResource(id) {
  const idx = AppState.savedResources.indexOf(id);
  if (idx === -1) { AppState.savedResources.push(id); showToast('Resource bookmarked!', '📚'); }
  else { AppState.savedResources.splice(idx, 1); showToast('Bookmark removed.', '🗑️'); }
  persist('cl-saved-res', AppState.savedResources);
  document.querySelectorAll(`.res-bookmark[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('saved', AppState.savedResources.includes(id));
    btn.textContent = AppState.savedResources.includes(id) ? '🔖' : '🏷️';
  });
}

// ─── TASK COMPLETION ──────────────────────────────────────────────────────────
function toggleTask(taskId) {
  const idx = AppState.completedTasks.indexOf(taskId);
  if (idx === -1) { AppState.completedTasks.push(taskId); showToast('Task completed! 🎉', '✅'); }
  else { AppState.completedTasks.splice(idx, 1); }
  persist('cl-completed', AppState.completedTasks);
  renderRoadmap();
}

function toggleWeekTask(taskId) {
  const idx = AppState.completedWeekTasks.indexOf(taskId);
  if (idx === -1) AppState.completedWeekTasks.push(taskId);
  else AppState.completedWeekTasks.splice(idx, 1);
  persist('cl-week-tasks', AppState.completedWeekTasks);
  document.querySelectorAll(`.week-task[data-id="${taskId}"]`).forEach(el => {
    el.classList.toggle('done', AppState.completedWeekTasks.includes(taskId));
    const chk = el.querySelector('.week-task-check');
    if (chk) chk.textContent = AppState.completedWeekTasks.includes(taskId) ? '✓' : '';
  });
  updateWeekProgress();
}

function updateWeekProgress() {
  const total = document.querySelectorAll('.week-task').length;
  const done = AppState.completedWeekTasks.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const el = document.getElementById('week-progress-pct');
  if (el) el.textContent = `${pct}%`;
}

// ─── HACKATHON FILTERING ──────────────────────────────────────────────────────
function getFilteredHackathons() {
  const { search, format, level, domain, sort } = AppState.hackFilters;
  let list = [...CAMPUS_LAUNCH_DATA.hackathons];

  if (search) {
    const q = search.toLowerCase();
    list = list.filter(h =>
      h.name.toLowerCase().includes(q) ||
      h.organizer.toLowerCase().includes(q) ||
      h.domains.some(d => d.toLowerCase().includes(q)) ||
      h.description.toLowerCase().includes(q)
    );
  }
  if (format !== 'all') list = list.filter(h => h.format.toLowerCase().includes(format.toLowerCase()));
  if (level === 'beginner') list = list.filter(h => h.beginnerFriendly);
  if (domain !== 'all') list = list.filter(h => h.domains.some(d => d.toLowerCase().includes(domain.toLowerCase())));

  list.sort((a, b) => {
    if (sort === 'deadline') return parseDate(a.deadline) - parseDate(b.deadline);
    if (sort === 'date') return parseDate(a.startDate) - parseDate(b.startDate);
    if (sort === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  return list;
}

// ─── HACKATHON CARD HTML ───────────────────────────────────────────────────────
function hackathonCardHTML(h) {
  const saved = AppState.saved.includes(h.id);
  const domains = h.domains.slice(0, 3).map(d => domainTag(d)).join('');
  const extraDomains = h.domains.length > 3 ? `<span class="domain-tag domain-open">+${h.domains.length - 3}</span>` : '';

  return `
    <article class="hackathon-card fade-in" id="hcard-${h.id}" role="article" aria-label="${h.name}">
      <div class="hackathon-card-header">
        <div class="hackathon-card-badges">
          ${formatBadge(h.format)}
          ${h.beginnerFriendly ? '<span class="badge badge-beginner">🌱 Beginner OK</span>' : ''}
          ${h.isVerified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
          ${h.isDemo ? '<span class="badge badge-demo">📋 Demo Data</span>' : ''}
          ${h.badge === 'National Flagship' || h.badge === 'Google Global' ? `<span class="badge badge-flagship">⭐ ${h.badge}</span>` : ''}
        </div>
        <h3 class="hackathon-name">${h.name}</h3>
        <p class="hackathon-organizer">by ${h.organizer}</p>
      </div>
      <div class="hackathon-card-body">
        ${deadlineBadge(h.deadline)}
        <div class="hackathon-info-row"><span class="info-icon">📅</span><span>${formatDate(h.startDate)} – ${formatDate(h.endDate)}</span></div>
        <div class="hackathon-info-row"><span class="info-icon">📍</span><span>${h.location}</span></div>
        <div class="hackathon-info-row"><span class="info-icon">👥</span><span>${h.teamSize}</span></div>
        <div class="hackathon-info-row"><span class="info-icon">💰</span><span class="prize-badge">🏆 ${h.prizePool}</span></div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px;">${domains}${extraDomains}</div>
        <p style="font-size:0.8rem;color:var(--text-tertiary);margin-top:4px;">${h.description.substring(0,120)}…</p>
      </div>
      <div class="hackathon-card-footer">
        <a href="${h.officialLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;justify-content:center;">🚀 Register Now</a>
        <button class="btn btn-secondary btn-sm" onclick="openHackathonModal('${h.id}')" aria-label="View details for ${h.name}">Details</button>
        <button class="bookmark-btn ${saved ? 'saved' : ''}" data-id="${h.id}" onclick="toggleSave('${h.id}')" aria-label="Save hackathon">${saved ? '🔖' : '🏷️'}</button>
      </div>
    </article>`;
}

// ─── HACKATHON MODAL ──────────────────────────────────────────────────────────
function openHackathonModal(id) {
  const h = CAMPUS_LAUNCH_DATA.hackathons.find(h => h.id === id);
  if (!h) return;
  const saved = AppState.saved.includes(h.id);

  const scheduleHTML = h.schedule.map(s =>
    `<div style="display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--border-subtle);">
      <span style="font-size:0.78rem;color:var(--brand-accent);font-weight:600;min-width:160px;flex-shrink:0;">${s.time}</span>
      <span style="font-size:0.85rem;">${s.event}</span>
    </div>`).join('');

  const checklistHTML = h.submissionChecklist.map(item =>
    `<div style="display:flex;gap:10px;padding:8px 0;font-size:0.85rem;align-items:center;">
      <span style="color:var(--brand-accent);">✦</span>${item}
    </div>`).join('');

  const domainsHTML = h.domains.map(d => domainTag(d)).join('');
  const skillsHTML = h.skills.map(s => `<span class="task-tag">${s}</span>`).join('');

  const modal = document.getElementById('hackathon-modal');
  document.getElementById('hackathon-modal-content').innerHTML = `
    <div class="modal-header">
      <div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
          ${formatBadge(h.format)}
          ${h.beginnerFriendly ? '<span class="badge badge-beginner">🌱 Beginner OK</span>' : ''}
          ${h.isVerified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
          ${h.isDemo ? '<span class="badge badge-demo">📋 Demo Data</span>' : ''}
        </div>
        <h2 style="font-size:1.25rem;font-weight:800;letter-spacing:-0.02em;line-height:1.2;">${h.name}</h2>
        <p style="font-size:0.85rem;color:var(--text-tertiary);margin-top:4px;">by ${h.organizer}</p>
      </div>
      <button class="modal-close" onclick="closeModal('hackathon-modal')" aria-label="Close">✕</button>
    </div>
    <div class="modal-body">
      ${h.isDemo ? '<div class="data-notice"><span class="notice-icon">📋</span><span>This is <strong>sample demo data</strong>. Always verify deadlines and details on the official organizer website before registering.</span></div>' : ''}

      <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.7;margin-bottom:var(--space-6);">${h.description}</p>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:var(--space-6);">
        <div class="card" style="padding:12px;">
          <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:6px;">📅 Dates</div>
          <div style="font-size:0.88rem;font-weight:600;">${formatDate(h.startDate)} → ${formatDate(h.endDate)}</div>
        </div>
        <div class="card" style="padding:12px;">
          <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:6px;">⏰ Registration Closes</div>
          <div style="font-size:0.88rem;font-weight:700;">${formatDate(h.deadline)} ${deadlineBadge(h.deadline)}</div>
        </div>
        <div class="card" style="padding:12px;">
          <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:6px;">👥 Team Size</div>
          <div style="font-size:0.88rem;font-weight:600;">${h.teamSize}</div>
        </div>
        <div class="card" style="padding:12px;">
          <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:6px;">🎯 Eligibility</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);">${h.eligibility}</div>
        </div>
      </div>

      <div style="margin-bottom:var(--space-5);">
        <div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:10px;">🏆 Prize Pool</div>
        <div class="prize-badge" style="font-size:1rem;padding:8px 16px;">${h.prizePool}</div>
      </div>

      <div style="margin-bottom:var(--space-5);">
        <div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:10px;">🎯 Domains</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">${domainsHTML}</div>
      </div>

      <div style="margin-bottom:var(--space-6);">
        <div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:10px;">💻 Relevant Skills</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">${skillsHTML}</div>
      </div>

      ${h.schedule.length ? `
      <div style="margin-bottom:var(--space-6);">
        <div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:10px;">📋 Event Schedule</div>
        ${scheduleHTML}
      </div>` : ''}

      <div style="margin-bottom:var(--space-6);">
        <div style="font-size:0.78rem;text-transform:uppercase;letter-spacing:0.07em;color:var(--text-muted);margin-bottom:10px;">✅ Submission Checklist</div>
        ${checklistHTML}
      </div>

      <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:var(--space-5);">Last verified: ${h.lastVerified}</div>

      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <a href="${h.officialLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">🚀 Register on Official Site</a>
        <button class="btn btn-secondary ${saved ? '' : ''}" onclick="toggleSave('${h.id}');this.textContent=AppState.saved.includes('${h.id}')?'🔖 Saved':'🏷️ Save';" id="modal-save-btn-${h.id}">
          ${saved ? '🔖 Saved' : '🏷️ Save Hackathon'}
        </button>
        <button class="btn btn-ghost" onclick="addToCalendar('${h.id}')">📅 Add to Calendar</button>
      </div>
    </div>`;
  modal.classList.add('open');
}

function addToCalendar(id) {
  const h = CAMPUS_LAUNCH_DATA.hackathons.find(h => h.id === id);
  if (!h) return;
  const start = h.startDate.replace(/-/g,'');
  const end = h.endDate.replace(/-/g,'');
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(h.name)}&dates=${start}/${end}&details=${encodeURIComponent(h.description + '\n\nRegister: ' + h.officialLink)}&location=${encodeURIComponent(h.location)}`;
  window.open(url, '_blank');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

// ─── GLOBAL SEARCH ────────────────────────────────────────────────────────────
function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => document.getElementById('global-search-input')?.focus(), 50);
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('global-search-results').innerHTML = '';
  if (document.getElementById('global-search-input')) document.getElementById('global-search-input').value = '';
}

function handleGlobalSearch(q) {
  const results = [];
  if (!q.trim()) { document.getElementById('global-search-results').innerHTML = ''; return; }
  const ql = q.toLowerCase();

  CAMPUS_LAUNCH_DATA.hackathons.forEach(h => {
    if (h.name.toLowerCase().includes(ql) || h.organizer.toLowerCase().includes(ql))
      results.push({ type: 'Hackathon', icon: '🚀', title: h.name, action: () => { closeSearch(); openHackathonModal(h.id); } });
  });
  CAMPUS_LAUNCH_DATA.learningResources.forEach(r => {
    if (r.title.toLowerCase().includes(ql) || r.category.toLowerCase().includes(ql))
      results.push({ type: 'Resource', icon: '📚', title: r.title, action: () => { closeSearch(); navigateTo('resources'); } });
  });
  CAMPUS_LAUNCH_DATA.roadmapStages.forEach(s => {
    s.tasks.forEach(t => {
      if (t.title.toLowerCase().includes(ql))
        results.push({ type: 'Roadmap Task', icon: '🗺️', title: t.title, action: () => { closeSearch(); navigateTo('roadmap'); } });
    });
  });

  const container = document.getElementById('global-search-results');
  if (results.length === 0) {
    container.innerHTML = `<div class="search-result-item" style="color:var(--text-muted);">No results found for "${q}"</div>`;
    return;
  }
  container.innerHTML = results.slice(0, 8).map((r, i) => `
    <div class="search-result-item" id="search-res-${i}" role="option" tabindex="0">
      <span>${r.icon}</span>
      <span style="flex:1;font-size:0.88rem;">${r.title}</span>
      <span class="search-result-type">${r.type}</span>
    </div>`).join('');
  results.slice(0, 8).forEach((r, i) => {
    document.getElementById(`search-res-${i}`)?.addEventListener('click', r.action);
  });
}

// ─── SUBMIT OPPORTUNITY FORM ───────────────────────────────────────────────────
function submitOpportunity(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  if (!data.title || !data.organizer || !data.description) {
    showToast('Please fill in all required fields.', '⚠️');
    return;
  }
  form.reset();
  document.getElementById('submit-success').classList.remove('hidden');
  showToast('Opportunity submitted for review! Thank you.', '🎉');
}

// ─── MOBILE NAV ───────────────────────────────────────────────────────────────
function toggleMobileNav() {
  document.getElementById('mobile-nav')?.classList.toggle('open');
}

// ─── KEYBOARD SHORTCUTS ───────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  if (e.key === 'Escape') {
    closeSearch();
    closeModal('hackathon-modal');
    closeModal('guide-modal');
  }
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(AppState.theme);
  navigateTo('home');

  // Theme toggle
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // Nav links
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    link.addEventListener('click', () => navigateTo(link.dataset.page));
  });

  // Global search trigger
  document.getElementById('nav-search-btn')?.addEventListener('click', openSearch);
  document.getElementById('global-search-input')?.addEventListener('input', e => handleGlobalSearch(e.target.value));
  document.getElementById('search-overlay')?.addEventListener('click', e => {
    if (e.target.id === 'search-overlay') closeSearch();
  });

  // Modal overlay close
  document.getElementById('hackathon-modal')?.addEventListener('click', e => {
    if (e.target.id === 'hackathon-modal') closeModal('hackathon-modal');
  });

  // Mobile nav
  document.getElementById('hamburger-btn')?.addEventListener('click', toggleMobileNav);

  // Submit form
  document.getElementById('submit-opportunity-form')?.addEventListener('submit', submitOpportunity);
});
