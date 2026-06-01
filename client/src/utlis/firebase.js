
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "authexamnotes-24d08.firebaseapp.com",
    projectId: "authexamnotes-24d08",
    storageBucket: "authexamnotes-24d08.firebasestorage.app",
    messagingSenderId: "488233415058",
    appId: "1:488233415058:web:cb2a72c93d5b6c3fe2514b"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }