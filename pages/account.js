import Nav from "../components/Nav"

function Account() {
	return (
		<div className="h-full">
			<Nav />
			<span className="flex flex-col h-screen">
				<span className="m-auto">
					<h1 className="text-center text-7xl">Amogus</h1>
				</span>
				<img className="ml-auto mr-auto"
					src="/amogus.png" width="450"></img>
			</span>
		</div>
	)
}

export default Account