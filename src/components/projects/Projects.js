import React from "react";
import Title from "../layouts/Title";
import { project1, project2, project3 } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Ecommerce and Saas"
          des=" Node JS, React, Typescript, AWS S3 storage, Azure Blob storage and functions,  HTML, CSS, Tailwind UI, Mongo DB, Stripe"
          src={project1}
          link="https://fresh-ts.vercel.app/"
          git="https://github.com/nortoncj/fresh-ts"
        />
        <ProjectsCard
          title="Game Stream and Development Site"
          des=" Wordpress, AWS hosting, HTML, CSS, PHP, Twitch and Youtube API integration"
          src={project2}
          link="https://fightershavenunited.com/"
        />
        <ProjectsCard
          title="Payment System"
          des="Wordpress, HTML, CSS, Azure hosting"
          src={project3}
          link="https://tranact.com/"
        />
        {/* <ProjectsCard
          title="Ecommerce and Saas"
          des=" Node JS, React, Typescript, AWS S3 storage, Azure Blob storage and functions,  HTML, CSS, Tailwind UI, Mongo DB"
          src={project1}
          link="https://cardicus-986xci8ne-nortoncj.vercel.app/"
          git="https://github.com/nortoncj/fresh-ts"
        /> */}
      </div>
    </section>
  );
};

export default Projects;
