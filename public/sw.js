self.addEventListener('install', function(event) {
  // event.waitUntil(
  //   caches.open('first-app')
  //     .then(function(cache) {
  //       cache.addAll([
  //         '/',
  //         '/index.html',
  //         '/src/css/app.css',
  //         '/src/js/app.js'
  //       ])
  //     })
  // );
    console.log('event1', event);

  // return self.clients.claim();
});

self.addEventListener('activate', function(event) {
    console.log('event', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  // event.respondWith(
  //   caches.match(event.request)
  //     .then(function(res) {
  //       return res;
  //     })
  // );
});