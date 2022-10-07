import React, { useState } from "react";
import "./ContactFormStyles.css";
import axios from "axios";

const ContactForm = () => {
  const defaultForm = {
    name: "",
    email: "",
    message: "",
  };
  const [form, setForm] = useState(defaultForm);

  const sendForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/contact", form);
    setForm(defaultForm);
  };

  const onInputCHange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form">
      <form onSubmit={sendForm}>
        <label>Your Name</label>
        <input type="text" name="name" onChange={onInputCHange} />
        <label>Email</label>
        <input type="email" name="email" onChange={onInputCHange} />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Please enter your message"
          name="message"
          onChange={onInputCHange}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
