import Link from "next/link"
import Image from "next/image"

import Searchbar from "../components/Searchbar"

function Nav() {
	return (
		<div className="fixed flex justify-between items-center h-auto w-full bg-pri-white">
			<Link href="/">
				<a>
					<div className="px-6 py-2 float-left flex items-center justify-center hover:bg-dark-red">
						<Image src={"/atillalogo.png"} alt="atilla" width={70} height={70} />
						<p className="font-quicksand font-bold text-3xl text-pri-red pl-4">ste</p>
						<p className="font-quicksand font-bold text-3xl">forums</p>
					</div>
				</a>
			</Link>

			<div className="flex justify-center items-center w-1/2">
				<Searchbar />
			</div>

			<Link href="/account">
				<a className="text-pri-white">
					<div className="px-6 py-2 float-right hover:bg-dark-red hover:underline">
						<svg className="h-16 w-16 inline mr-2 fill-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
						</svg>
						<span className="text-pri-black">Account Name</span>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default Nav