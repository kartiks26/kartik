import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="Footer">
      <div className="FooterSocialIcons">
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
          <img src="/assets/linkedIn.svg" />
        </a>
      </div>
      <h6> @ 2022 - Kartik</h6>
    </div>
  );
}

export default Footer;
