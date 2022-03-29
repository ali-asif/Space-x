import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* <span className="developer-info">Developer: Junaid Qureshi</span> */}
      <div className="icons-container">
        <a
          title="github"
          rel="noreferrer"
          href="https://github.com/ali-asif"
        >
          <i className="fab fa-github icon"></i>
        </a>
        <a
          title="linkedIn"
          rel="noreferrer"
          href="https://www.linkedin.com"
        >
          <i className="fab fa-linkedin-in icon"></i>
        </a>
        <a
          title="facebook"
          rel="noreferrer"
          href="https://www.facebook.com"
        >
          <i className="fab fa-facebook-f icon"></i>
        </a>
      </div>
    </div>
  );
}
