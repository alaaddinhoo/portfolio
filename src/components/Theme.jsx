import React, { useState, useEffect } from "react";
import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";

const Theme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("selectedTheme") === "dark" ? "Light" : "Dark"
  );

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
    console.log(e.target.innerText);
    if (e.target.innerText === "Light") setLightMode();
    else setDarkMode();
  };

  return (
    <div className="Theme" onClick={toggleTheme}>
      <div> {theme}</div>
      {/* <BsLightningCharge /> */}
    </div>
  );
};

export default Theme;
