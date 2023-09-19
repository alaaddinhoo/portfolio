import React, { useState, useEffect, useRef } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FiSun, FiMoon } from "react-icons/fi";

const Theme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("selectedTheme") === "dark" ? "Light" : "Dark"
  );

  const iconRef = useRef();

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setTheme("Light");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setTheme("Dark");
    localStorage.setItem("selectedTheme", "light");
  };

  useEffect(() => {
    if (theme === "Light") {
      setDarkMode();
    }
  }, []);

  const toggleTheme = (e) => {
    if (iconRef.current.children[0].classList.contains("fi-sun"))
      setLightMode();
    else setDarkMode();
  };

  return (
    <div className="hover:cursor-pointer" onClick={toggleTheme}>
      <div className="flex items-center">
        <div className="pr-[10px]"> {theme} </div>

        <div className="Theme" ref={iconRef}>
          {theme === "Light" ? (
            <BsSun className="fi-sun text-[20px] md:text-[20px]" />
          ) : (
            <BsMoonStars className="fi-moon text-[20px] md:text-[20px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Theme;
