import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar/Navbar";

// using memo to avoid re-rendering
const ChildProject = React.memo(({ project }) => {
  return (
    <a href={project.link} data-aos="fade-up" key={project.link}>
      <div className="project-cover">
        <div className="hidden sm:block">
          <img src={project.cover} className="project-cover-image" />
        </div>
        <div
          className="block sm:hidden"
          style={{ backgroundColor: `${project.backgroundMobile}` }}
        >
          <img
            src={project.coverMobile}
            className="project-cover-image block sm:hidden"
          />
        </div>
        <div className="project-cover-overlay">
          <div className="project-cover-overlay-text flex flex-row items-center gap-2">
            Visit Website
            <HiArrowSmallRight />
          </div>
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
          <div className="text-[calc(12px+0.75vw)]">{project.type}</div>
          <div className="text-[calc(12px+0.75vw)]">{project.year}</div>
        </div>
      </div>
    </a>
  );
});

const Home = () => {
  // slide up on intersection stuff
  useEffect(() => {
    AOS.init();
  }, []);

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

      <Navbar />

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(125px-3vh)] 2xl:gap-[125px] mt-[20px] mb-[100px] items-center mx-auto">
        <div className="uppercase font-light text-center text-[calc(24px+1.75vw)] hidden sm:block">
          I help startups launch their online business using low-code tools.
        </div>

        <div className="font-normal text-center text-[calc(26px+1.75vw)] block sm:hidden">
          I DEVELOP APPS YOUR CUSTOMERS WILL LOVE
        </div>

        <section className="flex flex-col gap-24 items-center">
          {Projects.list.map((project) => (
            <ChildProject key={project.title} project={project} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
