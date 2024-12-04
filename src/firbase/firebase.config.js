// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB9CDhdUuhMxfFlMeWpv8-2qV8uK1a5Go",
  authDomain: "movie-flicknest.firebaseapp.com",
  projectId: "movie-flicknest",
  storageBucket: "movie-flicknest.firebasestorage.app",
  messagingSenderId: "332211613380",
  appId: "1:332211613380:web:f89a0e1a98acca366c6391"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;