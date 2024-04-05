import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar/Navbar";
import Overlay from "../components/Overlay";
import HoverBox from "../components/HoverBox";

// using memo to avoid re-rendering
const ChildProject = React.memo(({ project, toggleOverlay }) => {
  return (
    <HoverBox key={project.title}>
      <div data-aos="fade-up" key={project.link} onClick={toggleOverlay}>
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
        </div>
        <div className="pt-[15px] flex flex-col gap-[10px]">
          <div className="flex justify-between">
            <div className="text-[calc(18px+1vw)] uppercase">
              {project.title}
            </div>
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
    </HoverBox>
  );
});

const Home = () => {
  // slide up on intersection stuff
  useEffect(() => {
    AOS.init();
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

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
    toggleScroll();
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

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <div className="flex flex-row items-stretch">
          <h1>Hasanati</h1>
          <div onClick={toggleOverlay}>x</div>
        </div>
        <img
          // width={400}
          // height={400}
          className="w-full"
          src="/hasanati-1.png"
        ></img>

        <div className="w-full flex justify-end">
          <div className="bg-[#464646]">1 of 20</div>
        </div>

        <div>Skills and deliverables</div>
      </Overlay>

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(80px-5vh)] md:gap-[calc(100px-2.5vh)] 2xl:gap-[150px] sm: items-center mx-auto">
        <Navbar />

        <div className="max-w-[60vw] text-light font-Baskerville text-center text-[calc(32px+1.5vw)] leading-[1.4em] hidden sm:block">
          I build beautiful things as designer, developer, creator,
          entrepreneur.
        </div>

        <div className="font-normal text-center text-[calc(26px+1.75vw)] block sm:hidden">
          I DEVELOP APPS YOUR CUSTOMERS WILL LOVE
        </div>

        <section className="flex flex-col gap-24 items-stretch w-full py-[30px]">
          {Projects.list.map((project) => (
            <ChildProject
              key={project.title}
              project={project}
              toggleOverlay={toggleOverlay}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
