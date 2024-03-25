// Import the functions you need from the SDKs you need
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsXBOXL1tRPpIA8eAOCeMCPtYuxDw1Lj0",
  authDomain: "scissors-c3f4c.firebaseapp.com",
  projectId: "scissors-c3f4c",
  storageBucket: "scissors-c3f4c.appspot.com",
  messagingSenderId: "455069660994",
  appId: "1:455069660994:web:3e5f9b4802a29778d27adb",
  measurementId: "G-JS6DQPE6DT"
};

// Initialize Firebase
export const Firebase: FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(Firebase);
export const db = getFirestore(Firebase);
export const auth = getAuth(Firebase);
export const database = getDatabase(Firebase);
export const linksRef = collection(db, 'links');
// export const userLinksRef = collection(db, 'links',);
