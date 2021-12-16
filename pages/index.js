import Head from "next/head";

import Nav from "../components/Nav.js";
import Notecard from "../components/Notecard.js";

// https://blog.logrocket.com/building-a-fullstack-application-with-next-js-and-firestore-db/
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase with project config
const app = initializeApp({
	apiKey: "AIzaSyAXfGUl2SVKI8AJPBvxts5GWPvgB99vhXg",
	authDomain: "stevens-forums.firebaseapp.com",
	projectId: "stevens-forums",
	storageBucket: "stevens-forums.appspot.com",
	messagingSenderId: "790361151191",
	appId: "1:790361151191:web:a7fc97da3cf25fed160292",
	measurementId: "G-FLQK8NNPBS"
});

const db = getFirestore(app);

/*
 * @todo Write Documentation
 * @todo Make favicon work
 */
async function test() {
	try {
		const docRef = await addDoc(collection(db, "users"), {
			first: "test",
		})
		console.log(`Document written under collection 'users' with id ${docRef.id}`)
	}
	catch (e) {
		console.log(`Error adding to document: ${e}`)
	}
}

// another test

export default function Home() {
	return (
		<div className="flex flex-col justify-start" onLoad={test()}>
			<Head>
				<title>Sex money</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> //fallback icon
				<link rel="shortcut icon" href="/amogus.svg" type="image/x-icon" />
			</Head>
			<Nav />
			<span className="flex h-screen v-screen">
				<span className="h-5/6 w-2/4 m-auto">
					<h1 className="mb-5 mt-5 text-center text-7xl">
						Death
					</h1>
					<Notecard />
				</span>
			</span>
		</div>
	);
}
