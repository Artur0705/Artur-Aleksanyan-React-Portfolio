import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Work from "../components/Work";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
