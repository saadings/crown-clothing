// ? initializeApp creates an instance based upon
// ? some configs, attach to firebase online
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: any = {
  // ! No need to hide apiKey as not important to firebase
  apiKey: "AIzaSyDfw3YypOVEMopNzcyrYdHxZyb_-rB8zs4",
  authDomain: "crown-clothing-db-279af.firebaseapp.com",
  projectId: "crown-clothing-db-279af",
  storageBucket: "crown-clothing-db-279af.appspot.com",
  messagingSenderId: "275373351235",
  appId: "1:275373351235:web:df676f7ba63457b87ecff6",
};

// Initialize Firebase
// ? CRUD operation will be done using firebaseApp
const firebaseApp = initializeApp(firebaseConfig);

// ? Creates instance of provider
// ? Used the new keyword as we need multiple providers
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  // ! Always prompt the use to select an account
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation: any = {}
) => {
  if (!userAuth) return;

  // ? Doc creates a record if it doesn't exists
  // ? it is a setter
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);
  // ? userSnapshot.exists() checks if the data exits
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error: any) {
      console.log("error creating user!", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// ? whenever, the state of the singleton Auth changes,
// ? the callback is called
// ? permanent listener but we will have to stop listener
export const onAuthStateChangedListener = (callback: any) =>
  onAuthStateChanged(auth, callback);
