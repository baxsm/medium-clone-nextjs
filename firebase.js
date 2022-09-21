// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByicd82JrM3LNaCqYgAGiATXAQjMLbLA0",
    authDomain: "medium-clone-baxsm.firebaseapp.com",
    projectId: "medium-clone-baxsm",
    storageBucket: "medium-clone-baxsm.appspot.com",
    messagingSenderId: "350937752921",
    appId: "1:350937752921:web:2fc3bc80c4d944f2875848",
    measurementId: "G-KC0RRR95PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db}
