import React from "react";
import "./Mainstyles.css";

const Main = (props) => {
  return (
    <div className="main">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Main;
