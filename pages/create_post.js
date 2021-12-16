import React, { useEffect, useState } from "react";

import Nav from "../components/Nav"

function CreatePost() {
	return (
		<div className="h-screen w-screen flex justify-center">
			<Nav />
			<span className="h-full w-full flex flex-col items-center justify-center">
				<h1 className="text-4xl mb-16">Create Post</h1>
				<form className="w-3/6 h-3/6 bg-red-300 border border-red-300 rounded-3xl" action="/">
					<input className="mx-6 mt-6 p-2 w-2/6 border border-gray-300 rounded-lg" type="text" placeholder="Title" /><br />
					<input className="mx-6 mt-6 p-2 w-4/6 pr-72 pb-72 border border-gray-300 rounded-lg" type="text" placeholder="Text" /><br />
					<button>Submit</button>
				</form>
			</span>
		</div>
	)
}

export default CreatePost