function Notecard() {
	return (
		<div className="w-full h-min bg-mountbatten">
			<div className="w-full p-8 leading-10">
				<div className="w-min h-min">
					<span className="px-2 py-1 mr-4 bg-red-200 border rounded-lg border-pri-red">Tag</span>
					<span className="px-2 py-1 bg-red-200 border rounded-lg border-pri-red">Tag</span>
				</div>
				<h1 className="text-4xl my-2">Title</h1>
				<p>Description with descriptions.</p>
			</div>
		</div>
	)
}

export default Notecard