// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAydiENBsMNCOVyGRuK4zwrEkVvsLTqXMc",
  authDomain: "realtor-react-af53d.firebaseapp.com",
  projectId: "realtor-react-af53d",
  storageBucket: "realtor-react-af53d.appspot.com",
  messagingSenderId: "1047191294104",
  appId: "1:1047191294104:web:650198cefc5b25aea540ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
