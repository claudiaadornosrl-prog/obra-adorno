// Service Worker · network-first para HTML, cache-first para assets
const CACHE_VERSION = 'obra-v42-proveedor';
const CACHE_ASSETS = ['fonts/URWGothic-Book.ttf', './', './index.html', './manual.js', './manifest.webmanifest'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(CACHE_ASSETS)).catch(err => console.warn('[SW]', err)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.includes('supabase.co') || url.hostname.includes('jsdelivr.net') || url.hostname.includes('cdnjs.cloudflare.com')) return;
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    e.respondWith(fetch(req).then(r => { if (r && r.ok) { const c = r.clone(); caches.open(CACHE_VERSION).then(x => x.put('./index.html', c)); } return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(cached => cached || fetch(req).then(r => {
    if (r && r.ok) { const c = r.clone(); caches.open(CACHE_VERSION).then(x => x.put(req, c)); } return r; }).catch(() => cached)));
});

// ── PUSH (payload de la Edge Function enviar-push) ──
self.addEventListener('push', (event) => {
  let p = {}; try { p = event.data ? event.data.json() : {}; } catch (e) { p = { title: 'Obra · Claudia Adorno', body: event.data ? event.data.text() : 'Tenés una novedad' }; }
  event.waitUntil(self.registration.showNotification(p.title || 'Obra · Claudia Adorno', { body: p.body || '', icon: p.icon || './icon-192-v2.png', badge: './icon-192-v2.png', tag: p.tag || 'obra', data: { url: p.url || './' }, vibrate: [200, 100, 200] }));
});
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); const url = (event.notification.data && event.notification.data.url) || './';
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cl) => {
    for (const c of cl) { if (c.url.includes(self.location.origin) && 'focus' in c) { c.focus(); if ('navigate' in c) c.navigate(url).catch(() => {}); return; } }
    if (self.clients.openWindow) return self.clients.openWindow(url);
  }));
});
