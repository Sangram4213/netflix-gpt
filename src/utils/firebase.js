// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUqecVopSrRuA-UgwxxJgnbYFpPqXu8Gw",
  authDomain: "netflixgpt-ef27b.firebaseapp.com",
  projectId: "netflixgpt-ef27b",
  storageBucket: "netflixgpt-ef27b.firebasestorage.app",
  messagingSenderId: "30508798174",
  appId: "1:30508798174:web:43092f8230894911c1b24f",
  measurementId: "G-H59Q57450X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();