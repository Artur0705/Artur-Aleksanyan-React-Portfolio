import React from "react";
import Typical from "react-typical";
import "./Mainstyles.css";

const Main = (props) => {
  return (
    <div className="main">
      <div className="heading">
        <h1>{props.heading}</h1>
        <Typical className="about-text" loop={1} steps={props.text} />
      </div>
    </div>
  );
};

export default Main;
