import Nav from "../components/Nav"

function CreatePost() {
	return (
		<div className="h-screen w-screen flex justify-center">
			<Nav />
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mb-16">Create Post</h1>
				<form className="w-3/6 h-3/6 bg-pri-gray border border-pri-gray rounded-3xl" action="/">
					<input className="mx-6 mt-6 p-2 w-2/6 border border-pri-white text-lg rounded-lg" type="text" placeholder="Title" /><br />
					<input className="mx-6 mt-6 p-2 w-4/6 pr-72 pb-64 border border-pri-white text-lg border-gray-300 rounded-lg" type="text" placeholder="Text" /><br />
					<button className="mx-6 my-6 px-4 py-2 text-pri-white text-lg bg-pri-red border border-pri-red rounded-2xl">Submit</button>
				</form>
			</span>
		</div>
	)
}

export default CreatePost