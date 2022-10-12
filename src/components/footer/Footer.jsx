import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="Footer">
      <div className="FooterSocialIcons">
        <a href="">
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
      <h6> @ 2022 - Kartik</h6>
    </div>
  );
}

export default Footer;
