/* ================================================================
   CRS-PDVS — PWA Install Prompt
   
   Usage: include <script src="js/pwa-install.js"></script>
   on any page that should show the install prompt.
   
   Behaviour:
   - Listens for the 'beforeinstallprompt' event (Chrome/Edge)
   - Shows a branded bottom-sheet 3 seconds after the event fires
   - Only shows once per session (sessionStorage flag)
   - Dismissed state persists in localStorage for 14 days
   - Works on both mobile and desktop PWA installs
   ================================================================ */

(function () {
  'use strict';

  const DISMISSED_KEY   = 'crs_pwa_dismissed_until';
  const SESSION_KEY     = 'crs_pwa_shown_this_session';
  const DISMISS_DAYS    = 14;

  let deferredPrompt = null;
  let promptEl       = null;

  /* ---- Inject CSS ---- */
  const style = document.createElement('style');
  style.textContent = `
    /* ===== PWA INSTALL PROMPT ===== */
    #pwa-install-prompt {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      z-index: 9999;
      transform: translateY(100%);
      transition: transform 0.38s cubic-bezier(0.34, 1.26, 0.64, 1);
      pointer-events: none;
    }
    #pwa-install-prompt.pwa-visible {
      transform: translateY(0);
      pointer-events: all;
    }

    .pwa-sheet {
      background: white;
      border-radius: 20px 20px 0 0;
      box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.15);
      padding: 0 0 max(24px, env(safe-area-inset-bottom)) 0;
      max-width: 560px;
      margin: 0 auto;
      border: 1px solid #e5e7eb;
      border-bottom: none;
      overflow: hidden;
    }

    .pwa-sheet__handle {
      width: 36px; height: 4px;
      background: #e5e7eb;
      border-radius: 2px;
      margin: 12px auto 0;
    }

    .pwa-sheet__inner {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      padding: 20px 24px 24px;
    }

    .pwa-sheet__logo {
      width: 52px; height: 52px;
      border-radius: 14px;
      background: white;
      border: 1px solid #e5e7eb;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; box-shadow: 0 2px 12px rgba(30,34,117,0.12);
    }
    .pwa-sheet__logo img {
      width: 36px; height: 36px;
      object-fit: contain;
    }

    .pwa-sheet__text { flex: 1; min-width: 0; }
    .pwa-sheet__eyebrow {
      font-size: 10.5px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #9ca3af;
      margin-bottom: 3px;
    }
    .pwa-sheet__title {
      font-size: 16px;
      font-weight: 800;
      color: #111827;
      letter-spacing: -0.02em;
      margin-bottom: 5px;
      line-height: 1.25;
    }
    .pwa-sheet__desc {
      font-size: 13px;
      color: #6b7280;
      line-height: 1.55;
      margin: 0;
    }

    .pwa-sheet__close {
      background: #f3f4f6;
      border: none;
      width: 28px; height: 28px;
      border-radius: 50%;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      color: #9ca3af;
      transition: background 0.15s, color 0.15s;
      line-height: 0;
    }
    .pwa-sheet__close:hover { background: #e5e7eb; color: #374151; }

    .pwa-sheet__actions {
      display: flex;
      gap: 10px;
      padding: 0 24px 4px;
    }

    .pwa-sheet__install-btn {
      flex: 1;
      padding: 12px 20px;
      background: linear-gradient(135deg, #1e2275 0%, #2b35b5 100%);
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      transition: opacity 0.15s, transform 0.15s;
      font-family: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 16px rgba(30,34,117,0.3);
    }
    .pwa-sheet__install-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
    .pwa-sheet__install-btn:active { transform: translateY(0); }

    .pwa-sheet__later-btn {
      padding: 12px 16px;
      background: none;
      border: 1px solid #e5e7eb;
      color: #6b7280;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      font-family: inherit;
      transition: background 0.15s;
    }
    .pwa-sheet__later-btn:hover { background: #f9fafb; }

    .pwa-sheet__perks {
      display: flex;
      gap: 6px;
      padding: 0 24px 16px;
      flex-wrap: wrap;
    }
    .pwa-perk {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 4px 10px;
      background: #f0f2fc;
      border: 1px solid #dde2f6;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      color: #1e2275;
    }

    /* desktop: card floats bottom-right */
    @media (min-width: 768px) {
      #pwa-install-prompt {
        bottom: 24px; right: 24px;
        left: auto; top: auto;
        width: 360px;
        transform: translateY(calc(100% + 40px));
      }
      #pwa-install-prompt.pwa-visible {
        transform: translateY(0);
      }
      .pwa-sheet {
        border-radius: 20px;
        border-bottom: 1px solid #e5e7eb;
        box-shadow: 0 16px 48px rgba(0, 0, 0, 0.18);
      }
      .pwa-sheet__handle { display: none; }
    }
  `;
  document.head.appendChild(style);

  /* ---- Build prompt HTML ---- */
  function buildPrompt() {
    const el = document.createElement('div');
    el.id = 'pwa-install-prompt';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Install CRS-PDVS App');
    el.innerHTML = `
      <div class="pwa-sheet">
        <div class="pwa-sheet__handle"></div>
        <div class="pwa-sheet__inner">
          <div class="pwa-sheet__logo">
            <img src="assets/images/crs_emblem.png" alt="CRS-PDVS">
          </div>
          <div class="pwa-sheet__text">
            <div class="pwa-sheet__eyebrow">Official Cross River State App</div>
            <div class="pwa-sheet__title">Install CRS-PDVS</div>
            <p class="pwa-sheet__desc">Add the pension verification portal to your home screen for instant, offline-ready access.</p>
          </div>
          <button class="pwa-sheet__close" id="pwa-close-btn" aria-label="Dismiss">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="pwa-sheet__perks">
          <span class="pwa-perk">⚡ Instant access</span>
          <span class="pwa-perk">📴 Works offline</span>
          <span class="pwa-perk">🔒 Secure</span>
        </div>
        <div class="pwa-sheet__actions">
          <button class="pwa-sheet__install-btn" id="pwa-install-btn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Add to Home Screen
          </button>
          <button class="pwa-sheet__later-btn" id="pwa-later-btn">Not now</button>
        </div>
      </div>
    `;
    return el;
  }

  /* ---- Show / hide ---- */
  function show() {
    if (!promptEl) {
      promptEl = buildPrompt();
      document.body.appendChild(promptEl);

      document.getElementById('pwa-install-btn').addEventListener('click', triggerInstall);
      document.getElementById('pwa-later-btn').addEventListener('click', dismiss);
      document.getElementById('pwa-close-btn').addEventListener('click', dismiss);
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => promptEl.classList.add('pwa-visible'));
    });
    sessionStorage.setItem(SESSION_KEY, '1');
  }

  function hide() {
    if (promptEl) promptEl.classList.remove('pwa-visible');
  }

  function dismiss() {
    hide();
    const until = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(DISMISSED_KEY, until);
  }

  /* ---- Trigger the native install ---- */
  async function triggerInstall() {
    hide();
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      localStorage.removeItem(DISMISSED_KEY);
    }
    deferredPrompt = null;
  }

  /* ---- Eligibility check ---- */
  function isDismissed() {
    const until = parseInt(localStorage.getItem(DISMISSED_KEY), 10);
    return !isNaN(until) && Date.now() < until;
  }
  function isShownThisSession() {
    return sessionStorage.getItem(SESSION_KEY) === '1';
  }

  /* ---- Service Worker Registration ---- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js', { scope: '/' })
        .then(reg => {
          console.info('[CRS-PDVS SW] Registered. Scope:', reg.scope);
        })
        .catch(err => {
          console.warn('[CRS-PDVS SW] Registration failed:', err);
        });
    });
  }

  /* ---- React to beforeinstallprompt ---- */
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    deferredPrompt = event;

    if (isDismissed() || isShownThisSession()) return;

    // Show after a short delay so it doesn't interrupt page load
    setTimeout(show, 3200);
  });

  /* ---- Detect successful install ---- */
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    localStorage.removeItem(DISMISSED_KEY);
    hide();
    console.info('[CRS-PDVS] App installed successfully.');
  });

})();
