import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar"; 
import { Splide, SplideSlide } from "@splidejs/react-splide"; 
import "@splidejs/splide/dist/css/splide.min.css";
import { BiLogoLinkedin, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
 
import linesAnimationData from "../lotties/animation_lmxmvnbf.json";
import circlesAnimationData from "../lotties/circles.json";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

 
  // observer intersection
  const [visibleSection, setVisibleSection] = useState("projects");
  const sectionsRef = useRef([]);
  useEffect(() => {
    const options = {
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry);
          setVisibleSection(entry.target.getAttribute("id"));

          // entry.target.id !== "home"
          //   ? headerRef.current.classList.add("bg-white")
          //   : headerRef.current.classList.remove("bg-white");

          // To stop observing an element once it comes into view
          // observer.unobserve(entry.target);
        }
      });
    }, options);
    document.querySelectorAll(".observableSection").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-[80vw] mt-[80px] 2xl:w-[60vw] flex flex-col gap-[125px] items-center mx-auto">

      <div className="w-full flex justify-between">
            <div className="w-[20px] h-[20px] rounded-full border-[2px] border-black"></div>
            <div className="text-[20px] flex flex-row gap-12">
                <div>Work</div>
                <div>Services</div>
                <div>Resume</div>
            </div>
      </div>
      
      <div className="font-light text-center text-[34px] leading-[46px] md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[110%]">
            I help startups launch their online business using low-code tools. 
        </div>
      
      <div className="observableSection" id="Projects">
          
        <section className="hidden md:flex flex-col gap-12 items-center md:gap-24">
          {Projects.list.map((project) => (
            <a
              href={project.link}
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

              <div className="hidden mt-[10px] gap-4 2xl:flex">
                <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded ">
                  Frontend
                </div>
                {project.backend && (
                  <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded">
                    Backend
                  </div>
                )}
              </div>
            </a>
          ))}
        </section>

        <section className="md:hidden mt-[30px]">
          <Splide
            options={{
              drag: "free",
              type: "loop",
              arrows: false,
              pagination: false,
              perPage: 1,
              // gap: 20,
              padding: { right: 110 },
            }}
          >
            {Projects.list.map((project) => (
              <SplideSlide>
                <a href={project.link} key={uuidv4()}>
                  <div className="project-cover">
                    <img
                      src={project.cover}
                      className="project-cover-image rounded-2xl"
                      style={{ height: "300px", objectPosition: "20% 10%" }}
                    ></img>
                    <div className="project-cover-overlay">
                      <div className="project-cover-overlay-text flex flex-row items-center gap-2">
                        Visit Website
                        <HiArrowSmallRight />
                      </div>
                    </div>
                  </div>

                  <div className="grid auto-rows-auto gap-4 mt-[10px] md:grid-rows-none md:grid-cols-2 md:gap-0">
                    <div className="text-left">
                      <div className="font-medium text-3xl ">
                        {project.title}
                      </div>
                      <div className="pt-2 text-lg">{project.subtitle}</div>
                    </div>
                    {/* <div className="text-[12px] md:text-[16px] md:mt-[5px] md:text-right">
                      {project.description}
                    </div> */}
                  </div>

                  <div className="hidden mt-[10px] gap-4 2xl:flex">
                    <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded ">
                      Frontend
                    </div>
                    {project.backend && (
                      <div className="bg-gray-300 text-gray-800  dark:bg-[#10141c] dark:text-white p-2 rounded">
                        Backend
                      </div>
                    )}
                  </div>
                </a>
              </SplideSlide>
            ))}
          </Splide>
        </section>
      </div>
    </div>
  );
};

export default Home;
