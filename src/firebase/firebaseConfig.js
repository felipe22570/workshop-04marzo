// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDupg0z3ZkZF_GHwXlloxf1dU6cwKxFiRI",
   authDomain: "workshop-04marzo.firebaseapp.com",
   projectId: "workshop-04marzo",
   storageBucket: "workshop-04marzo.appspot.com",
   messagingSenderId: "746836684224",
   appId: "1:746836684224:web:ec509ac969a9b3cffc2c25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const db = getFirestore();

export { app, google, db };
