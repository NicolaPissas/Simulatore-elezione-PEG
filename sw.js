const CACHE_NAME = 'simulatore-eurogruppo-v1';
const URLS_TO_CACHE = [
  '/Simulatore-elezione-PEG/',
  '/Simulatore-elezione-PEG/index.html',
  // aggiungi qui altri asset se necessario
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
