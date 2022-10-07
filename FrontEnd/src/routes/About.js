import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import AboutMe from "../components/AboutMe";
const About = () => {
  return (
    <div>
      <Navbar />
      <Main
        heading="ABOUT ME"
        text="Hi, my name is Artur. I'm a current student of Monash university coding Bootcamp learning Full-Stack development.This portfolio is showcasing my skills and you can find some of my recent works in the Project section.Feel free to browse my portfolio and if you have any questions please contact me via the form provided in Contact section"
      />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;
