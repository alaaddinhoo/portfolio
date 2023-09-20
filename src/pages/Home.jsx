import React, { useEffect, useState, useRef, useCallback } from "react";

import Projects from "../data/projects.json";
import { HiArrowSmallRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from "uuid";
import Experiences from "../data/experience.json";
import Navbar from "../components/Navbar";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // observer intersection
  // const [visibleSection, setVisibleSection] = useState("projects");
  // const sectionsRef = useRef([]);
  // useEffect(() => {
  //   const options = {
  //     threshold: 0,
  //   };
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         console.log(entry);
  //         setVisibleSection(entry.target.getAttribute("id"));

  //         // entry.target.id !== "home"
  //         //   ? headerRef.current.classList.add("bg-white")
  //         //   : headerRef.current.classList.remove("bg-white");

  //         // To stop observing an element once it comes into view
  //         // observer.unobserve(entry.target);
  //       }
  //     });
  //   }, options);
  //   document.querySelectorAll("section").forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div>
      {/* <Navbar visibleSection={visibleSection} /> */}
      <Navbar />

      <header className="App-header md:min-h-[46.3vh]">
        <div className="hidden text-center font-Baskerville text-[34px] leading-[46px] mx-[15vw] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[76px]">
          I build beautiful things as designer, developer, creator,
          entrepreneur.
        </div>
      </header>

      <section
        className="px-[2.5%] flex flex-col gap-12 items-center md:gap-24"
        id="projects"
      >
        {Projects.list.map((project) => (
          <a
            href={project.link}
            className="max-w-[400px] md:max-w-[1200px] md:mt-[50px]"
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

      <div className="my-[150px]"></div>

      <header className="App-header md:pb-[50px] max-w-[900px] mx-auto">
        <div className="text-center font-Baskerville text-[34px] leading-[46px] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[76px]">
          Experience
        </div>
      </header>

      <section
        className="max-w-[900px] mx-auto my-[50px] px-[10%] md:px-[7.5%]  md:text-lg scroll-my-[150px]"
        id="experience"
      >
        <div className="border-l-[2px] grid gap-16 border-gray-300 dark:border-[#10141c]">
          {Experiences.list.map((experience) => (
            <div data-aos="fade-left" className="ml-[5vw]">
              <div className="relative right-[calc(5vw+7.5px)] top-[0px] w-[15px] h-[15px] z-10 rounded-full bg-gray-300 dark:bg-[#080b0f]"></div>

              <div className="grid gap-6 drop-shadow-xl rounded-lg p-[30px] bg-gray-200 dark:bg-[#10141c]">
                <div className="grid gap-4">
                  <div className="font-Baskerville font-medium md:text-2xl">
                    {experience.title}
                  </div>
                  <div className="text-sm">{experience.duration}</div>
                </div>

                <div className="hidden md:block text-base font-light leading-7">
                  {experience.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="my-[150px]"></div>

      <header className="App-header md:pb-[50px] max-w-[900px] mx-auto">
        <div className="text-center font-Baskerville text-[34px] leading-[46px] md:block md:text-[50px] md:leading-[52px] lg:text-[56px] xl:text-[60px] xl:leading-[64px] 2xl:text-[72px] 2xl:leading-[76px]">
          Skills
        </div>
      </header>

      <div class="indexAnimation__container">
        <div
          className="habitBubble animation-delay-0 top-[250px]"
          data-option="0"
          // style="animation-delay: 0s; top: 250px;"
        >
          <span>⏰ Say the truth</span>
        </div>
        <div
          className="habitBubble animation-delay-1000 top-[160px]"
          data-option="1"
          // style="animation-delay: 1s; top: 160px;"
        >
          <span>✏️ Don’t spy</span>
        </div>
        <div
          className="habitBubble animation-delay-[2500] top-[340px]"
          data-option="0"
          // style="animation-delay: 2.5s; top: 340px;"
        >
          <span>📘 Be Optimistic</span>
        </div>
        <div
          className="habitBubble animation-delay-[5000] top-[180px]"
          data-option="5"
          // style="animation-delay: 5s; top: 180px;"
        >
          <span>☯️ Don’t insult</span>
        </div>
        {/* <div
          class="habitBubble"
          data-option="0"
          style="animation-delay: 3s; top: 90px;"
        >
          <span>💬 Don’t waste</span>
        </div>
        <div
          class="habitBubble"
          data-option="5"
          style="animation-delay: 8.2s; top: 430px;"
        >
          <span>🌍 Don’t backbite</span>
        </div>
        <div
          class="habitBubble"
          data-option="1"
          style="animation-delay: -1s; top: 430px;"
        >
          <span>✒️ Keep your oaths</span>
        </div>
        <div
          class="habitBubble"
          data-option="5"
          style="animation-delay: -4s; top: 430px;"
        >
          <span>🎸 Don’t take bribes</span>
        </div>
        <div
          class="habitBubble"
          data-option="4"
          style="animation-delay: -3.8s; top: 220px;"
        >
          <span>🦷 Honor your guests</span>
        </div>
        <div
          class="habitBubble"
          data-option="5"
          style="animation-delay: -8s; top: 180px;"
        >
          <span>🌳 Hold your anger</span>
        </div>
        <div
          class="habitBubble"
          data-option="5"
          style="animation-delay: -4.2s; top: 320px;"
        >
          <span>🎧 Don’t spread gossip</span>
        </div>
        <div
          class="habitBubble"
          data-option="0"
          style="animation-delay: -0.5s; top: 340px;"
        >
          <span>📝 Think good of others</span>
        </div>
        <div
          class="habitBubble"
          data-option="1"
          style="animation-delay: -15s; top: 300px;"
        >
          <span>🧘 Honor your parents</span>
        </div>
        <div
          class="habitBubble"
          data-option="0"
          style="animation-delay: -5s; top: 150px;"
        >
          <span>🙏 Be Optimistic</span>
        </div>
        <div
          class="habitBubble"
          data-option="4"
          style="animation-delay: -17.5s; top: 250px;"
        >
          <span>🏃‍♀️ Don’t be rude to parents</span>
        </div>
        <div
          class="habitBubble"
          data-option="4"
          style="animation-delay: -14s; top: 150px;"
        >
          <span>🥵 Avoid bad speech</span>
        </div>
        <div
          class="habitBubble"
          data-option="1"
          style="animation-delay: -17s; top: 180px;"
        >
          <span>📝 Don’t ridicule</span>
        </div>
        <div
          class="habitBubble"
          data-option="4"
          style="animation-delay: -19s; top: 350px;"
        >
          <span>😀 Walk humbly</span>
        </div>
        <div
          class="habitBubble"
          data-option="3"
          style="animation-delay: -16.4s; top: 100px;"
        >
          <span>🎷 Speak Politely</span>
        </div>
        <div
          class="habitBubble"
          data-option="4"
          style="animation-delay: -13s; top: 80px;"
        >
          <span>😴 Be modest</span>
        </div>
        <div
          class="habitBubble"
          data-option="3"
          style="animation-delay: -2.5s; top: 65px;"
        >
          <span>🍩 Keep your promises</span>
        </div>
        <div
          class="habitBubble"
          data-option="2"
          style="animation-delay: -9s; top: 250px;"
        >
          <span>🐦 Don’t bully</span>
        </div>
        <div
          class="habitBubble"
          data-option="3"
          style="animation-delay: -9.2s; top: 100px;"
        >
          <span>☕ Don’t deceive</span>
        </div>
        <div
          class="habitBubble"
          data-option="5"
          style="animation-delay: -12.6s; top: 400px;"
        >
          <span>🎰 Visit the sick</span>
        </div>
        <div
          class="habitBubble"
          data-option="1"
          style="animation-delay: 4s; top: 250px;"
        >
          <span>🚯 Smile more</span>
        </div>
        <div
          class="habitBubble"
          data-option="0"
          style="animation-delay: -12s; top: 220px;"
        >
          <span>▶️ Forgive others</span>
        </div>
        <div
          class="habitBubble"
          data-option="5"
          style="animation-delay: -10s; top: 340px;"
        >
          <span>🎮 Seek knowledge</span>
        </div>
        <div
          class="habitBubble"
          data-option="2"
          style="animation-delay: -8s; top: 425px;"
        >
          <span>📵 Be kind to others</span>
        </div>
        <div
          class="habitBubble"
          data-option="1"
          style="animation-delay: -2s; top: 150px;"
        >
          <span>🎬 Initiate the Salaam</span>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
