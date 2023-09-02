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
        <HiBars3BottomRight className="text-5xl" />
      </div>
    </div>
  );
};

export default Navbar;
