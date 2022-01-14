import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'

import Searchbar from "../components/Searchbar"
import Signup from "../components/Signup"

function Nav() {
	{/* Stolen from stackoverflow */ }
	const [showMe, setShowMe] = useState(false);
	function toggle() {
		setShowMe(!showMe);
	}

	return (
		<div className="fixed flex justify-between items-center h-auto w-full bg-pri-white z-10">
			<Link href="/">
				<a>
					<div className="px-6 py-2 float-left flex items-center justify-center hover:bg-dark-red">
						<Image src={"/atillalogo.png"} alt="atilla" width={70} height={70} />
						<p className="font-quicksand font-bold text-3xl text-pri-red pl-4">duck</p>
						<p className="font-quicksand font-bold text-3xl">forums</p>
					</div>
				</a>
			</Link>

			<div className="flex justify-center items-center w-1/2">
				<Searchbar />
			</div>

			<button onClick={toggle}>Sign up</button>

			<div className="fixed top-0 w-screen h-screen flex justify-center items-center" style={{ display: showMe ? "flex" : "none" }}>
				<Signup />
			</div>

			<Link href="/account">
				<a className="text-pri-white">
					<div className="px-6 py-2 float-right hover:bg-dark-red hover:underline">
						<span className="font-quicksand text-pri-black text-lg">Name#0000</span>
						<svg className="h-16 w-16 inline ml-4 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
						</svg>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default Nav