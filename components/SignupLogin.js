import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'

import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

//TODO: implement input sanitization
//TODO: implement ui responses

{/* 
A component that displays a `log in` and `sign up` button that toggles respsective models
Both sign up and login models are implemented together for switching purposes (see function swapToggle())
*/}
export default function SignupLogin() {
	{/* Needs optimization, revisit! Toggle for each model defined separately; possibly merge into one toggle function */ }
	{/* Toggle function for models */ }
	const [showLogin, setShowLogin] = useState(false);
	const [showSignup, setShowSignup] = useState(false);
	function toggle(login, signup) {
		if (login) 
			setShowLogin(!showLogin);
		//include back button to email -> put the style display changes into its own function...
		if (signup) {
			next(true);
			setShowSignup(!showSignup);
		}
	}

	//TODO: REDO USING REACT JAVASCRIPT LOGIC
	function next(back){
		if(back){
			document.getElementById("s-pri").style.display = "flex";
			document.getElementById("s-sec").classList.replace("flex", "hidden");
			return;
		}
		document.getElementById("s-pri").style.display = "none";
		document.getElementById("s-sec").classList.replace("hidden", "flex");
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
	async function validateemail() {
		let email = document.getElementById("s-email").value;
		if (email.toLowerCase()
			.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) //is valid email
			&& email.includes("@stevens.edu")) {
			next();
		}
		else{
			//add textbox when invalid. could split the conditional into two if we want it to be more user-friendly
		}
	}
	
	async function signup() {
		if(document.getElementById("s-pass").value !== document.getElementById("s-cpass").value) return console.log("passwords do not match!");
		try {
			const creds = await createUserWithEmailAndPassword(auth, document.getElementById("s-email").value, document.getElementById("s-pass").value);
			console.log("signup success!");
			setShowLogin(false);
			setShowSignup(false);
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

	return (
		<>
			<button className="w-24 py-1 px-3 text-lg text-pri-red bg-pri-white font-bold border border-pri-red rounded-full" onClick={() => toggle(true)}>Log In</button>
			<button className="w-24 py-1 px-3 ml-4 text-lg text-pri-white bg-pri-red font-bold border border-pri-red rounded-full" onClick={() => toggle(false, true)}>Sign up</button>

			{/* Log in */}
			<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center" style={{ display: showLogin ? "flex" : "none" }}>
				{/* Dark overlay, clicking on overlay will toggle the model */}
				<a className="fixed h-screen w-screen" onClick={() => toggle(true)}>
					<div className="fixed h-screen w-screen bg-pri-black/50"></div>
				</a>

				{/* Container for the model */}
				<span className="relative flex flex-col justify-start items-center h-4/6 w-2/6 bg-pri-white border-0 border-transparent rounded-tl-xl rounded-bl-xl">
					{/* Basic `x` button */}
					<button className="self-start m-5" onClick={() => toggle(true)}>
						<svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</button>

					{/* Generic messages to indicate login */}
					<div className="mt-12 mb-8">
						<h1 className="align-center text-center text-6xl mb-6">Welcome back!</h1>
						<p className="align-center text-center text-lg"><Link href="/"><a className="text-hyperlink underline">Learn more</a></Link> about our recent changes!</p>
					</div>

					{/* Actual input fields for logging in */}
					{/* Also includes links to password recovery and switch to sign up */}
					<input className="bg-gray-100 w-5/12 p-3 mb-6 text-pri-black placeholder-pri-black" type="text" placeholder="Stevens E-mail" />
					<div className="w-5/12 mb-6">
						<input className="bg-gray-100 w-full p-3 py-3 text-pri-black placeholder-pri-black" type="text" placeholder="Password" />
						<br />
						<p className="text-sm">Forget something? <Link href="/"><a className="text-hyperlink underline">Click here!</a></Link></p>
					</div>
					<button className="bg-pri-red px-6 py-2 text-lg text-pri-white border rounded-full">Log in</button>
					<p className="mt-20">Oops, haven't signed up? <a className="text-hyperlink underline cursor-pointer" onClick={() => toggle(true, true)}>Sign up here!</a></p>
				</span>

				{/* Side image */}
				<span className="relative h-4/6 w-1/6 flex justify-end border-0 border-transparent rounded-tr-xl rounded-br-xl">
					<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
				</span>
			</div>



			{/* Sign up */}
			<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center" style={{ display: showSignup ? "flex" : "none" }}>
				{/* Dark overlay, clicking on overlay will toggle the model */}
				<a className="fixed h-screen w-screen" onClick={() => toggle(false, true)}>
					<div className="fixed h-screen w-screen bg-pri-black/50"></div>
				</a>

				<span className="relative flex flex-col justify-start items-center h-4/6 w-2/6 bg-pri-white border-0 border-transparent rounded-tl-xl rounded-bl-xl">
					{/* Basic `x` button */}
					<button className="self-start m-5" onClick={() => toggle(false, true)}>
						<svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</button>

					{/* Generic messages to indicate login */}
					<div className="mb-12 w-5/6 flex flex-col">
						<h1 className="align-center text-center text-6xl mb-6">Join our talented community!</h1>
						<p className="align-center text-center font-bold text-lg text-pri-red">As fellow Stevens students, we guarantee you:</p>
						<ol className="align-center text-center">
							<li>1. A fully anonymous space for all users</li>
							<li>2. A community of verified Stevens students</li>
							<li>3. An open-sourced project</li>
						</ol>
					</div>

					{/* Actual input fields for signing up */}
					{/* Also includes switching to log in */}
					<div id="s-pri" className="w-full flex flex-col justify-start items-center"> {/* using id since we're using an event to modify ui. if there is a better way do revise */}
						<input id="s-email" className="bg-gray-100 w-5/12 p-3 mb-6 text-pri-black placeholder-pri-black" type="text" placeholder="Stevens E-mail" />
						<button className="bg-pri-red px-6 py-2 text-lg text-pri-white border rounded-full" onClick={validateemail}>Next</button>
						<p className="mt-20">Already part of our community? <a className="text-hyperlink underline cursor-pointer" onClick={() => toggle(true, true)}>Log in here!</a></p>
					</div>

					{/* TODO: slide-fade in/out animation? */}
					{/* Signup password field */}
					<div id="s-sec" className="w-full hidden flex-col justify-start items-center">
						<input id="s-pass" className="bg-gray-100 w-5/12 p-3 mb-6 text-pri-black placeholder-pri-black" type="password" placeholder="New Password" />
						<input id="s-cpass" className="bg-gray-100 w-5/12 p-3 mb-6 text-pri-black placeholder-pri-black" type="password" placeholder="Confirm Password" />
						<button className="bg-pri-red px-6 py-2 text-lg text-pri-white border rounded-full" onClick={signup}>Next</button>
						<button className="px-6 py-2 text-l text-pri-black" onClick={() => next(true)}>Back</button>
					</div>
				</span>

				{/* Side image */}
				<span className="relative h-4/6 w-1/6 flex justify-end border-0 border-transparent rounded-tr-xl rounded-br-xl">
					<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
				</span>
			</div>
		</>
	)
}