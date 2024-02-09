import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Carrier Enterprise - (2022-2023)"
            result="USA"
            des="Worked on Front-end solutions on a Sharepoint development team. Conducted Unit testing and load testing on their Node JS Ecommerce platform. Worked on No code and Apex code solutions in Salesforce. "
          />
          <ResumeCard
            title="Technical Consultant"
            subTitle="Transact Payment Systems - (2022)"
            result="Saint Petersburg FL"
            des="Explored fullstack solutions using Ruby on Rails, C#, PHP, Azure and MySQL. Increased customer visibility with a WordPress Blog. Troublshot networking and security issues with payment systems and ATM machines. Created wireframe for mobile App in Figma."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Nursery of Kickz - (2019 - 2021)"
            result="Tampa FL"
            des="Created and deployed a starter website in PHP. Worked on an updated website in Node JS. Kept up with timelines, met with stakeholders and learned new technologies on the fly using HTML,CSS, Javascript and more."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Freelance Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10">
          <ResumeCard
            title="Toastmasters"
            subTitle="Non-Profit Speech organization (2023)"
            result="Tampa FL"
            des="Created mockups for a new Website in PHP. Drew Wireframes in Photoshop and did some Front-end edits. I also explored security solutions to vulnerabilities."
          />
          <ResumeCard
            title=" Hackathon 2019"
            subTitle="Competition"
            result="Tampa FL"
            des="Created a web app with Python, HTML, JavaScript, CSS and Google Cloud Suite. Created an app that scans vectors in the face and replicates it with an emoji."
          />
         
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;