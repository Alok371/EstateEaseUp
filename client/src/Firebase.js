// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "realestate-c91d7.firebaseapp.com",
    projectId: "realestate-c91d7",
    storageBucket: "realestate-c91d7.appspot.com",
    messagingSenderId: "365448295057",
    appId: "1:365448295057:web:dc56d6baeeb1dc8eb60530"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);