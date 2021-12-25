import Nav from "../components/Nav";

// https://blog.logrocket.com/building-a-fullstack-application-with-next-js-and-firestore-db/
// https://www.youtube.com/watch?v=Sdv3bw2rIuQ
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';

function Account() {
	return (
		<div className="h-full">
			<Nav />
			//dogshit layout for firebase testing, revamp later
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-24 mb-8">Login</h1>
				<form className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl" action="/">
					<input className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email/Username" /><br />
					<input className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl">Submit</button>
				</form>
			</span>
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mt-8 mb-8">Sign Up</h1>
				<form className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl" action="/">
					<input className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Email/Username" /><br />
					<input className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Password" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl">Submit</button>
				</form>
			</span>
		</div>
	)
}

connectAuthEmulator(auth, "http://localhost:3000")
const test = async function(){
	try {
		const cred = await createUserWithEmailAndPassword(auth, "test@gmai.com", "123123");
	}
	catch(e){
		console.log("error: \n" + e);
	}
}
test();

export default Account