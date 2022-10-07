import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Main heading="Contact Me 📧" text="Plese fill the form to contact me 🤝" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
