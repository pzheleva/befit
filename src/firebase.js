import { initializeApp } from 'firebase/app'
import {getAuth,signInWithPopup,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail, signOut} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "",
    authDomain: "fit-life-62dc7.firebaseapp.com",
    projectId: "fit-life-62dc7",
    storageBucket: "fit-life-62dc7.appspot.com",
    messagingSenderId: "842028520327",
    appId: "1:842028520327:web:09d48ba2bbfbba0dc8f922"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db}