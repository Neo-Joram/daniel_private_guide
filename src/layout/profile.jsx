import React, { useContext } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { stateContext } from "../stateContext";

export default function Profile() {
  const { mobile } = useContext(stateContext);

  return (
    <div
      className={`${
        mobile ? "flex flex-col px-10" : "flex justify-between h-[60vh] px-40"
      }`}
    >
      <div
        className={`${
          mobile ? "w-full py-14 gap-6" : "w-1/2 pt-32 gap-8"
        } flex flex-col`}
      >
        <h3
          className={`names ${
            mobile ? "text-5xl" : " text-6xl"
          } text-gray-700 font-display font-bold`}
        >
          Daniel the private guide
        </h3>
        <p>
          Welcome to my personal website. Here, you'll learn more about my work
        </p>
        <div className="flex items-center justify-between bg-orange-200 rounded-full p-2 pl-4 w-48">
          <span className="text-gray-700 font-semibold">Watch my video</span>
          <div className="bg-orange-300 p-2 rounded-full">
            <FaPlayCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
