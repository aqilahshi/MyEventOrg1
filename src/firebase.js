import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC94DtoafjF_BVtcfajiCVjgoAoC1Hbaog",
  authDomain: "try1-e4b2d.firebaseapp.com",
  projectId: "try1-e4b2d",
  storageBucket: "try1-e4b2d.appspot.com",
  messagingSenderId: "58011126197",
  appId: "1:58011126197:web:64baf6bbd258a1dccbf1fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();



