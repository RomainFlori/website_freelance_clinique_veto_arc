// lib/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBBNzctGQNgIfFWRNfZrf3hDnEH_Z-12WA",
  authDomain: "cliniquedelarc.firebaseapp.com",
  projectId: "cliniquedelarc",
  storageBucket: "cliniquedelarc.firebasestorage.app",
  messagingSenderId: "10302303589",
  appId: "1:10302303589:web:0bd2d81c7f8cc6abce858c",
  measurementId: "G-E61E08S3L2"
};

// On initialise seulement si aucune app n'existe déjà
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);