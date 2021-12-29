import Nav from "../components/Nav";

// https://blog.logrocket.com/building-a-fullstack-application-with-next-js-and-firestore-db/
// https://www.youtube.com/watch?v=Sdv3bw2rIuQ
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function Account() {
	return (
		<div className="h-full">
			<Nav />
			//bad layout for firebase testing, revamp later
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-24 mb-8">Login</h1>
				<div className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl">
					<input id="l-email" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email/Username" /><br />
					<input id="l-pass" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl" onClick={test2}>Submit</button>
				</div>
			</span>
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-8 mb-8">Sign Up</h1>
				<div className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl">
					<input id="s-email" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email" /><br />
					<input id="s-uname" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Username" /><br />
					<input id="s-pass" className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl" onClick={test}>Submit</button>
				</div>
			</span>
		</div>
	)
}

//uncomment to test backend
/* const test = async function(){
  	console.log("hi");
	try {
		const cred = await createUserWithEmailAndPassword(auth, document.getElementById("s-email").value, document.getElementById("s-pass").value);
		console.log("success!");
		console.log(cred);
	}
	catch(e){
		console.log("error: \n" + e);
	}
}

const test2 = async function(){
	console.log("bye");
	try {
		const cred = await signInWithEmailAndPassword(auth, document.getElementById("l-email").value, document.getElementById("l-pass").value);
		console.log("success!");
		console.log(cred);
	}
	catch(e){
		console.log("error: \n" + e);
	}
} */

//SUCCESSSSSS!!!!!! THE AUTH WORKS IN THE EMULATOR. FINALLY. NO WONDER WHAT WAS WRONG
/* 
*	emulator auth accounts are separate from the actual auth accounts	
*	go to http://localhost:4000/auth to see the emulator accounts
*	connectAuthEmulator connects to the firebase emulator localhost address, not the website localhost
*	starts auth emulator so that the auth can connect to it with connectAuthEmulator
*	$ npm run dev
*	$ firebase emulators:start --only auth
*/

export default Account