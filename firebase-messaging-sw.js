// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBregUa6Fq7VO7EvMar9FqFhJ02Yl9Vx8Y",
  authDomain: "file-transfer-x.firebaseapp.com",
  databaseURL: "https://file-transfer-x.firebaseio.com",
  projectId: "file-transfer-x",
  storageBucket: "file-transfer-x.appspot.com",
  messagingSenderId: "1018771616712",
  appId: "1:1018771616712:web:2f5adbe5a666d16ad746fd"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
console.log('[firebase-messaging-sw.js] start');
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };
  
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
