import React, { useEffect, useState, useRef, useCallback } from "react";
import SkillsJSON from "../data/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/Navbar/Navbar";

// using memo to avoid re-rendering
const ChildProject = React.memo(({ skill }) => {
  return (
    <div data-aos="fade-up" key={uuidv4()}>
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
          <div className="text-[calc(12px+0.75vw)]">{skill.description}</div>
          <div className="text-[calc(12px+0.75vw)]">{skill.date}</div>
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

  return (
    <div>
      <Navbar />

      <div className="w-[80vw] xl:w-[75vw] 2xl:w-[65vw] flex flex-col gap-[calc(125px-3vh)] 2xl:gap-[125px] mt-[20px] mb-[100px] items-center mx-auto">
        <div className="uppercase font-light text-center text-[calc(24px+1.75vw)] hidden sm:block">
          I help startups launch their online business using low-code tools.
        </div>

        <div className="font-normal text-center text-[calc(26px+1.75vw)] block sm:hidden">
          I DEVELOP APPS YOUR CUSTOMERS WILL LOVE
        </div>

        <section className="flex flex-col gap-24 w-full">
          {SkillsJSON.list.map((skill) => (
            <ChildProject key={skill.name} skill={skill} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Skills;
