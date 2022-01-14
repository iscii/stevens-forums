import Image from "next/image"

export default function Signup() {
	return (
		<div className="flex justify-center items-center h-screen w-screen bg-pri-black/50">
			<span className="relative flex justify-center items-center h-3/5 w-2/6 bg-pri-white border border-transparent rounded-tl-xl rounded-bl-xl">
				<h1>Join our talented community!</h1>
			</span>
			<span className="relative h-3/5 w-1/6 flex justify-end border border-transparent rounded-tr-xl rounded-br-xl">
				<Image className="border border-transparent rounded-tr-xl rounded-br-xl" src="/chrombubble.jpeg" layout="fill" objectFit="cover" />
			</span>
		</div>
	)
}