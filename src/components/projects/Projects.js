import React from "react";
import Title from "../layouts/Title";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from "../../assets/index";
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
          title="Ecommerce / Saas"
          des="HTML, CSS, Tailwind UI, Frontend. Backend currently being built using Typscript, Mongo DB, Stripe, Azure Blob Storage"
          src={project1}
          link="https://ecom-base.vercel.app/index.html"
          git="https://github.com/nortoncj/Ecom-Base-Cardicus"
        />
        {/* <ProjectsCard
          title="Ecommerce and Saas"
          des=" Node JS, React, Typescript, AWS S3 storage, Azure Blob storage and functions,  HTML, CSS, Tailwind UI, Mongo DB, Stripe"
          src={project1}
          modLink="https://ecom-base.vercel.app/index.html"
          note1="Admin dashboard features API endpoint integration, full CMS built with TypeScript,Tailwind, and MongoDB"
          note2="Site Features images rendered through AWS S3 storage and Cloudinary and images uploaded to Azure Blob storage"
          username="test@test.com"
          password="12345"
          git="https://github.com/nortoncj/fresh-ts"
        /> */}
        <ProjectsCard
          title="Roofing Website"
          des=" Wordpress, AWS hosting, HTML, CSS, PHP, JavaScript"
          src={project2}
          link="https://treasurevalleyroofing.com/"
        />
        <ProjectsCard
          title="Payment System"
          des="Wordpress, HTML, CSS, PHP, Azure hosting"
          src={project3}
          link="https://tranact.com/"
        />
        <ProjectsCard
          title="Promotional Email"
          des=" Promotion / Awareness email about services and an App using HTML/CSS"
          src={project4}
          git="https://github.com/nortoncj/promo-email_1"
          link="https://promo-email-1.vercel.app/"
        />
        <ProjectsCard
          title="Transactional Email"
          des=" Transactional Email for an E-commerce website HTML/CSS"
          src={project5}
          git="https://github.com/nortoncj/wally-email"
          link="https://wally-email.vercel.app/"
        />

        <ProjectsCard
          title="Newsletter"
          des="Newsletter written for popular Social Media Influencer HTML/CSS"
          src={project6}
          git="https://github.com/nortoncj/newsletter-1"
          link="https://newsletter-1.vercel.app/"
        />
        <ProjectsCard
          title="Real Estate Dashboard"
          des="Tableau dashboard for real estate data"
          src={project7}
          modLink="https://github.com/nortoncj/airbnb-tab"
          video="22F9guwtIQA?si"
        />

        <ProjectsCard
          title="Digital Marketing Dashboard"
          des="Dashboard for web marketing in Tableau"
          src={project8}
          modLink="https://github.com/nortoncj/web-marketing-tab"
          video="usIyITVMprw?si"
        />
        <ProjectsCard
          title="Property Management Dashboard"
          des="Dashboard for managing multiple properties in Power BI"
          src={project9}
          modLink="https://github.com/nortoncj/property-dash"
          video="DzeOil1pBgI?si"
          DzeOil1pBgI
        />
      </div>
    </section>
  );
};

export default Projects;
