import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>Made with 💕 by Ranita Saha</div>
      <div className="link-social">
        <a
          href="https://github.com/ranitasahaa1230/talk-it-out"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-pills"
        >
          <i className="fab fa-github icon"></i>
        </a>
        <a
          href="https://twitter.com/Ifullofsunshine"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-pills"
        >
          <i className="fab fa-twitter icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/saharanitaa1230dreamer/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-pills"
        >
          <i className="fab fa-linkedin icon"></i>
        </a>
      </div>
      <span className="footer-copyright">© 2022 || Safarnama</span>
    </footer>
  );
};