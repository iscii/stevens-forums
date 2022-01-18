import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'

{/* 
A component that displays a `log in` and `sign up` button that toggles respsective models
Both sign up and login models are implemented together for switching purposes (see function swapToggle())
*/}
export default function SignupLogin() {
	{/* Needs optimization, revisit! Toggle for each model defined separately; possibly merge into one toggle function */ }
	{/* Toggle function for models */ }
	const [showLogin, setShowLogin] = useState(false);
	function toggleLogin() {
		setShowLogin(!showLogin);
	}
	const [showSignup, setShowSignup] = useState(false);
	function toggleSignup() {
		setShowSignup(!showSignup);
	}

	{/* Switch function for models */ }
	function swapToggle() {
		setShowLogin(!showLogin);
		setShowSignup(!showSignup);
	}

	return (
		<>
			<button className="w-24 py-1 px-3 text-lg text-pri-red bg-pri-white font-bold border border-pri-red rounded-full" onClick={toggleLogin}>Log In</button>
			<button className="w-24 py-1 px-3 ml-4 text-lg text-pri-white bg-pri-red font-bold border border-pri-red rounded-full" onClick={toggleSignup}>Sign up</button>

			{/* Log in */}
			<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center" style={{ display: showLogin ? "flex" : "none" }}>
				{/* Dark overlay, clicking on overlay will toggle the model */}
				<a className="fixed h-screen w-screen" onClick={toggleLogin}>
					<div className="fixed h-screen w-screen bg-pri-black/50"></div>
				</a>

				{/* Container for the model */}
				<span className="relative flex flex-col justify-start items-center h-4/6 w-2/6 bg-pri-white border-0 border-transparent rounded-tl-xl rounded-bl-xl">
					{/* Basic `x` button */}
					<button className="self-start m-5" onClick={toggleLogin}>
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
					<p className="mt-20">Oops, haven't signed up? <a className="text-hyperlink underline cursor-pointer" onClick={swapToggle}>Sign up here!</a></p>
				</span>

				{/* Side image */}
				<span className="relative h-4/6 w-1/6 flex justify-end border-0 border-transparent rounded-tr-xl rounded-br-xl">
					<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
				</span>
			</div>



			{/* Sign up */}
			<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center" style={{ display: showSignup ? "flex" : "none" }}>
				{/* Dark overlay, clicking on overlay will toggle the model */}
				<a className="fixed h-screen w-screen" onClick={toggleSignup}>
					<div className="fixed h-screen w-screen bg-pri-black/50"></div>
				</a>

				<span className="relative flex flex-col justify-start items-center h-4/6 w-2/6 bg-pri-white border-0 border-transparent rounded-tl-xl rounded-bl-xl">
					{/* Basic `x` button */}
					<button className="self-start m-5" onClick={toggleSignup}>
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
					<input id="s-email" className="bg-gray-100 w-5/12 p-3 mb-6 text-pri-black placeholder-pri-black" type="text" placeholder="Stevens E-mail" />
					<button className="bg-pri-red px-6 py-2 text-lg text-pri-white border rounded-full" onClick={validiateemail(this.value)}>Sign up</button>
					<p className="mt-20">Already part of our community? <a className="text-hyperlink underline cursor-pointer" onClick={swapToggle}>Log in here!</a></p>
				</span>

				{/* Side image */}
				<span className="relative h-4/6 w-1/6 flex justify-end border-0 border-transparent rounded-tr-xl rounded-br-xl">
					<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
				</span>
			</div>
		</>
	)
}