import React, { useEffect } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <header className="App-header min-h-[400px] md:min-h-[500px]">
        <div className="font-Baskerville text-[34px] leading-[46px] mx-[15vw] sm:text-5xl md:text-6xl lg:text-7xl">
          I build beautiful things, as designer, developer, creator,
          entrepreneur.
        </div>
      </header>

      <div className="ProjectList flex flex-col gap-4 items-center">
        {Projects.list.map((project) => (
          <a
            href={project.link}
            className="mt-[50px] max-w-[1200px]"
            data-aos="fade-up"
            key={uuidv4()}
          >
            <div className="project-cover">
              <img src={project.cover} className="project-cover-image"></img>
              <div className="project-cover-overlay">
                <div className="project-cover-overlay-text flex flex-row items-center gap-2">
                  Visit Website
                  <HiArrowSmallRight />
                </div>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-4 mt-[10px] md:grid-cols-2 md:gap-0">
              <div>
                <div className="font-medium text-5xl ">{project.title}</div>
                <div className="pt-2 text-[18px]">{project.subtitle}</div>
              </div>
              <div className="mt-[5px] md:text-right">
                {project.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
