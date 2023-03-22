import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";


export async function getTopicName() {
    const topics = [];

    const docs = await getDocs(collection(db, "topics"));
    docs.forEach((d) => {
        let data = d.data();
        data['id'] = d["_key"]["path"]["segments"][6];
        topics.push(data);
    });
   
    return topics;
}

export async function getTopicById(id) {
    const snap = await getDoc(doc(db, 'topics', id));
    return snap.data();
}

export async function getCommentsSection (id) {
    const snap = await getDoc(doc(db, 'topics', id));
    return snap.data().comments;
};


export function isAuthor(authorId, userId) {
    if(authorId === userId) {
        return true;
    }else {
        return false;
    }
}