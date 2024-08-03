import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import Fader from "./Fader";

export default function LeftBanner() {
  const [text] = useTypewriter({
    words: [
      "Web Developer",
      "Data Analyst",
      "Content Editor",
      "Email Developer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome</h4>
        <h1 className="text-6xl font-bold text-darkText">
          Hi, I'm <span className="text-designColor capitalize">Chris</span>
        </h1>
        <h2 className="text-4xl font-bold text-darkText">
          <span><Fader /></span>
          {/* <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          /> */}
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {" "}
          A seasoned web developer with a passion for innovation, I'm bridging the gap between software engineering and data science to create exceptional digital solutions. With a proven track record of delivering results that exceed expectations, I thrive on tackling complex challenges. My dedication to continuous learning empowers me to contribute meaningfully to cutting-edge projects. Let's build the future together.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}
