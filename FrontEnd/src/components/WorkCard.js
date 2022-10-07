import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgSrc} alt="project" />
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
        <p>{props.text}</p>
        <div className="project-btn">
          <a
            href={props.liveView}
            target="_blank"
            className="btn"
            rel="noreferrer noopener"
          >
            {" "}
            Live view
          </a>
          <a
            href={props.github}
            target="_blank"
            className="btn"
            rel="noreferrer noopener"
          >
            {" "}
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
