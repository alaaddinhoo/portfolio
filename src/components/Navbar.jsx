import React from "react";
import logo from "../assets/my-logo.png";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { openNav, closeNav } from "../index";

const Navbar = () => {
  return (
    <div>
      <ul className="h-[100px] max-w-[600px] mx-auto hidden font-Franklin font-medium md:block">
        <li>
          <Link to="/">Projects</Link>
          <span></span>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
          <span></span>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
          <span></span>
        </li>
        <li>
          <Link to="/awards">Awards</Link>
          <span></span>
        </li>
      </ul>

      <div className="flex justify-end mt-4 mr-12 md:hidden">
        <HiBars3BottomRight onClick={openNav} className="text-5xl" />
      </div>

      <div id="side-menu" className="sidenav">
        <div className="h-[100%] w-[100%]">
          <div>
            <div className="sidenav-section">
              <div className="nav-bar">
                <a href="#projects">Projects</a>
              </div>
              <div className="nav-bar">
                <a href="https://www.udemy.com/course/the-ultimate-c-beginner-course/?referralCode=482084699099CBBFBF99">
                  Udemy
                </a>
              </div>
              <div className="nav-bar">
                <a href="https://www.skillshare.com/en/r/profile/Alaaeldin-Mohamed/867765563?gr_tch_ref=on">
                  Skillshare
                </a>
              </div>
              <div className="nav-bar">
                <a href="https://www.fiverr.com/alaaeldin92">Freelancing</a>
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
