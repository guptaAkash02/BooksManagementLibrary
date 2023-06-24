
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5gbLsSu8P3O8Ubj2rtFld55vHazJ8RdA",
  authDomain: "react-firebase-65aa6.firebaseapp.com",
  projectId: "react-firebase-65aa6",
  storageBucket: "react-firebase-65aa6.appspot.com",
  messagingSenderId: "60639194403",
  appId: "1:60639194403:web:ee287effbd2b48805b7096"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)