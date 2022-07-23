import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
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
