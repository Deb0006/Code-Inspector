import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "code-inspector.firebaseapp.com",
  databaseURL: "https://code-inspector-default-rtdb.firebaseio.com",
  projectId: "code-inspector",
  storageBucket: "code-inspector.appspot.com",
  messagingSenderId: "115928184766",
  appId: "1:115928184766:web:01385939ebebef6874abef",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const resultsCollectionRef = collection(db, "examples");

export default async function firebaseGet(req, res) {
  if (req.method === "GET") {
    const data = await getDocs(resultsCollectionRef);
    const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    res.status(200).json(response);
  }
}
export async function createFirebaseData(input, result, userid, visibility) {
  await addDoc(resultsCollectionRef, {
    code: input,
    result: result,
    timestamp: Timestamp.now(),
    uid: userid,
    visible: visibility,
  });
}
export async function getFirebaseData(req, res) {
  const data = await getDocs(resultsCollectionRef);
  const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return response;
}
