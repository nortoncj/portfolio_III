import React, {useState} from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link, git, modLink,note1,note2,username, password, video }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal
  = () => {
    setModalOpen(false);
  }

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#faf0e6] group hover:bg-gradient-to-b hover:from-white hover:#faf0e6 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {git ? (
                <a
                  href={git}
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer"
                >
                  <BsGithub />
                </a>
              ) : null}
              {link ? (
                <a
                  href={link}
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              ) : null}
                               {modLink && (
  <>
    <button
      onClick={openModal}
      className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-designColor duration-300 cursor-pointer"
    >
      <FaGlobe />
    </button>
    {ModalOpen && (
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[white] group hover:bg-gradient-to-b  transition-colors duration-1000 rounded-lg">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-stone-900">
                Notes
              </h3>
              <button
                type="button"
                className="close text-stone-400 bg-transparent hover:bg-stone-200 hover:text-stone-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={closeModal}
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <svg className="mx-auto mb-4 text-stone-700 w-12 h-12 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
              
                {video ? (
                  <iframe
                    className="w-[80%] self-center mx-auto aspect-video z-60"
                    src={`https://www.youtube.com/embed/${video}`}
                    title="Embedded video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : null}
              <p className="text-base leading-relaxed text-stone-500">
                {note1 ? (note1) : null}
              </p>
              <p className="text-base leading-relaxed text-stone-500">
                {note2 ? (note2) : null}
              </p>
              {username ? (
                <div className="justify-center">
                <p>Username: {username} </p>
                <p>Password: {password}</p>
              </div>) : null}
            </div>
            <div className="flex mx-auto justify-center py-4">
            <a
              href={modLink}
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-[#FF014F] hover:text-gray-100 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-[#FF014F] font-large rounded-lg text-xlg px-5 py-2.5 text-center"
              >
                Demo
              </a>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              
              <button
                data-modal-hide="default-modal"
                type="button"
                className="close py-2.5 px-5 ms-3 text-sm font-medium text-stone-900 focus:outline-none bg-white rounded-lg border border-stone-200 hover:bg-stone-100 hover:text-[#FF014F] focus:z-10 focus:ring-4 focus:ring-stone-100"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
)}
     
              
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:designColor duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
