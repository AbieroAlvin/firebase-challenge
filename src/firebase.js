import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1Y99HLJN2uEDuYm0TjhvpePfU1fKNxwU",
  authDomain: "authentication-app-e93a0.firebaseapp.com",
  projectId: "authentication-app-e93a0",
  storageBucket: "authentication-app-e93a0.appspot.com",
  messagingSenderId: "307830016870",
  appId: "1:307830016870:web:6794aaef0d87316825d6a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
