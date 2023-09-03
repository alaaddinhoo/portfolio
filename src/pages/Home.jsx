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
      <header className="App-header md:min-h-[46.3vh]">
        <div className="hidden text-center font-Baskerville text-[34px] leading-[46px] mx-[15vw] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[76px]">
          I build beautiful things, as designer, developer, creator,
          entrepreneur.
        </div>
      </header>

      <div className="px-[2.5%] pb-[50px] font-Franklin flex flex-col gap-12 items-center md:gap-24">
        {Projects.list.map((project) => (
          <a
            href={project.link}
            className="max-w-[400px] md:max-w-[1200px] md:mt-[50px]"
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

            <div className="grid auto-rows-auto gap-4 mt-[10px] md:grid-rows-none md:grid-cols-2 md:gap-0">
              <div>
                <div className="font-medium text-5xl ">{project.title}</div>
                <div className="pt-2 text-[18px]">{project.subtitle}</div>
              </div>
              <div className="text-[12px] md:text-[16px] md:mt-[5px] md:text-right">
                {project.description}
              </div>
            </div>

            <div className="hidden mt-[10px] gap-4 md:flex">
              <div className="bg-gray-300 p-2 rounded text-gray-800">
                Frontend
              </div>
              {project.backend && (
                <div className="bg-gray-300 p-2 rounded text-gray-800">
                  Backend
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
