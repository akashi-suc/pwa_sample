self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
	 console.log('[ServiceWorker] fetch');
});