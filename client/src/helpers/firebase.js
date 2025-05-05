import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDViq7z2Xgd4ENeqDbNVZRgok23IwSTo-c",
    
    authDomain: "yt-mern-blog-a2bd8.firebaseapp.com",
    projectId: "yt-mern-blog-a2bd8",
    storageBucket: "yt-mern-blog-a2bd8.firebasestorage.app",
    messagingSenderId: "609876664717",
    appId: "1:609876664717:web:dfd30722ee096b7bf59dc4",
    measurementId: "G-GGSQBSP7GK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }













