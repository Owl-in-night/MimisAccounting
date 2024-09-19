// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX3uIByS7_ZrBIo3mxdZb2Z40E7VL5tSw",
  authDomain: "mimis-accounting.firebaseapp.com",
  projectId: "mimis-accounting",
  storageBucket: "mimis-accounting.appspot.com",
  messagingSenderId: "1010457093312",
  appId: "1:1010457093312:web:ac605e17fc189e10e2f925",
  measurementId: "G-N4YN4B0J3Q"
}
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app)
//const analytics = getAnalytics(app);

export { db, storage, auth};