import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[430px] h-[380px] lgl:w-[500px] lgl:h-[450px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#fffaf0] to-[#fdfff5] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
