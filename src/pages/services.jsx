import React, { useContext } from "react";
import { Navmenu } from "../layout";
import { stateContext } from "../stateContext";
import { Banner } from "../components";

export default function ServicesPage() {
  const { mobile } = useContext(stateContext);
  return (
    <div className={`relative pb-10 ${mobile ? "" : "overflow-hidden"} `}>
      <Navmenu />
      <Banner />
      {/* <img
        src={giraffe}
        alt="giraffe"
        className="absolute top-0 right-0 -z-50"
      /> */}
    </div>
  );
}
