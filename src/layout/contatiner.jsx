import React from "react";
import { Contact, Services, Story, Videos } from "../components";

export default function Container() {
  return (
    <div>
      <Services />
      <Videos />
      <Story />
      <Contact />
    </div>
  );
}
