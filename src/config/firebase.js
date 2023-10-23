// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJtFX6B8gOMz6tq66SPTHQ_1gxmXuY0yI",
  authDomain: "feed-app-d4045.firebaseapp.com",
  projectId: "feed-app-d4045",
  storageBucket: "feed-app-d4045.appspot.com",
  messagingSenderId: "24397207738",
  appId: "1:24397207738:web:bc405edf07195f02e88a83",
  measurementId: "G-D6TGJ6VJBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app);