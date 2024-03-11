import React, { useContext } from "react";
import { stateContext } from "../stateContext";

export default function Career() {
  const { mobile } = useContext(stateContext);

  return (
    <>
      {mobile ? (
        <div className=""></div>
      ) : (
        <div className={`px-40 `}>
          <div className="py-5 w-full rounded-lg shadow-xl flex justify-between bg-green-800/40">
            <div className="h-32 w-1/4 border-r-2 uppercase text-3xl flex items-center justify-center font-bold text-white">
              My Career
            </div>
          </div>
        </div>
      )}
    </>
  );
}
