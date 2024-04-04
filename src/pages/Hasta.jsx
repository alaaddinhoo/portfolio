import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader";

const Hasta = () => {
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
        {isLoading && <Preloader words={["Hasta"]} />}
      </AnimatePresence>

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(125px-2.5vh)] sm:items-center mx-auto">
        <Navbar />
      </div>
    </div>
  );
};

export default Hasta;
