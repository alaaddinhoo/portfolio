import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar/Navbar";

const About = () => {
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
              "About",
              "À propos",
              "Su di me",
              "Sobre",
              "約",
              "Om",
              "Über",
              "Over",
            ]}
          />
        )}
      </AnimatePresence>

      <Navbar />

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(125px-3vh)] 2xl:gap-[125px] mt-[20px] mb-[100px] items-center mx-auto">
        <div className="uppercase font-light text-center text-[calc(24px+1.75vw)] hidden sm:block">
          HI 👋 IM ALADDIN. NO, I DONT HAVE MAGIC LAMP.
        </div>

        <div className="font-normal text-center text-[calc(26px+1.75vw)] block sm:hidden">
          HI 👋 IM ALADDIN.
        </div>
      </div>
    </div>
  );
};

export default About;
