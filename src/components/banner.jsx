import React, { useContext } from "react";
import { stateContext } from "../stateContext";

export default function Banner() {
  const { mobile } = useContext(stateContext);

  return (
    <div
      className={`${
        mobile ? "flex flex-col px-10" : "flex justify-center h-[45vh] px-40"
      }`}
    >
      <div
        className={`${
          mobile ? "w-full h-full" : "w-full h-full"
        } flex flex-col items-center justify-center bg-gray-50`}
      >
        <h3
          className={`names ${
            mobile ? "text-5xl" : " text-6xl"
          } text-gray-700 font-display font-bold`}
        >
          Our Services
        </h3>
        <p>
          Welcome to my personal website. Here, you'll learn more about my work
        </p>
      </div>
    </div>
  );
}
