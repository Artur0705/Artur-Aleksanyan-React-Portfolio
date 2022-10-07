import React from "react";
import "./AboutMeStyles.css";
import { Link } from "react-router-dom";
import resume from "../assets/artur-resume.pdf";
import myPhoto2 from "../assets/myphoto2.jpg";
import myPhoto1 from "../assets/myphoto1.jpg";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Hello</h1>
        <p className="about-me-text">
          This portfolio is showcasing my skills and you can find some of my
          recent works in the Project section.Feel free to browse my portfolio
          and if you have any questions please contact me via the form provided
          by clicking the button below, also you can see my CV by clicking the
          CV button.
        </p>
        <div className="about-btns">
          <Link to="/contact">
            <button className="about-btn btn">Contact</button>
          </Link>
          <Link to={resume} target="_blank">
            <button className="about-btn btn">CV</button>
          </Link>
        </div>
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
