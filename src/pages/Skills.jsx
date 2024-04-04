import React, { useEffect, useState, useRef, useCallback } from "react";
import SkillsJSON from "../data/skills.json";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import Preloader from "../components/Preloader";

// using memo to avoid re-rendering
const ChildProject = React.memo(({ skill }) => {
  return (
    <div data-aos="fade-up" key={skill.name}>
      <div
        className="w-full h-[300px] flex items-center justify-center"
        style={{ backgroundColor: `${skill.color}` }}
      >
        <img src={skill.cover} className="w-[200px] h-[200px]" />
      </div>
      <div className="pt-[15px] flex flex-col gap-[10px]">
        <div className="flex justify-between">
          <div className="text-[calc(18px+1vw)] uppercase">{skill.name}</div>
          <div className="text-[calc(18px+1vw)] uppercase">{skill.percent}</div>
        </div>
        <div className="w-full h-[1px] bg-[#dcdcdc]"></div>
        <div className="flex justify-between">
          <div className="text-[calc(12px+0.5vw)]">{skill.description}</div>
          <div className="text-[calc(12px+0.5vw)]">{skill.date}</div>
        </div>
      </div>
    </div>
  );
});

const Skills = () => {
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
              "Skills",
              "Compétences",
              "Competenze",
              "Habilidades",
              "スキル",
              "Färdigheter",
              "Fähigkeiten",
              "Vaardigheden",
            ]}
          />
        )}
      </AnimatePresence>

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(125px-2.5vh)] sm:items-center mx-auto">
        <Navbar />

        <div className="uppercase font-light text-center text-[calc(24px+1.75vw)] hidden sm:block">
          The tech stack I use to create apps
        </div>

        <div className="font-normal text-center text-[calc(26px+1.75vw)] block sm:hidden">
          I DEVELOP APPS YOUR CUSTOMERS WILL LOVE
        </div>

        <section className="flex flex-col gap-24 w-full items-stretch py-[30px]">
          {SkillsJSON.list.map((skill) => (
            <ChildProject key={skill.name} skill={skill} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Skills;
