
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider  } from 'firebase/auth';
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDzeOLZHKamWn7up9XsFxrANURk8k_OMGo",
  authDomain: "clone-d05b4.firebaseapp.com",
  projectId: "clone-d05b4",
  storageBucket: "clone-d05b4.appspot.com",
  messagingSenderId: "1026129986951",
  appId: "1:1026129986951:web:f284e24e2fe8967dd1ff22",
  measurementId: "G-KKRMCZ7T99"
};

// const firebaseApp = initializeApp( firebaseConfig );

const auth = getAuth();
const provider =new  GoogleAuthProvider();

export { db, auth, provider };