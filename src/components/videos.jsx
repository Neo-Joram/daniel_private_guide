import React, { useContext } from "react";
import { stateContext } from "../stateContext";
import fire from "../assets/forest-tree.jpeg";
import pkgMovie from "../assets/pexels_video.mp4";
import pkgMovie2 from "../assets/video(1080p).mp4";
import ReactPlayer from "react-player";

export default function Videos() {
  const { laptop, mobile } = useContext(stateContext);

  const packages = [
    {
      image: fire,
      video: pkgMovie,
      title: "Visit Rwanda",
      text: "A 10 day experience",
    },
    {
      image: fire,
      video: pkgMovie2,
      title: "Travel Uganda",
      text: "A 20 day experience",
    },
    {
      image: fire,
      video: pkgMovie,
      title: "Explore Tanzania",
      text: "A 12 day experience",
    },
  ];
  return (
    <div
      className={`${
        laptop ? "px-40 py-14" : mobile ? "px-6" : "px-64 py-16"
      } py-14 bg-orange-100 bg-opacity-15`}
    >
      <div className="w-full text-center font-semibold text-4xl pb-10">
        Your Packages
      </div>
      <div className={`grid ${mobile ? "gap-8" : " grid-cols-3 gap-14"}`}>
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`flex flex-col text-center rounded-2xl overflow-hidden`}
          >
            {pkg.video ? (
              <ReactPlayer
                url={pkg.video}
                width={"100%"}
                height={"100%"}
                controls
                loop
              />
            ) : (
              <img
                src={pkg.image}
                alt={`${pkg.title} - A package`}
                className="rounded-2xl"
              />
            )}
            <span className="text-2xl pt-2 font-semibold text-gray-800">
              {pkg.title}
            </span>
            <span>{pkg.text}</span>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center pt-10">
        <span className="px-5 py-2 bg-green-800 bg-opacity-60 font-semibold rounded-full float-end hover:bg-green-700 text-white">
          More Packages
        </span>
      </div>
    </div>
  );
}
