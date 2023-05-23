// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_gfibjBBe-vv-o_AWxU2575kLiC0wuQQ",
  authDomain: "info-vinicius.firebaseapp.com",
  projectId: "info-vinicius",
  storageBucket: "info-vinicius.appspot.com",
  messagingSenderId: "977915151058",
  appId: "1:977915151058:web:8011207999ba856ca5a30b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };