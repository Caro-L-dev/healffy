// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "healffy-2f2ed.appspot.com",
  messagingSenderId: "269708526046",
  appId: "1:269708526046:web:5c6add84229bc12f6bdd4f",
  measurementId: "G-MD7TB9PPQY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
