import React from "react";
import { Profile, Career, Navmenu } from ".";
// import lion from "../assets/animals/lion_3.jpg";

export default function Header() {
  return (
    <div className={`relative pb-14 `}>
      <Navmenu />
      <Profile />
      <Career />
    </div>
  );
}
