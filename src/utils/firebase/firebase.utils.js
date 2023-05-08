import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLRsRkun4bePwLc662aHlZGxoHDYzmbqo",
  authDomain: "unlimited-clothing-db.firebaseapp.com",
  projectId: "unlimited-clothing-db",
  storageBucket: "unlimited-clothing-db.appspot.com",
  messagingSenderId: "462979297558",
  appId: "1:462979297558:web:a61a4dffe614152829a037",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data doesn not exist, create/set the document with the data from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log(error.message);
    }

    return userDocRef;
  }
};

// if user data exists

// return userDocRef
