import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar/Navbar";
import Overlay from "../components/Overlay";
import HoverBox from "../components/HoverBox";

let words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

// using memo to avoid re-rendering
const ChildProject = React.memo(({ project, toggleOverlay, index }) => {
  return (
    // <HoverBox key={project.title}>
    <div
      data-aos="fade-up"
      key={project.link}
      onClick={() => toggleOverlay(project, index)}
      className="hover:cursor-pointer"
    >
      <div className="project-cover">
        <div className="hidden sm:block">
          <img src={project.cover} className="project-cover-image" />
        </div>
        <div
          className="block sm:hidden"
          // style={{ backgroundColor: `${project.backgroundMobile}` }}
        >
          <img
            src={project.coverMobile}
            className="project-cover-image block sm:hidden rounded-[10px]"
          />
        </div>
      </div>
      <div className="pt-[15px] flex flex-col gap-[10px]">
        <div className="flex justify-between">
          <div className="text-[calc(18px+1vw)] uppercase">{project.title}</div>
          <div className="text-[calc(18px+1vw)] uppercase">
            {project.location}
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#dcdcdc]"></div>
        <div className="flex justify-between">
          <div className="text-[calc(12px+0.7vw)]">{project.type}</div>
          <div className="text-[calc(12px+0.7vw)]">{project.year}</div>
        </div>
      </div>
    </div>
    // </HoverBox>
  );
});

const Home = () => {
  // slide up on intersection stuff
  useEffect(() => {
    AOS.init();

    const urlParams = new URLSearchParams(window.location.search);
    const projectIndex = urlParams.get("project");

    if (projectIndex) {
      // Delay the execution by 2 seconds
      const totalDelay = 1000 + (words.length - 1) * 150 + 2000;
      setTimeout(() => {
        const index = parseInt(projectIndex);
        const project = Projects.list[index];
        toggleOverlay(project, index);
      }, totalDelay);
    }
  }, []);

  // block scroll stuff
  const scrollBlocked = useRef(false);
  const toggleScroll = () => {
    scrollBlocked.current = !scrollBlocked.current;
    document.documentElement.classList.toggle(
      "no-scroll",
      scrollBlocked.current
    );
  };

  // overlay
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const toggleOverlay = (project, index) => {
    setIsOpen(!isOpen);
    setSelectedProject(project);
    toggleScroll();

    if (!isOpen) {
      // Update the URL query parameter
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("project", index);
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    } else {
      // Remove the URL query parameter
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete("project");

      // Construct the new URL without "?" if no other query parameters exist
      let newUrl;
      if (urlParams.toString() === "") {
        newUrl = window.location.pathname;
      } else {
        newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      }

      window.history.pushState({ path: newUrl }, "", newUrl);
    }
  };

  // preloader stuff
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            words={[
              "Hello",
              "Bonjour",
              "Ciao",
              "Olà",
              "やあ",
              "Hallå",
              "Guten tag",
              "Hallo",
            ]}
          />
        )}
      </AnimatePresence>

      <Overlay
        isOpen={isOpen}
        onClose={toggleOverlay}
        project={selectedProject}
      />

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[70vw] flex flex-col gap-[calc(80px-5vh)] md:gap-[calc(100px-2.5vh)] 2xl:gap-[150px] sm: items-center mx-auto">
        <Navbar />

        <div className="max-w-[60vw] text-light font-Baskerville text-center text-[calc(32px+1.5vw)] leading-[1.4em] hidden sm:block">
          I build beautiful apps as designer, developer, creator, entrepreneur.
        </div>

        <div className="font-normal text-center text-[calc(26px+1.75vw)] block sm:hidden">
          I DEVELOP APPS YOUR CUSTOMERS WILL LOVE
        </div>

        <section className="flex flex-col gap-24 items-stretch w-full py-[30px]">
          {Projects.list.map((project, index) => (
            <ChildProject
              key={project.title}
              project={project}
              toggleOverlay={toggleOverlay}
              index={index}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
