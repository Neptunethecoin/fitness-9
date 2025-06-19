
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fitforge-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/home.html',
        '/10week_plan.html',
        '/assets/coach_luna.jpg',
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
