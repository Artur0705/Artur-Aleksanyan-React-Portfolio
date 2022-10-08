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
        text="Hi, my name is Artur. I'm a current student of Monash university coding Bootcamp learning Full-Stack development."
      />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default About;
