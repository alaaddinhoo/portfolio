import React from "react";
import logo from "../assets/my-logo.png";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    // <div className="Navbar grid grid-cols-4 place-items-center place-content-center h-[100px] max-w-[600px] mx-auto  font-Franklin font-normal">
    //   <Link to="/">Projects</Link>
    //   <Link to="/experience">Experience</Link>
    //   <Link to="/skills">Skills</Link>
    //   <Link to="/awards">Awards</Link>
    // </div>

    <div className="h-[100px] max-w-[600px] mx-auto">
      <ul className="hidden font-Franklin font-medium md:block">
        <li>
          <a href="#">Projects</a>
          <span></span>
        </li>
        <li>
          <a href="#">Experience</a>
          <span></span>
        </li>
        <li>
          <a href="#">Skills</a>
          <span></span>
        </li>
        <li>
          <a href="#">Awards</a>
          <span></span>
        </li>
      </ul>

      <div className="flex justify-end mt-4 mr-12 md:hidden">
        <HiBars3BottomRight className="text-5xl" />
      </div>
    </div>
  );
};

export default Navbar;
