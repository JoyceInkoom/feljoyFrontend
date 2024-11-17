// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCty50ryw9W7UN2eMkLiO_fWCdJZ0FJa7E",
  authDomain: "feljoy.firebaseapp.com",
  databaseURL: "https://feljoy-default-rtdb.firebaseio.com",
  projectId: "feljoy",
  storageBucket: "feljoy.firebasestorage.app",
  messagingSenderId: "1055646030878",
  appId: "1:1055646030878:web:517c975f93c29a42bde20f",
  measurementId: "G-YJHGV66VG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const database = getDatabase(app);

export { database };
