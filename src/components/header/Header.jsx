import React from "react";
import "./header.scss";
function Header() {
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
        <img src="/assets/moon.svg" />
        <button className="btn">Resume</button>
      </div>
    </div>
  );
}

export default Header;
