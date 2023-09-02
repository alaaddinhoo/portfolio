import React from "react";
import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";

const Theme = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="Theme">
      <input
        className="theme_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <BsLightningCharge
          className={
            selectedTheme === "light"
              ? "hidden"
              : "absolute right-[0px] top-[10vh]"
          }
        />
        <BsLightningChargeFill
          className={
            selectedTheme === "dark"
              ? "hidden"
              : "absolute right-[0px] top-[10vh]"
          }
        />
      </label>
    </div>
  );
};

export default Theme;
