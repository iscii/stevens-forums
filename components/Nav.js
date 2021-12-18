import Link from "next/link"

import Searchbar from "../components/Searchbar"

function Nav() {
	return (
		<div className="fixed flex justify-between items-center h-auto w-full bg-pri-red">

			<Link href="/">
				<a>
					<div className="px-6 py-2 float-left hover:bg-dark-red">
						<svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
						</svg>
					</div>
				</a>
			</Link>

			<div className="flex justify-center items-center w-1/2">
				<Searchbar />
			</div>

			<Link href="/account">
				<a className="text-pri-white">
					<div className="px-6 py-2 float-right hover:bg-dark-red hover:underline">
						<svg className="h-12 w-12 inline mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
						</svg>
						<span>Account Name</span>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default Nav