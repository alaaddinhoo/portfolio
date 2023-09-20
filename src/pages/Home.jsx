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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#f06292"
              d="M39.867,25.956c-1.538,0.008-2.87,0.377-3.986,0.928c-0.408-0.815-0.822-1.532-0.891-2.065	c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87c-0.006-0.079-0.096-0.456-0.983-0.463	c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.26,0.761-0.366,1.311c-0.155,0.804-1.771,3.673-2.688,5.173	c-0.3-0.586-0.555-1.102-0.608-1.51c-0.081-0.622-0.175-0.994-0.077-1.735c0.098-0.741,0.527-1.791,0.521-1.87	c-0.006-0.079-0.096-0.456-0.983-0.463c-0.887-0.006-1.646,0.171-1.735,0.405c-0.089,0.234-0.185,0.781-0.366,1.311	c-0.182,0.529-2.329,5.314-2.892,6.555c-0.287,0.632-0.536,1.14-0.712,1.486c-0.001-0.001-0.001-0.002-0.001-0.002	s-0.011,0.023-0.029,0.062c-0.151,0.295-0.24,0.458-0.24,0.458s0.001,0.002,0.003,0.006c-0.12,0.217-0.248,0.418-0.311,0.418	c-0.044,0-0.133-0.577,0.019-1.369c0.32-1.66,1.087-4.248,1.08-4.338c-0.004-0.046,0.143-0.497-0.501-0.733	c-0.626-0.229-0.849,0.153-0.906,0.154c-0.055,0.001-0.096,0.135-0.096,0.135s0.697-2.911-1.33-2.911	c-1.268,0-3.024,1.387-3.889,2.644c-0.546,0.298-1.715,0.936-2.954,1.617c-0.476,0.262-0.962,0.529-1.423,0.783	c-0.031-0.035-0.063-0.069-0.095-0.104c-2.459-2.623-7.003-4.478-6.811-8.005c0.07-1.282,0.516-4.658,8.733-8.752	c6.731-3.354,12.12-2.431,13.051-0.386c1.33,2.923-2.88,8.354-9.87,9.138c-2.663,0.299-4.066-0.734-4.415-1.118	c-0.367-0.405-0.422-0.423-0.559-0.347c-0.223,0.124-0.082,0.481,0,0.694c0.209,0.543,1.065,1.506,2.525,1.986	c1.285,0.422,4.412,0.653,8.193-0.81c4.236-1.638,7.543-6.196,6.571-10.005c-0.988-3.874-7.412-5.148-13.492-2.988	C12.44,9.332,8.523,11.35,5.706,13.984c-3.349,3.132-3.883,5.859-3.663,6.998c0.782,4.048,6.361,6.684,8.595,8.637	c-0.11,0.061-0.214,0.118-0.308,0.17c-1.12,0.554-5.373,2.78-6.437,5.131c-1.207,2.667,0.192,4.581,1.118,4.839	c2.869,0.798,5.813-0.638,7.396-2.998c1.582-2.359,1.389-5.432,0.663-6.834c-0.009-0.017-0.019-0.034-0.028-0.052	c0.289-0.171,0.584-0.345,0.876-0.517c0.57-0.335,1.13-0.647,1.615-0.911c-0.272,0.744-0.471,1.637-0.574,2.926	c-0.122,1.514,0.499,3.471,1.311,4.241c0.358,0.339,0.788,0.347,1.06,0.347c0.945,0,1.376-0.786,1.851-1.716	c0.582-1.14,1.099-2.468,1.099-2.468s-0.648,3.586,1.118,3.586c0.644,0,1.291-0.835,1.58-1.26c0.001,0.005,0.001,0.007,0.001,0.007	s0.017-0.028,0.05-0.083c0.067-0.102,0.105-0.167,0.105-0.167s0.001-0.007,0.003-0.019c0.259-0.449,0.833-1.473,1.693-3.162	c1.112-2.182,2.178-4.916,2.178-4.916s0.099,0.668,0.424,1.774c0.191,0.65,0.597,1.369,0.918,2.059	c-0.258,0.358-0.416,0.563-0.416,0.563s0.001,0.004,0.004,0.011c-0.206,0.274-0.437,0.569-0.679,0.857	c-0.878,1.045-1.923,2.239-2.063,2.583c-0.165,0.406-0.126,0.704,0.193,0.945c0.233,0.175,0.647,0.203,1.08,0.174	c0.789-0.053,1.343-0.249,1.617-0.368c0.427-0.151,0.924-0.388,1.39-0.731c0.861-0.633,1.38-1.538,1.33-2.738	c-0.028-0.661-0.238-1.316-0.505-1.934c0.078-0.112,0.156-0.226,0.235-0.34c1.357-1.984,2.41-4.164,2.41-4.164	s0.099,0.668,0.424,1.774c0.164,0.559,0.489,1.17,0.781,1.768c-1.276,1.037-2.067,2.242-2.342,3.032	c-0.508,1.462-0.11,2.124,0.636,2.275c0.338,0.068,0.816-0.087,1.175-0.239c0.447-0.148,0.984-0.395,1.486-0.764	c0.861-0.633,1.689-1.519,1.639-2.718c-0.023-0.546-0.171-1.088-0.372-1.608c1.082-0.451,2.482-0.701,4.266-0.493	c3.827,0.447,4.577,2.836,4.434,3.836c-0.144,1-0.946,1.55-1.215,1.716c-0.268,0.166-0.35,0.224-0.328,0.347	c0.033,0.179,0.157,0.173,0.386,0.134c0.315-0.053,2.009-0.813,2.082-2.659C46.089,28.509,43.844,25.935,39.867,25.956z M10.37,35.9	c-1.268,1.383-3.038,1.905-3.798,1.465c-0.82-0.475-0.495-2.511,1.06-3.979c0.948-0.894,2.172-1.718,2.984-2.225	c0.185-0.111,0.456-0.274,0.786-0.472c0.055-0.031,0.086-0.048,0.086-0.048l-0.001-0.002c0.064-0.038,0.129-0.077,0.196-0.118	C12.25,32.61,11.701,34.449,10.37,35.9z M19.605,29.623c-0.441,1.076-1.365,3.83-1.928,3.682c-0.483-0.127-0.777-2.22-0.096-4.28	c0.342-1.037,1.074-2.276,1.504-2.757c0.692-0.774,1.454-1.027,1.639-0.713C20.959,25.955,19.882,28.948,19.605,29.623z M27.234,33.263c-0.187,0.098-0.359,0.159-0.438,0.112c-0.059-0.035,0.077-0.164,0.077-0.164s0.954-1.027,1.33-1.494	c0.219-0.272,0.472-0.595,0.748-0.955c0.002,0.036,0.003,0.072,0.003,0.107C28.952,32.099,27.764,32.929,27.234,33.263z M33.111,31.923c-0.14-0.099-0.116-0.42,0.343-1.421c0.18-0.393,0.592-1.054,1.306-1.686c0.083,0.26,0.133,0.509,0.132,0.741	C34.883,31.105,33.779,31.683,33.111,31.923z"
            ></path>
          </svg>
        </div>
        <div
          className="habitBubble animation-delay-2000 top-[120px]"
          data-option="1"
          // style="animation-delay: 1s; top: 160px;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              fill="#31c4f3"
              d="M30.64,36.275c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.07,9.906,24.867,16.413 C77,42,86.98,44.818,90.501,36.275C86.98,48.021,79.938,53.36,72.895,53.36C67.722,53.36,61,48,54.849,41.08 C47.267,32.552,34.162,32.004,30.64,36.275z"
            ></path>
            <path
              fill="#31c4f3"
              d="M9.499,59.919c7.042-8.542,10.948-13.279,17.99-13.279c12.764,0,16.359,9.532,24.867,16.413 C56,66,65.838,68.461,69.36,59.919c-3.521,11.746-10.564,17.084-17.606,17.084C46.581,77.004,40,72,33.707,64.724 C26.243,56.093,13.02,55.648,9.499,59.919z"
            ></path>
            <path
              fill="#1f212b"
              d="M72.895,54.359c-6.265,0-13.678-6.86-18.794-12.615c-4.756-5.35-11.458-7.193-16.122-7.077 c-2.998,0.056-5.452,0.894-6.565,2.242c0,0,0,0-0.001,0.001c-0.352,0.427-0.982,0.487-1.408,0.136 c-0.426-0.351-0.488-0.98-0.136-1.406c0.001-0.003,0.003-0.005,0.005-0.007c7.011-8.504,11.245-13.637,18.757-13.637 c9.158,0,13.657,4.833,18.42,9.951c2.129,2.287,4.331,4.652,7.042,6.658c2.023,1.495,6.572,3.132,10.357,2.076 c2.364-0.657,4.089-2.269,5.127-4.787c0.203-0.492,0.759-0.738,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C88.118,47.706,81.178,54.359,72.895,54.359z M38.293,32.664c5.1,0,12.213,2.026,17.303,7.752 c6.846,7.702,12.99,11.943,17.299,11.943c5.891,0,11.058-3.931,14.46-10.767c-0.726,0.438-1.517,0.779-2.369,1.016 c-4.685,1.304-9.897-0.778-12.083-2.396c-2.86-2.115-5.125-4.55-7.316-6.903c-4.651-4.998-8.668-9.313-16.956-9.313 c-5.472,0-9.01,3.182-14.004,9.055c1.014-0.23,2.128-0.361,3.315-0.383C38.058,32.665,38.175,32.664,38.293,32.664z"
            ></path>
            <path
              fill="#1f212b"
              d="M51.753,78.004c-5.083,0-11.761-4.483-18.803-12.625c-4.598-5.317-11.242-7.159-15.893-7.098 c-3.105,0.036-5.642,0.886-6.787,2.272c0,0-0.001,0.001-0.001,0.001l0,0c-0.352,0.428-0.98,0.487-1.408,0.136 c-0.426-0.352-0.487-0.981-0.135-1.407l0,0c0.001-0.002,0.003-0.004,0.004-0.006c7.011-8.504,11.245-13.637,18.757-13.637 c9.493,0,14.151,5.034,19.084,10.363c1.964,2.123,3.996,4.317,6.412,6.271c2.183,1.766,6.437,3.152,10.016,2.235 c2.51-0.641,4.338-2.313,5.435-4.973c0.204-0.493,0.759-0.74,1.259-0.562c0.502,0.179,0.776,0.719,0.624,1.229 C66.977,71.351,60.037,78.004,51.753,78.004z M17.257,56.279c5.104,0,12.233,2.04,17.207,7.791 c6.656,7.695,12.797,11.934,17.29,11.934c5.864,0,11.011-3.895,14.414-10.675c-0.812,0.497-1.705,0.873-2.671,1.119 c-4.258,1.089-9.144-0.494-11.769-2.618c-2.528-2.044-4.609-4.293-6.622-6.468c-4.828-5.217-8.998-9.722-17.616-9.722 c-5.467,0-9.004,3.176-13.991,9.038c1.076-0.247,2.266-0.383,3.537-0.397C17.108,56.28,17.183,56.279,17.257,56.279z"
            ></path>
            <path d="M59.424,69.567c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116C38.575,54.529,34.473,50,28.5,50 c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653c1.913,2.112,3.891,4.296,6.011,6.011 c2.148,1.737,6.905,4.494,11.123,3.794c0.271-0.049,0.529,0.14,0.575,0.411c0.045,0.272-0.139,0.53-0.412,0.575 C60.451,69.528,59.938,69.567,59.424,69.567z"></path>
            <path d="M19.5,53c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.513-1.676,4.26-2.59,6.836-2.935 c0.273-0.045,0.525,0.155,0.562,0.429s-0.155,0.525-0.429,0.562c-2.381,0.319-4.028,1.186-6.414,2.776 C19.692,52.973,19.596,53,19.5,53z"></path>
            <path d="M80.924,46.067c-4.122,0-8.357-2.487-10.382-4.126c-2.181-1.764-4.185-3.977-6.124-6.116 C60.075,31.029,55.973,26.5,50,26.5c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c6.416,0,10.861,4.907,15.159,9.653 c1.913,2.112,3.891,4.296,6.011,6.011c2.148,1.737,6.907,4.487,11.123,3.794c0.273-0.053,0.53,0.14,0.575,0.411 c0.045,0.272-0.139,0.53-0.412,0.575C81.951,46.028,81.438,46.067,80.924,46.067z"></path>
            <path d="M41,29.5c-0.162,0-0.32-0.078-0.417-0.223c-0.153-0.229-0.091-0.54,0.139-0.693c2.24-1.493,3.869-2.383,6.057-2.809 c0.273-0.046,0.534,0.125,0.586,0.396c0.053,0.271-0.125,0.534-0.396,0.587c-2.022,0.393-3.561,1.237-5.693,2.658 C41.192,29.473,41.096,29.5,41,29.5z"></path>
          </svg>
        </div>
        <div
          className="habitBubble animation-delay-[2500] top-[340px]"
          data-option="1"
          // style="animation-delay: 2.5s; top: 340px;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
          >
            <path
              fill="#80deea"
              d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
            ></path>
            <path
              fill="#80deea"
              d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
            ></path>
            <path
              fill="#80deea"
              d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
            ></path>
            <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
          </svg>
        </div>
        <div
          className="habitBubble animation-delay-[5000] top-[180px]"
          data-option="5"
          // style="animation-delay: 5s; top: 180px;"
        >
          {/* <span>☯️ Don’t insult</span> */}
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
