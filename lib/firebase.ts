import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: "healffy-2f2ed.appspot.com",
  messagingSenderId: "269708526046",
  appId: "1:269708526046:web:5c6add84229bc12f6bdd4f",
  measurementId: "G-MD7TB9PPQY",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage();
