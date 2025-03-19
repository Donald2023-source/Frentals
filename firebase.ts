// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvWhs7oJq0YxiWNGctTcdGsOHk1vOJNF8",
  authDomain: "frentals-e5d94.firebaseapp.com",
  projectId: "frentals-e5d94",
  storageBucket: "frentals-e5d94.firebasestorage.app",
  messagingSenderId: "594405337483",
  appId: "1:594405337483:web:cbc1168c88a9945fcde78e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export { auth, db};