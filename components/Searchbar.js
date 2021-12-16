function Searchbar() {
	return (
		<form action="/" className="w-4/6 h-12 flex justify-end items-center">
			<input type="text" placeholder="Search..." className="w-full h-full border bg-gray-100 border-gray-400 rounded-lg px-3 hover:border-black focus:outline-none focus:border-gray-600" />
			<button type="submit" value="Submit" className="absolute mx-4">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>
		</form>
	)
}

export default Searchbar