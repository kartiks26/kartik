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
          <a>
            <img src="/assets/instagram.svg" />
          </a>
          <a>
            <img src="/assets/github.svg" />
          </a>
          <a>
            <img src="/assets/twitter.svg" />
          </a>
          <a>
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
