import React, { useContext } from "react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { stateContext } from "../stateContext";

export default function Services() {
  const { laptop } = useContext(stateContext);

  const services = [
    {
      title: "Hotel Reservation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat repudiandae iste debitis sed alias optio ad nihil saepe explicabo.",
      icon: <FaHotel className="text-4xl" />,
    },
    {
      title: "Private Guided Visit",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat repudiandae iste debitis sed alias optio ad nihil saepe explicabo, temporibus eligendi cumque ipsam aspernatur ipsa consequatur vel incidunt officia molestias.",
      main: true,
      icon: <FaPersonWalkingLuggage className="text-5xl text-orange-300" />,
    },
    {
      title: "Guide training and Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat repudiandae iste debitis sed alias optio ad nihil saepe explicabo.",
      icon: <FaChalkboardTeacher className="text-4xl" />,
    },
  ];

  return (
    <div
      className={`${
        laptop ? "px-40" : "px-60"
      }  py-14 bg-green-800 bg-opacity-25`}
    >
      <div className="w-full text-center font-semibold text-4xl pb-10">
        Services
      </div>

      <div className="flex items-end gap-10">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className={`${
              service.main && "bg-green-800 bg-opacity-60"
            } w-1/3 py-10 px-5 rounded-lg shadow-2xl`}
          >
            <div className={` w-full flex items-center justify-center`}>
              {service.icon}
            </div>
            <div
              className={`${
                service.main && "text-white"
              } text-center w-full font-semibold text-2xl`}
            >
              {service.title}
            </div>
            <p
              className={`pt-6 text-center ${
                service.main ? "text-white line-clamp-4" : "line-clamp-2"
              }`}
            >
              {service.content}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center pt-10">
        <span className="px-5 py-2 bg-green-800 bg-opacity-60 font-semibold rounded-full float-end hover:bg-green-700 text-white">
          More Services
        </span>
      </div>
    </div>
  );
}
