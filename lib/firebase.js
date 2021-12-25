 
// https://blog.logrocket.com/building-a-fullstack-application-with-next-js-and-firestore-db/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase with project config
const firebaseConfig = {
  apiKey: "AIzaSyAXfGUl2SVKI8AJPBvxts5GWPvgB99vhXg",
  authDomain: "stevens-forums.firebaseapp.com",
  projectId: "stevens-forums",
  storageBucket: "stevens-forums.appspot.com",
  messagingSenderId: "790361151191",
  appId: "1:790361151191:web:a7fc97da3cf25fed160292",
  measurementId: "G-FLQK8NNPBS"
};
const app = initializeApp(firebaseConfig);

// export Firestore database
export const db = getFirestore(app)
export const auth = getAuth(app)
// dude this firebase v9 treeshaker sshit is so damn confusing hwo the hell do i structure the project with it