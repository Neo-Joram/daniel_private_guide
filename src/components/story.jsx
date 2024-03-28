import React, { useContext } from "react";
import { stateContext } from "../stateContext";
import fire from "../assets/man.jpg";

export default function Story() {
  const { mobile, laptop } = useContext(stateContext);

  return (
    <div
      className={`${
        laptop ? "px-40 py-14" : mobile ? "px-4" : "px-64 py-24"
      } py-14 bg-green-700 bg-opacity-20`}
    >
      {!mobile ? null : (
        <div className="w-full text-center font-semibold text-4xl pb-6">
          About me
        </div>
      )}
      <div
        className={`${
          mobile
            ? "flex flex-col gap-2 text-justify"
            : "flex items-start gap-10"
        }`}
      >
        <img
          src={fire}
          alt={"me"}
          className={`${mobile ? "px-5" : "w-1/2"} rounded-lg`}
        />
        <div className="w-full pt-5">
          {mobile ? null : (
            <div className="w-full text-center font-semibold text-4xl pb-10">
              About me
            </div>
          )}
          <div>
            <p className="font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
              possimus ea iusto consequuntur quos qui quaerat provident facilis!
              Modi reiciendis neque corrupti quae nihil explicabo numquam porro
              inventore, reprehenderit fugiat?
            </p>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex
              quaerat, corporis corrupti voluptatum fugit soluta aspernatur
              tempora reiciendis temporibus sit optio nemo maiores, libero
              ducimus non veritatis molestias explicabo!
            </p>
          </div>
          <div className="p-4 w-full flex items-center justify-center">
            <span
              className={`px-5 py-2 bg-orange-300 font-semibold rounded-full hover:border hover:bg-orange-400 hover:text-white`}
            >
              Continue Reading
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
