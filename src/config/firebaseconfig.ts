// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBET8y9-1ffUM5LP0uyivXvkdUk6sAHMUY",
  authDomain: "taskmanagementa-app.firebaseapp.com",
  databaseURL: "https://taskmanagementa-app-default-rtdb.firebaseio.com",
  projectId: "taskmanagementa-app",
  storageBucket: "taskmanagementa-app.appspot.com",
  messagingSenderId: "1041512873490",
  appId: "1:1041512873490:web:3bd23c7cd1d2115abaa2cb",
  measurementId: "G-TRK3DH6S2X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);