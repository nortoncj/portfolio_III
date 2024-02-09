import React from "react";
import { Link } from "react-scroll";
import { navLinksData } from "../../constants";
import { FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import {logo} from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
      <img className="h-16 w-16" src={logo} alt="logo" />
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-row gap-4 font-titleFont font-medium py-6 ">
        
          {navLinksData.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                offset={-70}
                duration={500}
              >
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  {title}
                  {/* <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> */}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
     
     
    </div>
  );
};

export default Footer;
