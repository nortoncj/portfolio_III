import React from "react";
import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { SiPhp, SiPython } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
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
          <a href="https://twitter.com/Hustle_n_code" className="bannerIcon">
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILLS</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <IoLogoJavascript />
          </span>
          <span className="bannerIcon text-blue-500">
            <SiPython />
          </span>
          <span className="bannerIcon text-lg">
            <SiPhp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
