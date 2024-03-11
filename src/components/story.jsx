import React, { useContext } from "react";
import { stateContext } from "../stateContext";
import fire from "../assets/forest-tree.jpeg";

export default function Story() {
  const { laptop } = useContext(stateContext);

  return (
    <div
      className={`${
        laptop ? "px-40 py-14" : "px-64 py-24"
      }  bg-green-700 bg-opacity-20`}
    >
      <div className="flex items-start gap-10">
        <img src={fire} alt={"me"} className="w-1/2 rounded-lg" />
        <div className="w-full pt-5">
          <div className="w-full text-center font-semibold text-4xl pb-10">
            About me
          </div>
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
          <div className="p-4 w-full">
            <span className="px-5 py-2 bg-orange-300 font-semibold rounded-full float-end hover:border hover:bg-orange-400 hover:text-white">
              Continue Reading
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
