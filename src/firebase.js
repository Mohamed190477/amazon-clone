import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtH8uT-VechpAuf7jpjwYwkYkYLQyAXVw",
  authDomain: "challenge-5f995.firebaseapp.com",
  projectId: "challenge-5f995",
  storageBucket: "challenge-5f995.appspot.com",
  messagingSenderId: "370556315158",
  appId: "1:370556315158:web:fe35a77f3c94b946153737",
};

// 1) initialize the app
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
//npm install firebase --save
