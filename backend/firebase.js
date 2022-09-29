// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdXvItQ6tJ0wYJkKVMgI2WsPU0y0WwI6s",
    authDomain: "sreeroop-sk.firebaseapp.com",
    projectId: "sreeroop-sk",
    storageBucket: "sreeroop-sk.appspot.com",
    messagingSenderId: "95889146542",
    appId: "1:95889146542:web:3f2a30b63a8ba1de81e33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const storage = getStorage()