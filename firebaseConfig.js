// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // if using authentication
import { getFirestore } from "firebase/firestore"; // if using Firestore database
import { getStorage } from "firebase/storage"; // if using Firebase storage

// Paste your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyDw6kcBfVph0qhKuMSza1IK4gSDtFTZ-uA",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-9K4WW7ZG7X",
};

let firebaseApp;
if (!firebaseApp) {
  firebaseApp = initializeApp(firebaseConfig);
}

// Initialize services as needed
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };
