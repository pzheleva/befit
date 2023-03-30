import { Form, useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { db } from "../firebase";
import { signOut,getAuth } from 'firebase/auth';
import { auth } from "../firebase";

export  function getId() {
	let user = JSON.parse(localStorage.getItem("user"));

    return user.uid;
}

export  function isThereUser() {
	let user = JSON.parse(localStorage.getItem("user"));

    if(user){
        return true;
    }else{
        return false;
    }
}


export async function getFirstName(id) {
	const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data().firstName;
}

export async function getBookings(id) {
	const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data().bookings;
}

export async function getPosts(id) {
	const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data().posts;
}

export async function getUser(id) {
	const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
}

