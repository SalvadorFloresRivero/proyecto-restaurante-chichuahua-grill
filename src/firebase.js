import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxgM3Vw_I5OqMGozScn9s9c5mJISxEp9o",
    authDomain: "chihuahua-grill.firebaseapp.com",
    projectId: "chihuahua-grill",
    storageBucket: "chihuahua-grill.appspot.com",
    messagingSenderId: "683977559795",
    appId: "1:683977559795:web:a633f695faabdf8eef3186"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


