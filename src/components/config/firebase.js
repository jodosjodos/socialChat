// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVbpWdRA2UoAdpvCiXCYgWfL6NH8zjUZQ",
  authDomain: "chat-cdcc0.firebaseapp.com",
  projectId: "chat-cdcc0",
  storageBucket: "chat-cdcc0.appspot.com",
  messagingSenderId: "247790211264",
  appId: "1:247790211264:web:b1b28fc21f0fb7b325dd25",
  measurementId: "G-ZW4Z710G2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);