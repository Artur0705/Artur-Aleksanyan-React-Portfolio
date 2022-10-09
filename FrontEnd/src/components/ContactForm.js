import React, { useState } from "react";
import "./ContactFormStyles.css";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
const ContactForm = () => {
  const defaultForm = {
    name: "",
    email: "",
    message: "",
  };
  const [input, setInput] = useState(defaultForm);
  const [swal, setSwal] = useState(false);

  const handleChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const hideAlert = () => {
    setSwal(false);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    setInput(defaultForm);
    setSwal(true);

    await axios.post("https://artur-aleksanyan-portfolio.herokuapp.com/contact", input);
  };

  return (
    <div className="form">
      {swal && (
        <SweetAlert
          success
          title="Your message has been sent!"
          onConfirm={hideAlert}
        >
          Thank you for contacting me!
        </SweetAlert>
      )}
      <form onSubmit={sendForm}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Please enter your message"
          name="message"
          value={input.message}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
