import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDg_8fkeZkjM5P9Z4wmCqL3Jmr1K5Z0LmI",
  authDomain: "react-store-a75dc.firebaseapp.com",
  projectId: "react-store-a75dc",
  storageBucket: "react-store-a75dc.appspot.com",
  messagingSenderId: "906012745960",
  appId: "1:906012745960:web:eeb8e651cd11eaa20fe95d",
  measurementId: "G-Q9WTDETCY7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
