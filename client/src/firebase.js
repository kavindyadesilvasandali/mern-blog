// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-bloggg-ab7b0.firebaseapp.com",
  projectId: "mern-bloggg-ab7b0",
  storageBucket: "mern-bloggg-ab7b0.appspot.com",
  messagingSenderId: "223708567184",
  appId: "1:223708567184:web:097f3fea8ebee1b23cea15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);