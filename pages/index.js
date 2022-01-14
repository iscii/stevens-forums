import Head from "next/head";
import Link from "next/link"

import Nav from "../components/Nav.js";
import Notecard from "../components/Notecard.js";
import Sidebar from "../components/Sidebar";

export default function Home() {
	return (
		<div className="flex flex-col justify-start">

			{/*
				Change title and favicon (browser icon) here
				Also using Quicksand font as default font, fallback on sans-serif!
			*/}
			<Head>
				<title>I think you may have dropped your crown 👑</title>
				<link rel="shortcut icon" href="/atillalogo.png" type="image/x-icon" /> {/* main icon */}
				<style>
					@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');
				</style>
			</Head>

			{/* Global navigation bar */}
			<Nav />

			{/* Creates screen sized div for home page */}
			<span className="flex min-h-screen h-full bg-pink-100">

				{/* Sidebar for sorting posts */}
				<div className="absolute mt-52 ml-12">
					<Sidebar />
				</div>

				{/* Container for header and posts */}
				<span className="h-5/6 w-5/12	 m-auto mt-36">

					{/* Header with welcome message and create post button */}
					<div className="flex justify-between my-4">
						<span className="text-2xl font-quicksand font-bold flex align-center">
							<svg className="h-8 w-8 mr-2 fill-pri-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
							Welcome back!
						</span>
						<Link href="/create_post">
							<a className="text-xl font-quicksand font-bold bg-pri-white border border-pri-white drop-shadow-lg rounded-3xl px-2 py-1">Create Post</a>
						</Link>
					</div>

					{/* Notecard container */}
					<div className="w-auto h-auto border border-solid border-gray-200">
						<Notecard />
						<Notecard />
						<Notecard />
						<Notecard />
					</div>

					{/* Simple footer to denote no more posts */}
					<div className="flex items-center justify-center mt-32 mb-20 text-3xl">
						ඞ That's all for now. Come back later!
					</div>

				</span>
			</span>
		</div>
	);
}
