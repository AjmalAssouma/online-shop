const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/static/js/main.8a00fdd6.js',
    '/static/css/main.93b18a65.css',
    '/users',
    '/firebase-messaging-sw.js',
    '/sw.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});



self.addEventListener('fetch', (event) => {

  if (!navigator.onLine) {
    if (event.request.url === "https://online-shop-front-end/") {
        event.waitUntil(
            this.registration.showNotification("Internet", {
                body: 'La connexion internet ne marche pas correctement',
                icon: 'img/logo96.png'
            })
        )
    }
  }
    

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // Cloner la requête car elle est consommée par le cache
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          (response) => {

            // Vérifier si nous avons reçu une réponse valide
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Cloner la réponse car elle est consommée par le cache
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
     })
  );
});
