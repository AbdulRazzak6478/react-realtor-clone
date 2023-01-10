// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkINMu8u3sxbZQGgvCrQL9n0aMxP__xqY",
  authDomain: "realtor-clone-react-27dee.firebaseapp.com",
  projectId: "realtor-clone-react-27dee",
  storageBucket: "realtor-clone-react-27dee.appspot.com",
  messagingSenderId: "640714440261",
  appId: "1:640714440261:web:15e596873fc84cdc55ad2c"
};

// Initialize Firebase
initializeApp(firebaseConfig); 
export const db=getFirestore();