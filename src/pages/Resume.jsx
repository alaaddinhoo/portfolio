import React, { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader";

const Resume = () => {
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
              "Resume",
              "Curriculum Vitae",
              "Curriculum",
              "Currículum",
              "履歴書",
              "CV",
              "Lebenslauf",
              "CV",
            ]}
          />
        )}
      </AnimatePresence>

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(125px-2.5vh)] sm:items-center mx-auto">
        <Navbar />
        <embed
          src="https://codewithalaa.netlify.app/CV4.pdf"
          width="500"
          height="375"
          type="application/pdf"
        ></embed>
      </div>
    </div>
  );
};

export default Resume;
