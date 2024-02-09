import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link, git }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#faf0e6] group hover:bg-gradient-to-b hover:from-white hover:#faf0e6 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
            {git ? (
                <a href={git} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer">
                  <BsGithub />
                </a>
              ) : null}
              <a href={link} className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:designColor duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
