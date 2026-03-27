/* ================================================================
   CRS-PDVS — Pensioner Auth Utility
   Shared authentication state management for all pensioner pages.

   Include ONCE per pensioner-facing page:
     <script src="js/pensioner-auth.js"></script>
   Then call PensionerAuth.updateHeader() after DOM is ready.
   ================================================================ */

window.PensionerAuth = (function () {

  const SESSION_KEY = 'crs_pensioner_session'; // sessionStorage — cleared on tab close
  const NAME_KEY    = 'crs_pensioner_name';    // localStorage  — persists for greeting
  const SESSION_TTL = 8 * 60 * 60 * 1000;     // 8 hours in milliseconds

  /* ---- Read / Write ---- */
  function getSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      // Auto-expire after TTL
      if (session.lastLoginAt) {
        const age = Date.now() - new Date(session.lastLoginAt).getTime();
        if (age > SESSION_TTL) { clearSession(); return null; }
      }
      return session;
    } catch (_) { return null; }
  }

  function setSession(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({
      ...user,
      lastLoginAt: new Date().toISOString()
    }));
    // Persist first name for the "Welcome back, dear X" greeting
    localStorage.setItem(NAME_KEY, user.firstName || '');
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function getKnownName() {
    return localStorage.getItem(NAME_KEY) || null;
  }

  /* ---- Credential Validation (STRICT) ----
     A pensioner can sign in if:
       (a) They completed registration this browser session (sessionStorage flag set), OR
       (b) They use the demo password "crs2026" (prototype mode).
     In both cases the Pension ID must exist in CRS_PDVS_DATA.
  --------------------------------------------------------- */
  function validateCredentials(pensionId, password) {
    if (!pensionId || !password) return false;
    const id = pensionId.toUpperCase().trim();

    const D = window.CRS_PDVS_DATA;
    if (!D) return false;

    const record = D.pensioners.find(p => p.id === id);
    if (!record) return false; // ID not in system

    // Path A — registered this session
    const registeredFlag = sessionStorage.getItem('crs_registered_' + id);
    if (registeredFlag) return true;

    // Path B — demo/prototype login with the shared demo password
    return password === 'crs2026';
  }

  /* ---- Auth Guard ---- */
  // Call on every protected page. Redirects to login if no valid session.
  function guard() {
    const session = getSession();
    if (!session) {
      const returnUrl = window.location.pathname.split('/').pop() + window.location.search;
      window.location.replace('pensioner-login.html?return=' + encodeURIComponent(returnUrl));
      return null;
    }
    return session;
  }

  /* ---- Sign Out ---- */
  function signOut() {
    clearSession();
    window.location.href = 'index.html';
  }

  /* ----------------------------------------------------------------
     updateHeader(options)
     Rewrites the #header-nav element to reflect auth state.
     Call once per page after the DOM is loaded.

     options:
       { activePage: 'dashboard' | 'notifications' | 'profile' | null }
  ---------------------------------------------------------------- */
  function updateHeader(options) {
    options = options || {};
    const nav = document.getElementById('header-nav');
    if (!nav) return;

    const session = getSession();

    if (session) {
      const active = options.activePage || '';
      nav.innerHTML = `
        <a href="dashboard.html"
           class="site-header__link${active === 'dashboard' ? ' site-header__link--active' : ''}">
          My Dashboard
        </a>
        <a href="notification.html"
           class="site-header__link${active === 'notifications' ? ' site-header__link--active' : ''}"
           id="nav-notif-link">
          Notifications
        </a>
        <a href="pensioner-profile.html"
           class="site-header__link${active === 'profile' ? ' site-header__link--active' : ''}">
          My Profile
        </a>
        <button
          class="site-header__link"
          style="background:none;border:none;cursor:pointer;color:inherit;font:inherit;padding:0;"
          onclick="PensionerAuth.signOut()">
          Sign Out
        </button>
      `;
      addNotifDot();
    } else {
      nav.insertAdjacentHTML('beforeend', `
        <a href="pensioner-login.html" class="site-header__link" style="font-weight:var(--font-weight-semi);">Sign In</a>
        <a href="register.html" class="btn btn-secondary btn-sm" style="margin-left:var(--space-2);">Register</a>
      `);
    }
  }

  /* Inject a small red dot on the Notifications link */
  function addNotifDot() {
    const notifLink = document.getElementById('nav-notif-link');
    if (!notifLink) return;
    notifLink.style.position = 'relative';
    notifLink.insertAdjacentHTML('beforeend',
      `<span id="notif-dot" style="
        position:absolute; top:0; right:-4px;
        width:7px; height:7px; border-radius:50%;
        background:var(--red-500); border:1.5px solid white;
        display:inline-block;
      "></span>`
    );
  }

  return {
    getSession,
    setSession,
    clearSession,
    getKnownName,
    validateCredentials,
    guard,
    signOut,
    updateHeader,
  };

})();
