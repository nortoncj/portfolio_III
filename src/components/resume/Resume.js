import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(true);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center hover:bo">
        {" "}
        <Title title="4+ YEARS OF EXPERIENCE" des="My Resume" />{" "}
      </div>
      <div className="flex justify-center mb-8 hover:text-designColor duration-300 cursor-pointer tracking-wide ">
        <a href="https://docs.google.com/document/d/1eTmLsZ3AbMY3njWI265Y4WPVeXqiAXka0bAiOi17vlI/edit?usp=sharing">
          <h2 className="text-xl md:text-2xl uppercase font-titleFont font-bold mb-4 flex">
            {" "}
            Download Resume{" "}
          </h2>{" "}
        </a>
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 cursor-pointer">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi max-md:hidden`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg "
                : "border-transparent"
            } resumeLi max-lg:hidden `}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {experienceData && <Experience />}
    </section>
  );
};

export default Resume;
