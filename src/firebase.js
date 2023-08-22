import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2qSOyHfGl9CKe6Brzyob_lwyjX7tSUto",
  authDomain: "reactchat-7515c.firebaseapp.com",
  projectId: "reactchat-7515c",
  storageBucket: "reactchat-7515c.appspot.com",
  messagingSenderId: "76769426478",
  appId: "1:76769426478:web:46c69da994bab665aa73bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
