import React from "react";
import "./AboutMeStyles.css";
import { Link } from "react-router-dom";
import resume from "../assets/artur-resume.pdf";
import myPhoto2 from "../assets/myphoto2.jpg";
import myPhoto1 from "../assets/myphoto1.jpg";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb, SiExpress, SiMysql, SiPwa } from "react-icons/si";
const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="experience">
          <h1 className="experience-heading">
            Here are the short list of my Full-Stack skills.{" "}
          </h1>
          <div className="experience-container">
            <div className="experience-frontend">
              <h3>Front End development</h3>
              <div className="experience-content">
                <div className="experience-details">
                  <h4>HTML</h4>
                  <FaHtml5 className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>Css</h4>
                  <FaCss3 className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>Javascript</h4>
                  <IoLogoJavascript className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>React</h4>
                  <FaReact className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>Bootsrap</h4>
                  <FaBootstrap className="experience-details-icon" />
                </div>
              </div>
            </div>
            <div className="experience-backend">
              <h3>Backend development</h3>
              <div className="experience-content">
                <div className="experience-details">
                  <h4>NodeJs</h4>
                  <FaNodeJs className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>MongoDB</h4>
                  <SiMongodb className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>MySql</h4>
                  <SiMysql className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>Express</h4>
                  <SiExpress className="experience-details-icon" />
                </div>
                <div className="experience-details">
                  <h4>PWA</h4>
                  <SiPwa className="experience-details-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="about-me-text">
          Feel free to browse my portfolio and if you have any questions please
          contact me via the form provided by clicking the button below 👇 also
          you can see my CV by clicking the CV button 👇
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
