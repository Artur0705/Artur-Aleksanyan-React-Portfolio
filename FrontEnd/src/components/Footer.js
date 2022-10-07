import "./FooterStyles.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <div className="home">
              <p>
                <FaHome
                  size={20}
                  style={{ color: "fff", marginRight: "2rem" }}
                />
                Melbourne, Australia
              </p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "fff", marginRight: "2rem" }}
              />
              0421 044 050
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "fff", marginRight: "2rem" }}
              />
              artlil420@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/artur.alexanyan/ "
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaFacebook
                size={30}
                style={{ color: "fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://github.com/Artur0705"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaGithub
                size={30}
                style={{ color: "fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/artur-aleksanyan-b10506137"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <FaLinkedin
                size={30}
                style={{ color: "fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright-icon">
          <FaCopyright size={10} style={{ color: "#fff" }} />
          Artur Aleksanyan
        </p>
      </div>
    </div>
  );
};

export default Footer;
