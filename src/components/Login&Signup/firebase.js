// src/components/Login&Signup/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-4V5IWvx0thj1M3oMbpbo3b7s1gjErjU",
  authDomain: "studentlogin-2f0c8.firebaseapp.com",
  projectId: "studentlogin-2f0c8",
  storageBucket: "studentlogin-2f0c8.appspot.com",
  messagingSenderId: "333348473239",
  appId: "1:333348473239:web:ecd41bd219dc8ef453dcd2",
  measurementId: "G-SZ5PEY74YP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
