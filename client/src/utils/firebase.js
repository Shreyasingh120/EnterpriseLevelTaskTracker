// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanagershreya-c219c.firebaseapp.com",
  projectId: "taskmanagershreya-c219c",
  storageBucket: "taskmanagershreya-c219c.firebasestorage.app",
  messagingSenderId: "300379320092",
  appId: "1:300379320092:web:922282c28a46050f0114d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);