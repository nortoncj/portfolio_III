import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019-2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black flex flex-col gap-10">
          <ResumeCard
            title="Azure"
            subTitle="Moved website hosting from GoDaddy to Azure"
            result="Success"
            des="Presented the idea to manager and upper management. Went over some projections and eventually I was tasked with not only uploading the site but rearranging the DNS records."
          />
          <ResumeCard
            title="Amazon Web Services"
            subTitle="Launched a web app fully hosted on AWS"
            result="Certified"
            des="While studying for the CCP exam, I launched a web app that was built using React, HTML, CSS, JavaScript and Python."
          />
          <ResumeCard
            title="Shopify"
            subTitle="Moved  website over from PHP to Shopify"
            result="Success"
            des="Learned liquid coding language and ported over a PHP website. Rerouted the Domain address to the new website."
          />
           <ResumeCard
            title="PHP"
            subTitle="Built starter website in PHP"
            result="Success"
            des="Created full stack application using PHP, MYSQL, CSS, Bootstrap and more. I started drawing a wireframe based on requirements. Created a backend Content management system from scratch using HTML. Created a branding strategy, artwork for logos with photoshop. I kept timelines and eventually was able to work in a team environment."
          />
       
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black  flex flex-col gap-10">
          <ResumeCard
            title="Carrier Enterprise"
            subTitle="HVAC Company"
            result="Success"
            des="Worked on Front-end solutions on a Sharepoint development team. Conducted Unit testing and load testing on their Node JS Ecommerce platform. Worked on No code and Apex code solutions in Salesforce. "
          />
          <ResumeCard
            title="Transact Payment Systems"
            subTitle="Financial Services"
            result="Success"
            des="Explored fullstack solutions using Ruby on Rails, C#, PHP, Azure and MySQL. Increased customer visibility with a WordPress Blog. Troublshot networking and security issues with payment systems and ATM machines. Created wireframe for mobile App in Figma."
          />
          <ResumeCard
            title="Nursery of Kickz"
            subTitle="Ecommerce Platform"
            result="Success"
            des="Created and deployed a starter website in PHP. Worked on an updated website in Node JS. Kept up with timelines, met with stakeholders and learned new technologies on the fly using HTML,CSS, Javascript and more."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;