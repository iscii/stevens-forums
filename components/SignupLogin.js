import Image from "next/image"
import React, { useState } from 'react'

export default function Login() {
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
	function switchToSignup() {
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
				<span className="relative flex flex-col justify-start items-center h-4/6 w-2/6 bg-pri-white border border-transparent rounded-tl-xl rounded-bl-xl">
					<button className="self-start m-5" onClick={toggleLogin}>
						<svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</button>
					<h1 className="align-center text-center text-6xl my-12">Welcome back!</h1>
					<input className="bg-gray-100 w-5/12 p-3 mb-6 text-pri-black placeholder-pri-black" type="text" placeholder="Stevens E-mail" />
					<input className="bg-gray-100 w-5/12 p-3 py-3 mb-6 text-pri-black placeholder-pri-black" type="text" placeholder="Password" />
					<button></button>
					<p>Oops, haven't signed up? <a className="text-hyperlink underline cursor-pointer" onClick={switchToSignup}>Sign up here!</a></p>
				</span>
				<span className="relative h-4/6 w-1/6 flex justify-end border border-transparent rounded-tr-xl rounded-br-xl">
					<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
				</span>
			</div>

			{/* Sign up */}
			<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center" style={{ display: showSignup ? "flex" : "none" }}>
				{/* Dark overlay, clicking on overlay will toggle the model */}
				<a className="fixed h-screen w-screen" onClick={toggleSignup}>
					<div className="fixed h-screen w-screen bg-pri-black/50"></div>
				</a>

				<span className="relative flex flex-col justify-start items-center h-4/6 w-2/6 bg-pri-white border border-transparent rounded-tl-xl rounded-bl-xl">
					<button className="self-start m-5" onClick={toggleSignup}>
						<svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
						</svg>
					</button>
					<h1 className="align-center text-center text-6xl my-12">Join our talented community!</h1>
					<input className="bg-gray-100 px-2 py-2 mb-4 text-pri-black placeholder-pri-black" type="text" placeholder="Stevens E-mail" />
					<input className="bg-gray-100 px-2 py-2 mb-4 text-pri-black placeholder-pri-black" type="text" placeholder="Password" />
				</span>
				<span className="relative h-4/6 w-1/6 flex justify-end border border-transparent rounded-tr-xl rounded-br-xl">
					<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
				</span>
			</div>
		</>
	)
}