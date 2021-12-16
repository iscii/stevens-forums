import Link from "next/link"

import Searchbar from "../components/Searchbar"

function Nav() {
	return (
		<div className="fixed flex justify-between items-center h-auto w-full bg-pri-red">
			<div className="px-6 py-2 float-left">
				<Link href="/">
					<a>
						<svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</a>
				</Link>
			</div>

			<div className="flex justify-center items-center w-1/2">
				<Searchbar />
			</div>

			<div className="px-6 py-2 float-right">
				<Link href="/account">
					<a>
						<svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Nav