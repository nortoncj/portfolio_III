import React from 'react'
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";
import Contact from "../components/contact/Contact";

// Conditonal CSS
if (window?.location.pathname === '/')
  require ('../index.css');

export default function Home() {
  return (
    <div className="w-full h-auto bg-bodyColor text-darkText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto ">
        <Banner />
        <Services />
        <Projects />
        < Resume />
        <Footer />
        <FooterBottom />
      </div>
    </div>

  )
}
