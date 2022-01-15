function Notecard() {
	return (
		<div className="w-full h-min flex bg-pri-white font-quicksand">
			<div className="flex flex-col">
				<div className="w-full px-8 leading-6">
					<p className="text-gray-300 py-4">Posted 1 hour ago</p>
					<div className="w-min h-min flex">
						<button className="mr-4"><span className="px-3 py-1 text-pri-white bg-pri-red border rounded-3xl border-pri-red">Tag</span></button>
						<button className="mr-4"><span className="px-3 py-1 text-pri-white bg-pri-red border rounded-3xl border-pri-red">Tag</span></button>
					</div>
					<h1 className="font-bold text-2xl my-2">TL;DR: Stevens Tech has below-average dining hall <food></food></h1>
					<p className="text-base text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
						molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.</p>
				</div>
				<div className="mt-4 w-full px-8 pb-6 flex">
					<button className="mr-6">
						<span className="flex text-gray-300">
							<svg className="fill-gray-300 h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
							</svg>
							1 Comment
						</span>
					</button>
					<button>
						<span className="flex text-gray-300">
							<svg className="fill-gray-300 h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
								<path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
							</svg>
							Share
						</span>
					</button>
				</div>
			</div>
			<div className="w-1/6 min-h-full text-pri-white text-lg flex flex-col justify-center float-right items-center bg-pri-red">
				<button>
					<svg className="h-8 w-8 fill-pri-white my-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
					</svg>
				</button>
				30
				<button>
					<svg className="h-8 w-8 fill-pri-white my-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
					</svg>
				</button>
			</div>
		</div>
	)
}

export default Notecard