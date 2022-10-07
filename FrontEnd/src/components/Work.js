import React from "react";
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkData from "./WorkData";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkData.map((value, index) => {
          return (
            <WorkCard
              key={index}
              imgSrc={value.imgSrc}
              title={value.title}
              text={value.text}
              liveView={value.liveView}
              github={value.github}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
