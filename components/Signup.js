import Image from "next/image"
import React, { useState } from 'react'

export default function Signup() {
	const [showSignup, setShowSignup] = useState(false);
	function toggleSignup() {
		setShowSignup(!showSignup);
	}

	return (
		<>
			<button className="w-24 py-1 px-3 ml-4 text-pri-white bg-pri-red font-bold border-2 border-pri-red rounded-3xl" onClick={toggleSignup}>Sign up</button>


			<div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center" style={{ display: showSignup ? "flex" : "none" }}>
				<div className="flex justify-center items-center h-screen w-screen bg-pri-black/50">
					<span className="relative flex flex-col justify-center items-center h-3/5 w-2/6 bg-pri-white border border-transparent rounded-tl-xl rounded-bl-xl">
						<h1>Join our talented community!</h1>
						<input className="bg-gray-100 px-2 py-2 text-pri-black placeholder-pri-black" type="text" placeholder="Stevens E-mail" />
					</span>
					<span className="relative h-3/5 w-1/6 flex justify-end border border-transparent rounded-tr-xl rounded-br-xl">
						<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" priority />
					</span>
				</div>
			</div>
		</>
	)
}