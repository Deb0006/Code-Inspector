import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
// import { db } from "../pages/api/firebase-config";

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
const examplesCollectionRef = collection(db, "examples");
export default async function (req, res) {
  if (req.method === "GET") {
    const getExamples = async () => {
      const data = await getDocs(examplesCollectionRef);
      const response = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      res.status(200).json(response);
    };
    getExamples();
  } else if (req.method === "POST") {
    const input = req.body.code;
    const result = req.body.result;
    const x = await addDoc(resultsCollectionRef, {
      code: input,
      result: result,
    });
    res.status(201).json(x);
  }
}
