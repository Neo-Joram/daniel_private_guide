import React, { useContext } from "react";
import { Navmenu } from "../layout";
import { stateContext } from "../stateContext";

export default function AboutMePage() {
  const { mobile } = useContext(stateContext);
  return (
    <div className={`relative pb-10 ${mobile ? "" : "overflow-hidden"} `}>
      <Navmenu />
      {/* <img
        src={giraffe}
        alt="giraffe"
        className="absolute top-0 right-0 -z-50"
      /> */}
    </div>
  );
}
