/* ============================================================
   CRS-PDVS — Admin Flow Logic
   
   Phase 01: Placeholder module for administrative flows.
   Business logic will be added in subsequent phases.
   
   Future responsibilities:
   - Admin login and role simulation
   - Dashboard metrics rendering
   - Review queue management
   - Pensioner record browsing
   - Analytics and reports
   - Assisted verification console
   - Audit log display
   ============================================================ */

const CRS_ADMIN = (() => {

  // ===========================================================
  // Placeholder: Will be populated in Phase 07+
  // ===========================================================

  function init() {
    console.log('[CRS-PDVS] Admin module loaded. No business flows active yet.');

    // Set current year in footer / sidebar if present
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Initialize sidebar toggle for mobile
    initSidebarToggle();
  }


  // ===========================================================
  // Sidebar Toggle (Mobile)
  // ===========================================================
  function initSidebarToggle() {
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('admin-sidebar');
    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 1024 &&
          sidebar.classList.contains('open') &&
          !sidebar.contains(e.target) &&
          !toggleBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }


  // ===========================================================
  // Run on DOM ready
  // ===========================================================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  return {
    init,
  };

})();
