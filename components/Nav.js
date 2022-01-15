import Link from "next/link"
import Image from "next/image"
import React, { useState } from 'react'

import SignupLogin from "../components/SignupLogin"

function Nav() {
	return (
		<div className="fixed flex justify-between items-center h-auto w-full bg-pri-white z-10">
			{/* Our DuckForums logo. The duck's name is Atilla, Steven's school mascot :D click on his face to go to home page */}
			<Link href="/">
				<a>
					<div className="px-6 py-2 float-left flex items-center justify-center hover:bg-dark-red">
						<Image src={"/atillalogo.png"} alt="atilla" width={70} height={70} />
						<p className="font-bold text-3xl text-pri-red pl-4">duck</p>
						<p className="font-bold text-3xl">forums</p>
					</div>
				</a>
			</Link>

			{/* Search bar */}
			<div className="flex justify-center items-center w-1/2">
				<form action="/" className="w-4/6 h-12 flex justify-end items-center">
					<input type="text" placeholder="Search..." className="w-full h-full border bg-pri-gray border-pri-gray rounded-3xl px-3 focus:outline-none focus:border-dark-gray" />
					<button type="submit" value="Submit" className="absolute ml-4 mr-1">
						<svg className="h-10 w-10 p-2 hover:bg-sub-gray hover:border-0 hover:border-sub-gray hover:rounded-lg stroke-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</button>
				</form>
			</div>

			<div className="px-6 py-2 float-right hover:bg-dark-red hover:underline">
				{/* Sign up and log in buttons built into one component */}
				<SignupLogin />

				{/* Account profile pic and link to account page */}
				<Link href="/account">
					<a className="text-pri-white cursor-pointer">
						{/* <span className="text-pri-black text-lg">Name#0000</span> */}
						<svg className="h-16 w-16 inline ml-4 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
						</svg>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Nav