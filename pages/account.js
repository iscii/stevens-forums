import Nav from "../components/Nav";

import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function Account() {
	return (
		<div className="h-full">
			<Nav />
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-24 mb-8">Login</h1>
				<div className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl">
					<input id="l-email" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email/Username" /><br />
					<input id="l-pass" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl" onClick={login}>Submit</button>
				</div>
			</span>
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-8 mb-8">Sign Up</h1>
				<div className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl">
					<input id="s-email" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email" /><br />
					<input id="s-uname" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Username" /><br />
					<input id="s-pass" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl" onClick={signup}>Submit</button>
				</div>
			</span>
		</div>
	)
}

async function login() {
	try {
		const creds = await signInWithEmailAndPassword(auth, document.getElementById("l-email").value, document.getElementById("l-pass").value);
		console.log("login success!");

		//go to home page
		//account module to show username
	}
	catch (e) {
		console.log("error: \n" + e);
	}
}

async function logout() {
	try {
		const creds = await signOut(auth);
		console.log("logout success!");
	}
	catch (e) {
		console.log("error: \n" + e);
	}
}

//could have this trigger state change to show password form instead, but the condition remains the same
async function validateemail(email) {
	return email.toLowerCase()
	.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
	&& email.includes("@stevens.edu");
}

async function signup() {
	try {
		const creds = await createUserWithEmailAndPassword(auth, document.getElementById("s-email").value, document.getElementById("s-pass").value);
		console.log("signup success!");
	}
	catch (e) {
		console.log("error: \n" + e);
		const emsg = e.toString()
		if (!(emsg.includes("FirebaseError") || emsg.includes("auth/"))) {
			//show text unknown error occured
			return;
		}

		//make up some custom rules too, for non-stevens emails, or for invalid usernames
		const msg = emsg.split("auth/")[1].slice(0, -2); //"weak-password", "invalid-email", etc...
		switch (msg) {
			case "invalid-email":
				break;
			case "weak-password":
				break;
			case "email-already-in-use":
				break;
			default:
				break;
		}
	}
}

export default Account