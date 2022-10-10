import React, { useState } from "react";
import "./ContactFormStyles.css";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert";
import { omit } from "lodash";

const ContactForm = () => {
  const defaultForm = {
    name: "",
    email: "",
    message: "",
  };
  const [input, setInput] = useState(defaultForm);
  const [swal, setSwal] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case "name":
        if (value.length <= 3) {
          setErrors({
            ...errors,
            name: "Name must be minimum 3 characters",
          });
        } else {
          let newObj = omit(errors, "name");
          setErrors(newObj);
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Please enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "message":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            message: "Minimum 5 characters required",
          });
        } else {
          let newObj = omit(errors, "message");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
    validate(e, e.currentTarget.name, e.currentTarget.value);
  };

  const hideAlert = () => {
    setSwal(false);
  };

  const sendForm = async (e) => {
    e.preventDefault();
    let error = false;
    for (let prop in input) {
      if (input[prop]?.length === 0) {
        error = true;
      }
    }
    if (Object.keys(errors).length === 0 && !error) {
      setInput(defaultForm);
      setSwal(true);

      await axios
        .post(
          "https://artur-aleksanyan-portfolio.herokuapp.com/contact",
          input,
          {}
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="form">
      {swal && (
        <SweetAlert
          success
          title="Your message has been sent!"
          onConfirm={hideAlert}
        >
          Thank you for contacting me
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
        {errors.name && <h3>{errors.name}</h3>}
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />
        {errors.email && <h3>{errors.email}</h3>}
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Please enter your message"
          name="message"
          value={input.message}
          onChange={handleChange}
        />
        {errors.message && <h3>{errors.message}</h3>}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
