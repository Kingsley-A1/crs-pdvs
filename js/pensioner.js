/* ============================================================
   CRS-PDVS — Pensioner Flow Logic
   
   Phase 01: Placeholder module for pensioner-facing flows.
   Business logic will be added in subsequent phases.
   
   Future responsibilities:
   - Identity lookup and sign-in
   - First-time onboarding
   - Verification flow control
   - Dashboard rendering
   - Verification history display
   ============================================================ */

const CRS_PENSIONER = (() => {

  // ===========================================================
  // Placeholder: Will be populated in Phase 03+
  // ===========================================================

  function init() {
    console.log('[CRS-PDVS] Pensioner module loaded. No business flows active yet.');
    
    // Set current year in footer if present
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
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
