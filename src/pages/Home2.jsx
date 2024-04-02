import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import { TbMenu } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import { Splide, SplideSlide } from "@splidejs/react-splide"; 
import "@splidejs/splide/dist/css/splide.min.css";
import { BiLogoLinkedin, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";
 
import linesAnimationData from "../lotties/animation_lmxmvnbf.json";
import circlesAnimationData from "../lotties/circles.json";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  // navbar stuff
  const navLinks = [
  { title: "WORK", href: "/" },
  { title: "RESUME", href: "/" },
  { title: "SERVICES", href: "/" },
  { title: "ABOUT", href: "/" },
];
    const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  
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

        <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-[400] left-0 top-0 w-full h-screen origin-top bg-white text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between">
                <h1 className="text-lg text-black" onClick={event =>  window.location.href='/'}>Home</h1>
                <p
                  className="cursor-pointer text-md text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        {/*  mobile fixed top navbar  */}
        <div className="w-full px-[10vw] sticky top-0 h-[100px] bg-white z-[399] flex justify-between items-center sm:hidden">
            <div className="w-[20px] h-[20px] rounded-full border-[2px] border-black"></div>
            
            <div>
                 <div className="rounded-full">
                    <TbMenu className="p-[15px] text-6xl cursor-pointer" onClick={toggleMenu}/>
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
      
      <div className="font-light text-center text-[calc(28px+1.75vw)] hidden sm:block">
            I help startups launch their online business using low-code tools. 
        </div>

        <div className="font-normal text-center text-[calc(22px+1.75vw)] block sm:hidden">
            I DEVELOP APPS YOUR CUSTOMERS WILL LOVE 
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

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};
const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-5xl uppercase text-black"
    >
      <a href={href}>{title}</a>
    </motion.div>
  );
};