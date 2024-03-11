import React, { useContext } from "react";
import { stateContext } from "../stateContext";
import { MdFacebook, MdMail } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const { laptop } = useContext(stateContext);

  const social = [
    {
      label: "facebook",
      link: "",
      icon: <MdFacebook className="text-2xl text-blue-500" />,
    },
    {
      label: "instagram",
      link: "",
      icon: <FaInstagram className="text-2xl text-orange-300" />,
    },
    {
      label: "whatsapp",
      link: "",
      icon: <FaWhatsapp className="text-2xl text-green-600" />,
    },
    {
      label: "linkedin",
      link: "",
      icon: <FaLinkedin className="text-2xl text-blue-500" />,
    },
    { label: "email", link: "", icon: <MdMail className="text-2xl" /> },
  ];

  return (
    <div
      className={`${
        laptop ? "px-40" : "px-80"
      }  py-14 bg-orange-200 bg-opacity-10`}
    >
      <div className="w-full text-center font-semibold text-4xl pb-10">
        Contact Us
      </div>
      <div className="grid grid-cols-2 gap-28 items-center">
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl px-4 underline font-semibold text-gray-700">
            Get in touch
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
            quam? Eos nostrum enim cumque adipisci ipsam! Suscipit eos a,
            aliquam, sequi repellendus, modi ab exercitationem quam assumenda
            ratione fugiat qui.
          </p>
          <div className="flex items-center gap-3">
            {social.map((social, index) => (
              <a
                href={social.link}
                key={index}
                className="hover:animate-pulse hover:border-orange-400 p-2 border-2 rounded-full"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="grid">
            <span>
              Tel:{" "}
              <a href="tel:+250782555259" className="text-blue-600">
                +250 782 555 259
              </a>
            </span>
            <span>
              Email:{" "}
              <a href="mailto:neojoram12@gmail.com" className="text-blue-600">
                neojoram12@gmail.com
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="capitalize text-xl font-semibold text-gray-700">
            Send a message
          </span>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              id="email"
              placeholder="Your email..."
              className="px-5 py-2 rounded-xl border outline-none"
            />
            <input
              type="text"
              id="subject"
              placeholder="Subject..."
              className="px-5 py-2 rounded-xl border outline-none"
            />
            <textarea
              id="message"
              rows="4"
              placeholder="Your message..."
              className="px-5 py-2 rounded-xl border outline-none resize-none"
            ></textarea>
            <button className="border px-4 py-2 bg-orange-300 rounded-xl">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
