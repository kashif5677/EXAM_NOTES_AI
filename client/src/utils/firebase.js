
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-7b11c.firebaseapp.com",
  projectId: "examnotesai-7b11c",
  storageBucket: "examnotesai-7b11c.firebasestorage.app",
  messagingSenderId: "1005249747254",
  appId: "1:1005249747254:web:e752739cd813406c337b97",
  measurementId: "G-Q66GE1DCY3"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { auth, provider }