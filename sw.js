/* ================================================================
   CRS-PDVS — Service Worker
   Cross River State Pension Digital Verification System
   
   Strategy:
   - Static assets (CSS, JS, images): Cache-first → network fallback
   - HTML pages: Network-first → cache fallback → offline.html
   - External resources (Google Fonts): Cache-first with expiry check
   ================================================================ */

const CACHE_VERSION  = 'v2';
const STATIC_CACHE   = 'crs-pdvs-static-' + CACHE_VERSION;
const PAGES_CACHE    = 'crs-pdvs-pages-'  + CACHE_VERSION;
const FONTS_CACHE    = 'crs-pdvs-fonts-'  + CACHE_VERSION;

const STATIC_ASSETS = [
  'css/base.css',
  'css/components.css',
  'css/pages.css',
  'css/admin-shell.css',
  'js/mock-data.js',
  'js/app.js',
  'js/pensioner-auth.js',
  'js/admin-shell.js',
  'js/pwa-install.js',
  'assets/images/crs_emblem.png',
  'assets/images/think_cross_river.jpg',
  'manifest.json',
];

const PAGES = [
  'index.html',
  'register.html',
  'pensioner-login.html',
  'verify.html',
  'face.html',
  'dashboard.html',
  'pensioner-profile.html',
  'notification.html',
  'onboard.html',
  'offline.html',
  'admin-login.html',
  'admin.html',
  'admin-review.html',
  'admin-records.html',
  'admin-reports.html',
  'admin-pensioners-profile.html',
  'admin-users.html',
  'admin-profile.html',
  'admin-settings.html',
  'admin-assisted.html',
];

/* ---- Install ---- */
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => cache.addAll(STATIC_ASSETS)),
      caches.open(PAGES_CACHE).then(cache => cache.addAll(PAGES)),
    ]).then(() => self.skipWaiting())
  );
});

/* ---- Activate — delete old caches ---- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('crs-pdvs-') &&
            ![STATIC_CACHE, PAGES_CACHE, FONTS_CACHE].includes(k))
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

/* ---- Fetch ---- */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin (except Google Fonts)
  if (request.method !== 'GET') return;
  const isGoogleFonts = url.hostname.includes('fonts.googleapis.com') ||
                        url.hostname.includes('fonts.gstatic.com');

  if (!isGoogleFonts && url.origin !== location.origin) return;

  // Google Fonts — cache-first
  if (isGoogleFonts) {
    event.respondWith(cacheFirst(request, FONTS_CACHE));
    return;
  }

  // Static assets (CSS, JS, images) — cache-first
  const ext = url.pathname.split('.').pop().toLowerCase();
  if (['css', 'js', 'png', 'jpg', 'jpeg', 'webp', 'svg', 'ico', 'json'].includes(ext) &&
      !url.pathname.endsWith('.html')) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // HTML pages — network-first, fallback to cache, then offline
  event.respondWith(networkFirstWithOfflineFallback(request));
});

/* ----------------------------------------------------------------
   Strategy helpers
   ---------------------------------------------------------------- */

async function cacheFirst(request, cacheName) {
  const cache  = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (_) {
    return new Response('Resource unavailable offline.', { status: 503 });
  }
}

async function networkFirstWithOfflineFallback(request) {
  const cache = await caches.open(PAGES_CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch (_) {
    // Try cache
    const cached = await cache.match(request);
    if (cached) return cached;
    // Try offline fallback
    const offline = await cache.match('offline.html');
    return offline || new Response(
      '<!DOCTYPE html><html><body style="font-family:sans-serif;padding:40px;text-align:center">' +
      '<h1>You are offline</h1><p>Please check your connection and try again.</p>' +
      '<a href="/">Return to CRS-PDVS</a></body></html>',
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}
