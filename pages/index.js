import Head from "next/head";
import Link from "next/link"

import Nav from "../components/Nav.js";
import Notecard from "../components/Notecard.js";

export default function Home() {
	return (
		<div className="flex flex-col justify-start">
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
					<Link href="/create_post">
						<a className="text-4xl">
							Create Post
						</a>
					</Link>
					<Notecard />
				</span>
			</span>
		</div>
	);
}
