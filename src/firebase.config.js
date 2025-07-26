

import { initializeApp } from "firebase/app";
console.log("🏷 import.meta.env:", import.meta.env);
console.log("🏷 VITE_API_KEY:", import.meta.env.VITE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
};

console.log("🔥 Firebase config:", firebaseConfig);

export const app = initializeApp(firebaseConfig);