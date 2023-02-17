import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// This is a public key secured with Firebase rules
const firebaseConfig = {
  apiKey: "AIzaSyCHnCY9PRc94yRTKEg7osvbFb33M9-7b7M",
  authDomain: "code-inspectorauth.firebaseapp.com",
  projectId: "code-inspectorauth",
  storageBucket: "code-inspectorauth.appspot.com",
  messagingSenderId: "725011077421",
  appId: "1:725011077421:web:2503f85ec51cc7c8fb5ba4",
  measurementId: "G-4WHGGFJDMW",
};

const appConfig = initializeApp(firebaseConfig, "firebaseAuth");
export const auth = getAuth(appConfig);

const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    let user = await signInWithPopup(auth, provider);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
