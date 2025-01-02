// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJQZhRXKNywahpqcZ6Jp6LkkW5OH4daf8",
  authDomain: "netflixgpt-14ed6.firebaseapp.com",
  projectId: "netflixgpt-14ed6",
  storageBucket: "netflixgpt-14ed6.firebasestorage.app",
  messagingSenderId: "907963669490",
  appId: "1:907963669490:web:bd0dc66a22ff74f757296b",
  measurementId: "G-Q7JE6XT02J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);