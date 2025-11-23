// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXZ6fRnsPFjry5cj0Rxf_sW6dcykbpNwE",
  authDomain: "carsstore-a5504.firebaseapp.com",
  projectId: "carsstore-a5504",
  storageBucket: "carsstore-a5504.firebasestorage.app",
  messagingSenderId: "982405996068",
  appId: "1:982405996068:web:433932e15b6c700feb42b1",
  measurementId: "G-7KT5JGTXDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);