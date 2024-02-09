import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

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
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          {" "}
          I'm a committed software engineer with over 4 years experience
          currently trying to bridge the gap between software engineering and
          data science. Allow me to deliver comprehensive solutions that not
          only meet but exceed expectations. With a knack for problem-solving
          and a dedication to continuous learning, I am excited to contribute my
          skills and experience to innovative projects in the ever-evolving
          landscape of technology.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
}
