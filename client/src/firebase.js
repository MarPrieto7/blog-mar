// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c76e0.firebaseapp.com",
  projectId: "mern-blog-c76e0",
  storageBucket: "mern-blog-c76e0.appspot.com",
  messagingSenderId: "425317335964",
  appId: "1:425317335964:web:67a414d2887f8f920cfe59"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);