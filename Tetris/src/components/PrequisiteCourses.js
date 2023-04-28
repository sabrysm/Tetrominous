import React, { useState, useRef } from "react";
import { topologicalSort } from "../TopologicalSort";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const PrequisiteCourses = () => {
  const [course, setCourse] = useState("");
  const [topoSort, setTopoSort] = useState({
    path: [],
    prevReq: [],
    opens: [],
  });
  const inputRef = useRef(null);
  const el = topoSort.path.map((item) => {
    return item === topoSort.path[0] ? (
      <div
        key={item.toString()}
        className="rounded-md bg-green-443 text-white p-2 border-1 border-black"
      >
        {item}
      </div>
    ) : (
      <div
        key={item.toString()}
        className="text-white font-semibold flex justify-center items-center"
      >
        <FontAwesomeIcon icon={faArrowRight} />
        <div className="rounded-md bg-green-443 text-white p-2 border-1 border-black">
          {item}
        </div>
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCourse(inputRef.current.value);
    setTopoSort(new topologicalSort(course.toUpperCase()));
  };

  return (
    <div className="px-2 pb-1 m-16 bg-blue-400 text-white rounded-md border-2 border-black font-semibold flex flex-col justify-start items-start space-x-3">
      <div className="border-2 my-4 border-solid border-black rounded-xl">
        <img
          className="object-cover h-122 w-340 border-solid border-black rounded-xl"
          src={require("../img/Prequisites.png")}
          alt="ECE_Prerequisite"
        />
      </div>
      <form
        className="flex justify-flex-start space-x-3"
        onSubmit={handleSubmit}
      >
        <input
          className="rounded-md font-semibold text-black p-1"
          type="text"
          id="course"
          ref={inputRef}
          value={course}
          placeholder="Write the course code..."
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          className="bg-slate-400 border-black rounded-md bg-slate-500 text-white hover:text-green-300 border-1 border-solid p-1 cursor-pointer"
          type="submit"
          value="Show"
        />
      </form>
      <div className="mt-5 flex flex-col">
        <p className="text-red-600">
          You must take these courses in the following order
        </p>
        <div className="flex mb-12">
          {topoSort.length === 1
            ? `${course.toUpperCase()} doesn't have any prequisite`
            : el}
        </div>
        <h3>
          <span className="text-red-600 font-md">{course.toUpperCase()}</span>{" "}
          opens the following courses:
        </h3>
        <div className="flex">
          {topoSort.opens.length > 0 ? topoSort.opens.join(", ") : "None"}
        </div>
        <h3>
          <span className="text-red-600 font-md">{course.toUpperCase()}</span>{" "}
          depends on these courses:
        </h3>
        <div className="flex">
          {topoSort.prevReq.length > 0 ? topoSort.prevReq.join(", ") : "None"}
        </div>
      </div>
    </div>
  );
};

export default PrequisiteCourses;
