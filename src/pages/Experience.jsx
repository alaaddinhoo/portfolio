import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Experiences from "../data/experience.json";
import { v4 as uuidv4 } from "uuid";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="px-[2.5%] pb-[100px] flex flex-col items-center ">
      {Experiences.list.map((experience) => (
        <div
          className="w-full max-w-[400px] grid auto-rows-auto md:gap-[20px] md:max-w-[800px] py-[50px] border-t-[1px] border-body_border"
          data-aos="fade-up"
          key={uuidv4()}
        >
          <div className="font-Baskerville md:text-[36px]">
            {experience.title}
          </div>

          <div>{experience.duration}</div>

          <div className="text-[24px] leading-[28px] font-Baskerville md:text-[16px]">
            {experience.role}
          </div>

          <div className="hidden gap-4 md:flex">
            {experience.stack.map((stack) => (
              <div
                className="bg-gray-300 p-2 rounded text-gray-500"
                key={uuidv4()}
              >
                {stack}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
