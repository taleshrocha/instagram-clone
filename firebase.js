// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaTOA0hovDA_NM1d2_reYhDw45v_EIXPE",
  authDomain: "instagram-clone-cab55.firebaseapp.com",
  projectId: "instagram-clone-cab55",
  storageBucket: "instagram-clone-cab55.appspot.com",
  messagingSenderId: "305060963293",
  appId: "1:305060963293:web:19c438315de82261108c34",
};

// Initialize Firebase with singleton (for Next server-side rendering)
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
