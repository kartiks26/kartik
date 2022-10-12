import React from "react";
import "./header.scss";
function Header() {
  const handelTheme = () => {
    const body = document.querySelector("body");
  };
  return (
    <div className="header">
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
        <h2>Kartik</h2>
      </div>
      <div className="Navigation">
        <a>
          <h4>Skills</h4>
        </a>
        <a>
          <h4>Projects</h4>
        </a>
        <a>
          <h4>Education</h4>
        </a>
        <a>
          <h4>Experience</h4>
        </a>
      </div>
      <div className="buttons">
        {/* <img src="/assets/moon.svg" onClick={handelTheme} /> */}
        <button
          onClick={() => {
            // download resume
            window.open("/resume.pdf");
          }}
          className="btn"
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Header;
