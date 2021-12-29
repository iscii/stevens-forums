
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
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

/* Emulator
	emulator auth accounts and database data are separate from actual firebase accounds/data
	go to http://localhost:4000/auth to see the emulator accounts
	connectAuthEmulator connects to the firebase emulator localhost address, not the website localhost
	starts auth emulator so that the auth can connect to it with connectAuthEmulator
	$ npm run dev
	$ firebase emulators:start --only auth
*/
//connectFirestoreEmulator(auth, "http://localhost:8080") //*comment this out for production
//connectAuthEmulator(auth, "http://localhost:9099") //*comment this out for production
