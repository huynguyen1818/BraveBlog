
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDe_AU2odggObSi8gRdxebx1ErhVSPCtY4",
  authDomain: "project-blog-2bda6.firebaseapp.com",
  projectId: "project-blog-2bda6",
  storageBucket: "project-blog-2bda6.appspot.com",
  messagingSenderId: "239515587742",
  appId: "1:239515587742:web:2c9b87dddceaa3bba3d78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);