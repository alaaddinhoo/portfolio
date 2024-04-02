import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import { TbMenu } from "react-icons/tb";

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
    <div>

        {/*  mobile navbar  */}
        <div className="w-full px-[10vw] sticky top-0 h-[100px] bg-white z-[399] flex justify-between items-center sm:hidden">
            <div className="w-[20px] h-[20px] rounded-full border-[2px] border-black"></div>
            
            <div>
                 <div className="rounded-full">
                    <TbMenu className="p-[15px] text-6xl "/>
                 </div>
            </div>
      </div>


    <div className="w-[80vw] xl:w-[75vw] 2xl:w-[60vw] flex flex-col gap-[calc(125px-3vh)] 2xl:gap-[125px] mt-[80px] items-center mx-auto">

      <div className="w-full justify-between items-center hidden sm:flex">
            <div className="w-[20px] h-[20px] rounded-full border-[2px] border-black"></div>
            <div className="hidden sm:flex text-[20px] flex-row gap-12">
                <div>Work</div>
                <div>Services</div>
                <div>Resume</div>
            </div>
      </div>
      
      <div className="font-light text-center text-[calc(28px+1.75vw)]">
            I help startups launch their online business using low-code tools. 
        </div>
      
      <div className="observableSection" id="Projects">
          
        <section className="flex flex-col gap-24 items-center">
          {Projects.list.map((project) => (
            <a
              href={project.link}
              data-aos="fade-up"
              key={uuidv4()}
            >
              <div className="project-cover">
               
                <div className="hidden sm:block"><img src={project.cover} className="project-cover-image"></img></div> 
                <div className="block sm:hidden" style={{ backgroundColor: `${project.backgroundMobile}` }}><img src={project.coverMobile} className={`project-cover-image block sm:hidden`}></img></div>
               
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
                    <div className="text-[calc(18px+1vw)] uppercase">{project.location}</div>
                  </div>
                  
                  <div className="w-full h-[1px] bg-[#dcdcdc]"></div>
 

                <div className="flex justify-between">                  
                    <div className="text-[calc(12px+0.75vw)]">{project.type}</div>
                    <div className="text-[calc(12px+0.75vw)]">{project.year}</div>
                  </div>

                </div>
            </a>
          ))}
        </section>

        
      </div>
    </div>

</div>
     
  );
};

export default Home;
