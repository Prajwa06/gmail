// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMLPBjvuOXySDQAAXC39tYtXzJ5ERGSL4",
  authDomain: "fir-a87ad.firebaseapp.com",
  projectId: "fir-a87ad",
  storageBucket: "fir-a87ad.appspot.com",
  messagingSenderId: "1086494728919",
  appId: "1:1086494728919:web:e183c76f70b7312c748692",
  measurementId: "G-GV6ND8YRR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {db,auth,provider};
