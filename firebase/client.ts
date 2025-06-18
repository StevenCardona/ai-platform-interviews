import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuyJ74xwUaxYXGi9rWsR3ZjadI-8IF_hk",
  authDomain: "prepwise-interview-52890.firebaseapp.com",
  projectId: "prepwise-interview-52890",
  storageBucket: "prepwise-interview-52890.firebasestorage.app",
  messagingSenderId: "650975555609",
  appId: "1:650975555609:web:a9e71e1afe401265003a88",
  measurementId: "G-J6PR6GG642",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
