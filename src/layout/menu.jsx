import React, { useContext, useEffect, useState } from "react";
import { IoLogoOctocat } from "react-icons/io";
import {
  MdBook,
  MdExplore,
  MdFacebook,
  MdHomeMax,
  MdMail,
  MdMore,
} from "react-icons/md";
import { AiFillApi } from "react-icons/ai";
import {
  FaBars,
  FaChevronDown,
  FaInstagram,
  FaLinkedin,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { stateContext } from "../stateContext";

let previousScrollY = 0;

export default function Navmenu() {
  const { mobile, showMenu, setShowMenu } = useContext(stateContext);
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(0);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const items = [
    { label: "Home", key: "home", icon: <MdHomeMax className="text-xl" /> },
    {
      label: "Services",
      key: "services",
      icon: <AiFillApi className="text-xl" />,
    },
    { label: "About_Me", key: "about", icon: <MdBook className="text-xl" /> },
    {
      label: "Eplore",
      icon: <MdExplore className="text-xl" />,
      key: "explore",
      children: [
        { label: "Destinations", icon: "" },
        { label: "Explore places", icon: "" },
        { label: "Videos", icon: "" },
      ],
    },
    {
      label: "More",
      icon: <MdMore className="text-xl" />,
      key: "more",
      children: [
        { label: "FAQs", icon: "" },
        { label: "Packages", icon: "" },
      ],
    },
  ];

  const social = [
    { label: "facebook", link: "", icon: <MdFacebook className="text-2xl" /> },
    {
      label: "instagram",
      link: "",
      icon: <FaInstagram className="text-2xl" />,
    },
    { label: "whatsapp", link: "", icon: <FaWhatsapp className="text-2xl" /> },
    { label: "linkedin", link: "", icon: <FaLinkedin className="text-2xl" /> },
    { label: "email", link: "", icon: <MdMail className="text-2xl" /> },
  ];

  const handleScroll = () => {
    const scrollY = window.scrollY;

    const isScrollingUp = scrollY < previousScrollY;

    setIsNavbarFixed(scrollY > 0 && !isScrollingUp);
    previousScrollY = scrollY;
  };

  useEffect(() => {
    const onScrollListener = window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", onScrollListener);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {mobile ? (
        <div className="flex items-center justify-between py-4 px-5">
          <IoLogoOctocat className="text-5xl" />
          {showMenu ? (
            <FaTimes className="text-2xl" onClick={() => setShowMenu(false)} />
          ) : (
            <FaBars className="text-2xl" onClick={() => setShowMenu(true)} />
          )}

          <div
            className={`${
              showMenu ? "block" : "hidden"
            } absolute z-50 top-20 right-0 transition-all duration-300 bg-[whitesmoke] w-[80%] py-6 px-5 rounded-bl`}
          >
            <div className="flex flex-col gap-4">
              {items.map((menu, index) => (
                <a href={"#" + menu.label} key={index} className="flex gap-2">
                  {menu.icon}
                  {menu.label}
                </a>
              ))}
            </div>
            <div className="underline italic my-4">Social links</div>

            <div className="flex flex-col gap-4">
              {social.map((social, index) => (
                <a href={social.link} key={index} className="flex gap-2">
                  {social.icon} {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`shadow flex items-center justify-between py-6 px-20 ${
            isNavbarFixed ? "fixed w-full bg-blue-200/90 " : ""
          }`}
        >
          <div>
            <IoLogoOctocat className="text-5xl" />
          </div>
          <ul className="flex items-center gap-2">
            {items.map((menu, index) => (
              <li
                key={index}
                onMouseEnter={() => setCurrent(index)}
                onMouseLeave={() => setCurrent(null)}
                className={` list-none leading-10`}
              >
                {menu.children ? (
                  <div
                    className={`px-3 flex items-center gap-1 cursor-pointer ${
                      active === index && "text-orange-500 border-b-[1px]"
                    }`}
                  >
                    <span>{menu.label}</span>
                    <FaChevronDown className="ml-1" />
                  </div>
                ) : (
                  <a
                    href={"#" + menu.label}
                    onClick={() => setActive(index)}
                    className={`px-3 flex items-center gap-1 hover:text-orange-700 ${
                      active === index && "text-orange-500 border-b-[1px]"
                    }`}
                  >
                    {menu.label}
                  </a>
                )}

                {menu.children && current === index && (
                  <ul
                    className={`absolute shadow ${
                      isNavbarFixed ? "bg-green-800 bg-opacity-90" : "bg-white"
                    }`}
                  >
                    {menu.children.map((sub, idx) => (
                      <li
                        onClick={() => setActive(index)}
                        key={idx}
                        className="list-none hover:text-orange-700"
                      >
                        <a
                          href={"#" + sub.label}
                          className={`px-3 pt-1 flex items-center gap-1`}
                        >
                          {sub.icon} {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-1 border rounded-full px-4 pt-2 pb-1 cursor-pointer hover:border-orange-400 hover:animate-pulse">
            <MdMail className="text-xl" /> Mail Me
          </div>
          <div className="fixed top-1/3 right-14">
            <div className="flex flex-col items-center gap-3">
              <div className="w-[1px] h-6 bg-black"></div>
              {social.map((social, index) => (
                <a
                  href={social.link}
                  key={index}
                  className="hover:animate-pulse hover:border-orange-400 p-2 border-2 rounded-full text-black"
                >
                  {social.icon}
                </a>
              ))}
              <div className="w-[1px] h-6 bg-black"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
