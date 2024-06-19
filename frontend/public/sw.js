const CACHE_NAME = 'my-ecommerce-app-cache-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/css/main.chunk.css',
    '/bootstrap.min.css',
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
    if (event.request.url === "https://online-shop-front-end/static/js/bundle.js") {
        event.waitUntil(
            this.registration.showNotification("Internet", {
                body: 'La connexion internet ne marche pas correctement',
                icon: 'img/logo96.png'
            })
        )
    }
  }

  // if (!navigator.onLine) {
  //   // Tenter de répondre à la demande à partir du cache
  //   event.respondWith(
  //     caches.match(event.request).then((cachedResponse) => {
  //       // Retourner la réponse en cache si elle existe
  //       return cachedResponse || fetch(event.request).catch(() => {
  //         // Si la ressource n'est pas en cache et que la connexion est perdue, renvoyer une réponse de fallback
  //         // return caches.match('/offline.html');
  //       });
  //     })
  //   );
  // }


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









// self.addEventListener('notificationclick', function(event) {
//   // Logique à exécuter lorsqu'un utilisateur clique sur la notification
//   // Par exemple, rediriger vers une page spécifique
//   event.notification.close();
//   event.waitUntil(
//     clients.openWindow('/')
//   );
// });

// self.addEventListener('message', function(event) {
//   // Logique pour gérer les messages du client, si nécessaire
//   // Vous pouvez envoyer un message du client pour déclencher la notification de bienvenue
//   if (event.data === 'showWelcomeNotification') {
//     showWelcomeNotification();
//   }
// });

// function showWelcomeNotification() {
//   self.registration.showNotification("Bienvenue sur le site", {
//     body: "Merci de visiter notre site pour la première fois!",
//   });
// }

