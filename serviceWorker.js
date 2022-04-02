
self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open('rd');
    await cache.addAll([
      'index.html',
    ]);
    await cache.add(new Request("index.html", {cache: 'reload'}));
  })());
});

self.addEventListener('activate', (event) => {});

self.addEventListener('fetch', function(event) {
 event.respondWith(
   (async () => {
     try {
       const networkResponse = await fetch(event.request);
       return networkResponse;
     } catch (error) {
       const cache = await caches.open('rd');
       const cachedResponse = await cache.match(event.request);
       return cachedResponse;
     }
   });
 })());
});
