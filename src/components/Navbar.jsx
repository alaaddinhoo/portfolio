import React, { useEffect } from "react";
import logo from "../assets/my-logo.png";
import { Link, useLocation } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { openNav, closeNav } from "../index";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    closeNav();
  }, [location.key]);
  return (
    <div className="font-Franklin mb-[50px] md:mb-0">
      <ul className="h-[100px] max-w-[600px] mx-auto hidden font-medium md:block">
        <li>
          <Link to="/">Projects</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
        </li>
      </ul>

      <div
        className="bg-white fixed top-0 z-20 w-full grid grid-cols-2 items-center justify-items-start pt-4 px-12 md:hidden"
        onClick={openNav}
      >
        <div className="text-[20px] font-medium">Projects</div>
        <HiBars3BottomRight className="text-5xl grid justify-self-end" />
      </div>

      <div id="side-menu" className="sidenav">
        <div className="h-[100%] w-[100%]">
          <div>
            <div className="sidenav-section">
              <div className="nav-bar">
                <Link to="/">Projects</Link>
              </div>
              <div className="nav-bar">
                <Link to="/experience">Experience</Link>
              </div>
              <div className="nav-bar">
                <Link to="/skills">Skills</Link>
              </div>
              <div className="nav-bar">
                <Link to="/awards">Awards</Link>
              </div>
              <div className="nav-bar">
                <a href="https://codewithalaa.com/wp-content/uploads/2023/06/CV.pdf">
                  Resume
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 place-items-center text-[26px] p-[20px]">
              <div
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/alaaeldin-mohamed-487911278/"
                  );
                }}
                className="sidenav-sm-logo"
              >
                <a href="https://www.linkedin.com/in/alaaeldin-mohamed-487911278/">
                  <FaLinkedin />
                </a>
              </div>
              <div
                onClick={() => {
                  window.open("https://www.instagram.com/codewithalaa/");
                }}
                className="sidenav-sm-logo"
              >
                <FaInstagram />
              </div>
              <div
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCehiVKabFJeT4i3PhQDQW5A"
                  );
                }}
                className="sidenav-sm-logo"
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
