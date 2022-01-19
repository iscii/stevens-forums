/*! REDUNDANT FILE !*/

import Nav from "../components/Nav";

import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

function Account() {
	return (
		<div className="h-full">
			<Nav />
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-24 mb-8">Login</h1>
				<div className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl">
					<input id="l-email" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email/Username" /><br />
					<input id="l-pass" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl" onClick={login}>Submit</button>
				</div>
			</span>
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-8 mb-8">Sign Up</h1>
				<div className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl">
					<input id="s-email" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email" /><br />
					<input id="s-uname" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Username" /><br />
					<input id="s-pass" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl" onClick={signup}>Submit</button>
				</div>
			</span>
		</div>
	)
}



export default Account