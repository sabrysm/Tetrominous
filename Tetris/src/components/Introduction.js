export default function Introduction(props) {
  return (
    <div className="flex flex-col w-fit justify-center m-10 space-x-2 text-white rounded-md p-9 md:flex-row md:items-center md:mx-auto md:place-content-evenly lg:flex-col">
      <div className="mb-2">
        <h1 className="text-5xl font-bold mb-5 md:text-6xl lg:text-12xl">
          Sabrysm's <span className="text-green-600">Portfolio</span>
        </h1>
        <h3 className="mt-3">
          I am an ECE Student who is passionate about{" "}
          <span className="text-yellow-300 font-semibold">
            Software Engineering{" "}
          </span>
          and currently I am developing my Web development skills.
        </h3>
        <h5>
          below you can find some of the projects I made using{" "}
          <span className="font-semibold text-blue-200">ReactJS</span>.
        </h5>
      </div>
      <div className="flex flex-row justify-center items-center mt-5 space-x-8 md:space-x-0 md:space-y-4 md:flex-col lg:flex-row lg:space-y-0 lg:space-x-6 lg:jusitfy-evenly">
        <button className="h-10 p-3 text-sm flex items-center cursor-pointer rounded-md bg-blue-500 text-white hover:bg-blue-700 md:w-66 md:text-md md:h-10">
          View Projects
        </button>
        <button className="h-10 p-3 text-sm flex items-center cursor-pointer rounded-md bg-blue-500 text-white hover:bg-blue-700 md:w-66 md:text-md md:h-10">
          View Resume
        </button>
      </div>
    </div>
  );
}
