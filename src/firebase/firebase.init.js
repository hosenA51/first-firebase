// Do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER: Do not share config publicly

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh739i1Qa41zBSK2Bpu0nZur5qXs5qGjc",
  authDomain: "simple-firebase-b6d23.firebaseapp.com",
  projectId: "simple-firebase-b6d23",
  storageBucket: "simple-firebase-b6d23.firebasestorage.app",
  messagingSenderId: "735617851402",
  appId: "1:735617851402:web:c23a0bfc9d8fd7e121bff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;