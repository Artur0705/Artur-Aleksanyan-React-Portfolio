import React from "react";
import "./AboutMeStyles.css";
import { Link } from "react-router-dom";

import myPhoto2 from "../assets/myphoto2.jpg";
import myPhoto1 from "../assets/myphoto1.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hello</h1>
        <p>Test text</p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="my-img top">
            <img src={myPhoto2} className="img" alt="Artur Aleksanyan" />
          </div>
          <div className="my-img bottom">
            <img src={myPhoto1} className="img" alt="Artur Aleksanyan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
