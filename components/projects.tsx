import Link from "next/link";

function Projects() {
  return (
    <div id="projects" className="py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-200">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-amber-50 p-6 rounded-lg shadow-md">
          <Link href="/shopping">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md mt-1.5 hover:bg-amber-600 transition-all duration-300">
              View Project
            </button>
          </Link>
        </div>
        <div className="bg-amber-50 p-6 rounded-lg shadow-md">
          <Link href="/shopping">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md mt-1.5 hover:bg-amber-600 transition-all duration-300">
              View Project
            </button>
          </Link>
        </div>
        <div className="bg-amber-50 p-6 rounded-lg shadow-md">
          <Link href="/shopping">
            <h2 className="text-2xl font-bold mb-4">Project 1</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
            <button className="bg-amber-500 text-white px-4 py-2 rounded-md mt-1.5 hover:bg-amber-600 transition-all duration-300">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
