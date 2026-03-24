
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmdSTidnCYd7xgWhcoS0RR6_V3hwwDz1o",
  authDomain: "cprg306-assignments-c251f.firebaseapp.com",
  projectId: "cprg306-assignments-c251f",
  storageBucket: "cprg306-assignments-c251f.firebasestorage.app",
  messagingSenderId: "609728234431",
  appId: "1:609728234431:web:c2ef033665df30b8dcd70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);