function Searchbar() {
	return (
		<form action="/" className="w-4/6 h-12 flex justify-end items-center">
			<input type="text" placeholder="Search..." className="w-full h-full border bg-pri-gray border-pri-gray rounded-lg px-3 focus:outline-none focus:border-dark-gray" />
			<button type="submit" value="Submit" className="absolute ml-4 mr-1">
				<svg className="h-10 w-10 p-2 hover:bg-sub-gray hover:border-0 hover:border-sub-gray hover:rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
		</form>
	)
}

export default Searchbar