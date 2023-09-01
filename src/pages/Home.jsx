import React from "react";
import logo from "../assets/logo.svg";
import Projects from "../data/projects.json";

const Home = () => {
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

      <div className="ProjectList flex flex-col gap-4">
        {Projects.list.map((project) => (
          <a href={project.link} key={project.id}>
            <img src={project.cover}></img>
            <div className="flex flex-row gap-4">
              <div>
                <div>{project.title}</div>
                <div className="pt-2">Written by {project.subtitle}</div>
              </div>
              <div className="">{project.description}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
