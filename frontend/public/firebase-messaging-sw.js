// // importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
// // importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');


// import { initializeApp } from 'firebase/app';
// import { getMessaging, onBackgroundMessage, onMessage } from 'firebase/messaging';

// const firebaseConfig = {
//     apiKey: "AIzaSyBHGXRZKRor9agFp670ZiQ0PGXFLXkI0dM",
//     authDomain: "fir-notification-98f6b.firebaseapp.com",
//     projectId: "fir-notification-98f6b",
//     storageBucket: "fir-notification-98f6b.appspot.com",
//     messagingSenderId: "874709133215",
//     appId: "1:874709133215:web:891eaade91408bc7c23faa",
//     measurementId: "G-427N4EBXC6"
// };

// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);


// app.initializeApp({
//     messagingSenderId: "875918063745",
//   })

// onBackgroundMessage(messaging, (payload) => {
//   console.log('Received background message:', payload);
//   // Personnalisez le traitement du message en arrière-plan ici
// });

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then((registration) => {
//         console.log('Service Worker registered successfully, scope:', registration.scope);
//       })
//       .catch((error) => {
//         console.error('Service Worker registration failed:', error);
//       });
//   }

  