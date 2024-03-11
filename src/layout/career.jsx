import React, { useContext } from "react";
import { stateContext } from "../stateContext";

export default function Career() {
  const { mobile } = useContext(stateContext);

  return (
    <>
      {mobile ? (
        <div className=""></div>
      ) : (
        <div className={`px-40 mt-12`}>
          <div className="py-4 w-full rounded-lg shadow-xl flex justify-between bg-blue-300/30">
            <div className="h-24 w-1/4 border-r-2 uppercase text-3xl flex items-center justify-center font-bold text-white">
              My Career
            </div>
          </div>
        </div>
      )}
    </>
  );
}
