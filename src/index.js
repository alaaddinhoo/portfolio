import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

export function openNav() {
  document.getElementById("side-menu").style.width = "60vw";
  document.getElementById("side-overlay").style.width = "100vw";

  window.addEventListener("touchstart", function (e) {
    if (document.getElementById("side-overlay").contains(e.target)) {
      closeNav();
    }
  });
}

export function closeNav() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("side-overlay").style.width = "0";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
