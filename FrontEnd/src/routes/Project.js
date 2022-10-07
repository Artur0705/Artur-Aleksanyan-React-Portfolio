import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Work from "../components/Work";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Main
        heading="WELCOME TO MY PROJECTS PAGE ✌️"
        text="Please see some of my recent projects 😎"
      />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
