/* ================================================================
   CRS-PDVS — Admin Shell JavaScript
   Shared sidebar, topbar, auth, and navigation logic.
   Usage: call AdminShell.init(pageId, pageTitle, pageSub) in
          each admin page script. Returns { user, D }.
   ================================================================ */

window.AdminShell = (function () {

  /* ============================================================
     SVG ICON LIBRARY
     ============================================================ */
  const ICONS = {
    dashboard : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
    review    : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    records   : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    assisted  : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
    reports   : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    audit     : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    users     : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
    settings  : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    logout    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    menu      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
    bell      : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    external  : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    chevron   : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 6 15 12 9 18"/></svg>`,
  };

  /* ============================================================
     NAVIGATION MAP
     ============================================================ */
  const NAV_GROUPS = [
    {
      section: 'OVERVIEW',
      items: [
        { id: 'dashboard', href: 'admin.html',         label: 'Dashboard',          icon: 'dashboard', roles: 'all' },
      ],
    },
    {
      section: 'VERIFICATION',
      items: [
        { id: 'review',   href: 'admin-review.html',   label: 'Review Queue',        icon: 'review',   roles: 'all', badge: 'pending' },
        { id: 'records',  href: 'admin-records.html',  label: 'Pensioner Records',   icon: 'records',  roles: 'all' },
      ],
    },
    {
      section: 'SUPPORT',
      items: [
        { id: 'assisted', href: 'admin-assisted.html', label: 'Assisted Console',    icon: 'assisted', roles: 'all' },
      ],
    },
    {
      section: 'REPORTS',
      items: [
        { id: 'reports',  href: 'admin-reports.html',  label: 'Analytics & Reports', icon: 'reports',  roles: 'Pension Board Administrator,Auditor,Supervisor,Verification Officer' },
        { id: 'audit',    href: '#',                   label: 'Audit Log',            icon: 'audit',    roles: 'Pension Board Administrator,Auditor,Supervisor' },
      ],
    },
    {
      section: 'ADMINISTRATION',
      items: [
        { id: 'users',    href: '#', label: 'Admin Users', icon: 'users',    roles: 'Pension Board Administrator' },
        { id: 'settings', href: '#', label: 'Settings',    icon: 'settings', roles: 'Pension Board Administrator' },
      ],
    },
  ];

  /* ============================================================
     DEMO FALLBACK USER
     ============================================================ */
  const DEMO_USER = {
    userId: 'ADM-002',
    firstName: 'Michael',
    lastName: 'Essien',
    email: 'm.essien@crspb.gov.ng',
    role: 'Pension Board Administrator',
    lga: null,
    isDemo: true,
  };

  /* ============================================================
     HELPERS
     ============================================================ */
  function userHasRole(userRole, allowedRoles) {
    if (allowedRoles === 'all') return true;
    return allowedRoles.split(',').map(r => r.trim()).includes(userRole);
  }

  // Get pending badge count from analytics
  function getPendingCount() {
    const D = window.CRS_PDVS_DATA;
    return D ? D.analytics.summary.pendingReview : '';
  }

  /* ============================================================
     BUILD SIDEBAR HTML
     ============================================================ */
  function buildSidebar(user, activePageId) {
    const initials = (user.firstName[0] + user.lastName[0]).toUpperCase();
    let navHtml = '';

    NAV_GROUPS.forEach(group => {
      // Filter items by role
      const visibleItems = group.items.filter(item => userHasRole(user.role, item.roles));
      if (visibleItems.length === 0) return;

      navHtml += `<div class="adm-nav-section">${group.section}</div>`;

      visibleItems.forEach(item => {
        const isActive = item.id === activePageId;
        const badge = item.badge === 'pending' ? getPendingCount() : '';
        const badgeHtml = badge ? `<span class="adm-nav-badge">${badge}</span>` : '';
        navHtml += `
          <a href="${item.href}" class="adm-nav-item${isActive ? ' active' : ''}" data-nav="${item.id}">
            <div class="adm-nav-icon">${ICONS[item.icon] || ''}</div>
            <span class="adm-nav-label">${item.label}</span>
            ${badgeHtml}
          </a>
        `;
      });
    });

    return `
      <aside class="adm-sidebar" id="adm-sidebar" aria-label="Admin Navigation">
        <div class="adm-brand">
          <img src="assets/images/crs_emblem.png" alt="CRS" class="adm-brand__logo">
          <div class="adm-brand__text">
            <div class="adm-brand__name">CRS-PDVS</div>
            <div class="adm-brand__sub">Admin Portal</div>
          </div>
        </div>
        <nav class="adm-nav">${navHtml}</nav>
        <div class="adm-sidebar-user">
          <div class="adm-user-avatar" id="adm-user-avatar">${initials}</div>
          <div class="adm-user-info">
            <div class="adm-user-name">${user.firstName} ${user.lastName}</div>
            <div class="adm-user-role">${user.role}</div>
          </div>
          <button class="adm-logout-btn" id="adm-logout-btn" title="Sign out" aria-label="Sign out">
            ${ICONS.logout}
          </button>
        </div>
      </aside>
    `;
  }

  /* ============================================================
     BUILD TOPBAR HTML
     ============================================================ */
  function buildTopbar(user, pageTitle, pageSub, breadcrumbs) {
    const demoChip = user.isDemo ? `<div class="adm-topbar-demo">DEMO</div>` : '';
    let breadcrumbHtml = `<a href="admin.html">Admin Portal</a> ${ICONS.chevron} <strong>${pageTitle || 'Dashboard'}</strong>`;
    if (breadcrumbs) {
      breadcrumbHtml = breadcrumbs.map((b, i, arr) =>
        i === arr.length - 1
          ? `<strong>${b.label}</strong>`
          : `<a href="${b.href}">${b.label}</a> ${ICONS.chevron}`
      ).join(' ');
    }

    return `
      <header class="adm-topbar" id="adm-topbar">
        <button class="adm-toggle" id="adm-sidebar-toggle" aria-label="Toggle sidebar">
          ${ICONS.menu}
        </button>
        <div class="adm-breadcrumb">${breadcrumbHtml}</div>
        ${demoChip}
        <div class="adm-cycle-badge">
          <div class="adm-cycle-dot"></div>
          Q1 2026 Cycle
        </div>
        <div class="adm-role-badge" id="adm-role-badge">${user.role}</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button class="adm-icon-btn" title="Current alerts">
            ${ICONS.bell}
            <div class="adm-alert-dot"></div>
          </button>
          <a href="index.html" class="adm-icon-btn" title="Public site" style="line-height:0;">
            ${ICONS.external}
          </a>
        </div>
      </header>
    `;
  }

  /* ============================================================
     WIRE EVENTS
     ============================================================ */
  function wireEvents(user) {
    const sidebar  = document.getElementById('adm-sidebar');
    const overlay  = document.getElementById('adm-overlay');
    const toggle   = document.getElementById('adm-sidebar-toggle');
    const logoutBtn = document.getElementById('adm-logout-btn');

    if (!sidebar || !toggle) return;

    let collapsed = false;

    function isMobile() { return window.innerWidth <= 1024; }

    function closeMobile() {
      sidebar.classList.remove('mobile-open');
      if (overlay) overlay.classList.remove('visible');
    }

    toggle.addEventListener('click', () => {
      if (isMobile()) {
        const open = sidebar.classList.toggle('mobile-open');
        if (overlay) overlay.classList.toggle('visible', open);
      } else {
        collapsed = !collapsed;
        sidebar.classList.toggle('collapsed', collapsed);
      }
    });

    if (overlay) {
      overlay.addEventListener('click', closeMobile);
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMobile();
    });

    window.addEventListener('resize', () => {
      if (!isMobile()) closeMobile();
    });

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('crs_admin_user');
        window.location.href = 'admin-login.html';
      });
    }
  }

  /* ============================================================
     MAIN INIT FUNCTION
     ============================================================ */
  function init(pageId, pageTitle, options) {
    options = options || {};

    /* -- 1. Resolve user -- */
    let user = null;
    let isDemo = false;
    try {
      const stored = sessionStorage.getItem('crs_admin_user');
      if (stored) user = JSON.parse(stored);
    } catch (e) {}

    if (!user) {
      // Demo fallback — auto-session as Board Administrator for prototype previewing
      user = Object.assign({}, DEMO_USER);
      isDemo = true;
      sessionStorage.setItem('crs_admin_user', JSON.stringify(user));
    }
    user.isDemo = isDemo;

    /* -- 2. Inject overlay -- */
    document.body.insertAdjacentHTML('afterbegin', '<div class="adm-overlay" id="adm-overlay"></div>');

    /* -- 3. Inject sidebar -- */
    const sidebarMount = document.getElementById('adm-sidebar-mount');
    if (sidebarMount) {
      sidebarMount.innerHTML = buildSidebar(user, pageId);
    } else {
      // Fallback: prepend sidebar before the body's first child
      const wrap = document.querySelector('.adm-wrap');
      if (wrap) wrap.insertAdjacentHTML('afterbegin', buildSidebar(user, pageId));
    }

    /* -- 4. Inject topbar -- */
    const topbarMount = document.getElementById('adm-topbar-mount');
    if (topbarMount) {
      topbarMount.innerHTML = buildTopbar(user, pageTitle, null, options.breadcrumbs);
    }

    /* -- 5. Wire events -- */
    wireEvents(user);

    /* -- 6. Update document title -- */
    if (pageTitle) document.title = `CRS-PDVS — ${pageTitle}`;

    return { user, D: window.CRS_PDVS_DATA };
  }

  /* ============================================================
     SHARED UTILITY FUNCTIONS (available to all pages)
     ============================================================ */
  function fmtDate(s) {
    if (!s) return '—';
    return new Date(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function fmtDateTime(s) {
    if (!s) return '—';
    const d = new Date(s);
    return d.toLocaleDateString('en-GB', { day:'numeric', month:'short' }) + ' · ' +
           d.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });
  }

  function statusChip(status) {
    const chipMap = {
      'Verified':                  'chip--verified',
      'Active':                    'chip--active',
      'Pending Review':            'chip--pending',
      'Failed':                    'chip--failed',
      'Awaiting Verification':     'chip--awaiting',
      'Referred to Support Center':'chip--referred',
      'Inactive':                  'chip--inactive',
      'Escalated':                 'chip--escalated',
      'Open':                      'chip--warning',
      'In Progress':               'chip--in-prog',
      'Resolved':                  'chip--resolved',
      'Self-Service':              'chip--self',
      'Assisted':                  'chip--assisted',
      'Info':                      'chip--info',
      'Warning':                   'chip--warning',
      'Alert':                     'chip--critical',
      'Critical':                  'chip--critical',
    };
    const cls = chipMap[status] || 'chip--info';
    return `<span class="chip ${cls}"><span class="chip__dot"></span>${status}</span>`;
  }

  return { init, fmtDate, fmtDateTime, statusChip, ICONS };

})();
