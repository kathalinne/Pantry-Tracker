// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzIKyjgOGj1CxOWzTvtzqKdG_NUGg4-30",
  authDomain: "pantry-tracker-927ba.firebaseapp.com",
  projectId: "pantry-tracker-927ba",
  storageBucket: "pantry-tracker-927ba.appspot.com",
  messagingSenderId: "941872266207",
  appId: "1:941872266207:web:928e527a495984824e226a",
  measurementId: "G-FVZGQJHQLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app)

export {firestore}