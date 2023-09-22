import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { openNav, closeNav } from "../scripts/navbar";
import Theme from "../components/Theme";
import useScrollDirection from "../functions/useScrollDirection";

const Navbar = ({ visibleSection }) => {
  // const scrollDirection = useScrollDirection();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    closeNav();
  }, [location.key]);

  return (
    <div
      className={`h-[85px] text-base sticky top-0 z-[1000] bg-body_background ${
        scrolled ? "drop-shadow-md" : ""
      }`}
    >
      <header className="h-[85px] max-w-[600px] mx-auto hidden font-medium md:grid md:grid-flow-col md:place-items-center">
        <li className={visibleSection === "Projects" ? "active" : ""}>
          <a href="#Projects">Projects</a>
        </li>
        <li className={visibleSection === "Experience" ? "active" : ""}>
          <a href="#Experience">Experience</a>
        </li>
        <li className={visibleSection === "Skills" ? "active" : ""}>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a
            href="/Portfolio.pdf"
            download="Alaaeldin_CV"
            className="flex gap-[10px]"
          >
            <div>Resume</div>
            <BsDownload className="text-[20px]" />
          </a>
        </li>
        <li>
          <Theme />
        </li>
      </header>

      {/* <div className="h-[85px] max-w-[600px] mx-auto hidden font-medium md:grid md:grid-flow-col md:place-items-center">
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a
          href="/Portfolio.pdf"
          download="Alaaeldin_CV"
          className="flex gap-[10px]"
        >
          <div>Resume</div>
          <BsDownload className="text-[20px]" />
        </a>
        <Theme />
      </div> */}

      <div
        className="bg-body_background fixed top-0 z-20 w-full grid grid-cols-2 items-center justify-items-start pt-4 px-8 md:hidden"
        onClick={openNav}
      >
        <div className="text-[20px] font-medium">
          {visibleSection}
          {/* {window.location.pathname === "/"
            ? "Projects"
            : window.location.pathname
                .replace("/", "")
                .charAt(0)
                .toUpperCase() +
              window.location.pathname.replace("/", "").slice(1)} */}
        </div>
        <HiBars3BottomRight className="text-5xl grid justify-self-end" />
      </div>

      <div id="side-menu" className="sidenav">
        <div className="h-[100%] w-[100%]">
          <div>
            <div className="sidenav-section">
              <div className="nav-bar">
                <a href="#Projects">Projects</a>
              </div>
              <div className="nav-bar">
                <a href="#Experience">Experience</a>
              </div>
              <div className="nav-bar">
                <a href="#Skills">Skills</a>
              </div>

              <div className="nav-bar">
                <a href="/Portfolio.pdf">Resume</a>
              </div>
              <div className="nav-bar" onClick={closeNav}>
                <Theme />
              </div>
            </div>

            <div className="grid grid-cols-3 place-items-center text-[26px] p-[20px]">
              <div
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/alaaeldin-mohamed-487911278/"
                  );
                }}
                className="sidenav-sm-logo dark:bg-[#202938]"
              >
                <a href="https://www.linkedin.com/in/alaaeldin-mohamed-487911278/">
                  <FaLinkedin />
                </a>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.instagram.com/codewithalaa/");
                }}
                className="sidenav-sm-logo dark:bg-[#202938]"
              >
                <FaInstagram />
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCehiVKabFJeT4i3PhQDQW5A"
                  );
                }}
                className="sidenav-sm-logo dark:bg-[#202938]"
              >
                <FaYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="side-overlay"></div>
    </div>
  );
};

export default Navbar;
