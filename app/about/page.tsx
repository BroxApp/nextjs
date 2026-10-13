import Link from "next/link";

export default function About (){
    return (
        <div id="about" className="py-10 w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-200">Its me Ali Reza. I am a web developer</h1>
            <p className="text-gray-400 text-center mb-10">I am a web developer with a passion for creating beautiful and functional websites. I am a quick learner and I am always looking to improve my skills.</p>
            <p className="text-gray-400 text-center mb-10">I am a quick learner and I am always looking to improve my skills.</p>
            <p className="text-gray-400 text-center mb-10">I am a quick learner and I am always looking to improve my skills.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Project 1</h2>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <Link href="/shopping">
                        <button className="bg-amber-500 text-white px-4 py-2 rounded-md mt-1.5 hover:bg-amber-600 transition-all duration-300">View Project</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
