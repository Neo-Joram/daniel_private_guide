import React, { useContext } from "react";
import { Profile, Career, Navmenu } from ".";
import giraffe from "../assets/animals/giraffe_3.jpg";
import { stateContext } from "../stateContext";
// import lion from "../assets/animals/lion_3.jpg";

export default function Header() {
  const { mobile } = useContext(stateContext);
  return (
    <div className={`relative pb-10 ${mobile ? "" : "overflow-hidden"} `}>
      <Navmenu />
      <Profile />
      <Career />
      <img
        src={giraffe}
        alt="giraffe"
        className="absolute top-0 right-0 -z-50"
      />
    </div>
  );
}
