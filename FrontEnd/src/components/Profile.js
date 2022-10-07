import "./ProfileStyles.css";
import React from "react";
import Typical from "react-typical";
import BackgroundImg from "../assets/myphoto1.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile">
      <div className="mask">
        <img
          className="background-img"
          src={BackgroundImg}
          alt="background-img"
        />

        <div className="content">
          <h1>
            <Typical loop={1} steps={["Hello, I'm Artur Aleksanyan"]} />
          </h1>

          <Typical
            loop={Infinity}
            steps={[
              "Full Stack Developer 💻",
              1000,
              "MERN Stack Developer 👌",
              1000,
              "React Develeoper 👨‍💻",
              1000,
            ]}
          />
          <div className="buttons">
            <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="contact-btn">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
