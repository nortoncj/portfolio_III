import React from "react";
import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full mb-12 lgl:w-[35%] h-[800px] bg-gradient-to-r from-[bodyColor] to-[#fffff0] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-[300px] h-[500px] object-cover rounded-lg ml-8 mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Chris Norton</h3>
        <p className="text-lg font-normal text-stone-800">Web Developer</p>
        <p className="text-base text-stone-500 tracking-wide">
          Let's discuss your next project!
        </p>
        {/* <p className="text-base text-stone-500 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">contact@chrisnortonjr.com</span>
        </p> */}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">
          Follow me on
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/chrisnortonjr/"
            className="bannerIcon text-blue-500"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://twitter.com/CodemanChris" className="bannerIcon">
            <FaXTwitter />
          </a>
          <a
            href="https://www.youtube.com/@chrisnortonjr/"
            className="bannerIcon text-red-400"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
