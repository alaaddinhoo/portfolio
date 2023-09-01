import React, { useEffect } from "react";
import logo from "../assets/logo.svg";
import Projects from "../data/projects.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="ProjectList flex flex-col gap-4 items-center">
        {Projects.list.map((project) => (
          <a
            href={project.link}
            key={project.id}
            className="mt-[50px] max-w-[1200px]"
            data-aos="fade-up"
          >
            <img src={project.cover}></img>
            <div className="grid grid-rows-2 gap-4 mt-[10px] md:grid-cols-2 md:gap-0">
              <div>
                <div className="font-medium text-5xl ">{project.title}</div>
                <div className="pt-2 text-[18px]">{project.subtitle}</div>
              </div>
              <div className="mt-[5px] md:text-right">
                {project.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
