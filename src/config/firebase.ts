// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFNW5JhCcziTLf35NH5t-8kAp4IrZQVMo",
  authDomain: "fir-practice-project-8d63c.firebaseapp.com",
  projectId: "fir-practice-project-8d63c",
  storageBucket: "fir-practice-project-8d63c.appspot.com",
  messagingSenderId: "257383699560",
  appId: "1:257383699560:web:3389b16bf36f6b59f3d7dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);