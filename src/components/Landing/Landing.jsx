import React from "react";
import "./Landing.scss";
function Landing() {
  return (
    <div className="Landing">
      <div className="section1">
        <h6>MY NAME IS</h6>
        <h1>
          Kartik <section>Shikhare.</section>
        </h1>
        <p>
          Creative front-end developer with more than +1 years of experience in
          NGO and startups. Proficient in JavaScript and React.
        </p>
        <div className="SocialIcons">
          <a href="http://www.instagram.com/pratikartik" target="_blank">
            <img src="/assets/instagram.svg" />
          </a>
          <a href="https://github.com/kartiks26" target="_blank">
            <img src="/assets/github.svg" />
          </a>
          <a href="https://twitter.com/pratikartik" target="_blank">
            <img src="/assets/twitter.svg" />
          </a>
          <a href="https://www.linkedin.com/in/pratikartik/" target="_blank">
            <img src="/assets/linkedin.svg" />
          </a>
        </div>
      </div>
      <div className="section2">
        <div className="BackgroundClip">
          <img src="https://avatars.githubusercontent.com/u/84696578?v=4" />
        </div>
      </div>
    </div>
  );
}

export default Landing;
