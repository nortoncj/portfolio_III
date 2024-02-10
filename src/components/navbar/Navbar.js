import React from "react";
import { Link } from "react-scroll";
import { navLinksData } from "../../constants";
import { logo } from "../../assets/index";

function Navbar() {
  return (
    <div className="w-full h-24 mx-auto flex justify-between items-center font-title border-b-[1px] border-b-gray-600">
      <div>
        <a href="/">
          <img className="lg:h-16 xs:h-8" src={logo} alt="logo" />
        </a>
      </div>
      <div>
        <ul className="flex items-center xs:gap-3 sm:gap-5 md:gap-5 lg:gap-10">
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
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
