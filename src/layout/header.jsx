import React from "react";
import { Profile, Career, Navmenu } from ".";
import giraffe from "../assets/animals/giraffe_3.jpg";
// import lion from "../assets/animals/lion_3.jpg";

export default function Header() {
  return (
    <div className={`relative pb-14 overflow-hidden`}>
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
