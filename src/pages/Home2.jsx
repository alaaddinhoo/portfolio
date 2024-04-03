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
  
// using memo to avoid re-rendering
const ChildProject = React.memo(({ project }) => {
  return (
    <a href={project.link} data-aos="fade-up" key={uuidv4()}>
      <div className="project-cover">
        <div className="hidden sm:block">
          <img src={project.cover} className="project-cover-image" />
        </div>
        <div className="block sm:hidden" style={{ backgroundColor: `${project.backgroundMobile}` }}>
          <img src={project.coverMobile} className="project-cover-image block sm:hidden" />
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
          <div className="text-[calc(18px+1vw)] uppercase">{project.location}</div>
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
  useEffect(() => {
    AOS.init();
  }, []);



  // block scroll stuff
   const scrollBlocked = useRef(false);
  const toggleScroll = () => {
    scrollBlocked.current = !scrollBlocked.current;
    document.documentElement.classList.toggle('no-scroll', scrollBlocked.current);
  };

  // navbar stuff
    const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => {
  setOpen(prevOpen => !prevOpen);
  toggleScroll();
}, [open]); 
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
                <h1 className="text-lg cursor-pointer text-black" onClick={event =>  window.location.href='/'}>Home</h1>
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
                <div className="overflow-hidden">
                         <motion.div
                        variants={mobileLinkVars}
                        className="text-5xl uppercase text-black"
                        >
                        <a href="/">WORK</a>
                        </motion.div>
                </div>

                <div className="overflow-hidden">
                
                           <motion.div
                            variants={mobileLinkVars}
                            className="text-5xl uppercase text-black"
                            >
                            <a href="/Portfolio.pdf">RESUME</a>
                            </motion.div>
                </div>

                <div className="overflow-hidden">

                            <motion.div
                            variants={mobileLinkVars}
                            className="text-5xl uppercase text-black"
                            >
                            <a href="/">SERVICES</a>
                            </motion.div>
                </div>
                

                <div className="overflow-hidden">

                            <motion.div
                            variants={mobileLinkVars}
                            className="text-5xl uppercase text-black"
                            >
                            <a href="/">ABOUT</a>
                            </motion.div>
                </div>

              </motion.div>

              <motion.div
                 variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial">
                    <div className="overflow-hidden">
                       <motion.div
                        variants={mobileLinkVars}
                        className="font-lora text-center underline underline-offset-4"
                        >
                        <a href="mailto:alaaeldin.92@outlook.com">alaaeldin.92@outlook.com</a>
                        </motion.div>
                    </div>
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


    <div className="w-[80vw] xl:w-[75vw] 2xl:w-[60vw] flex flex-col gap-[calc(125px-3vh)] 2xl:gap-[125px] my-[80px] items-center mx-auto">

      <div className="w-full justify-between items-center hidden sm:flex">
            <div className="w-[20px] h-[20px] rounded-full border-[2px] border-black"></div>
            {/* <div className="hidden sm:flex text-[20px] flex-row gap-12">
                <div>Work</div>
                <div>Services</div>
                <div>Resume</div>
            </div> */}
                    <TbMenu className="p-[15px] text-6xl cursor-pointer" onClick={toggleMenu}/>

      </div>
      
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
 