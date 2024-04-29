import React, { useState } from "react";
import validator from "validator";
import Icon10 from "../Assets/icons/icon10.png?as=webp";
import Icon11 from "../Assets/icons/icon11.png?as=webp";
import wakandaImage from "../Assets/wakanda.png?as=webp";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function onSubmit() {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    if (validator.isEmail(emailValue)) {
      setIsButtonDisabled(true);
      fetch("/saveemails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({ email: emailValue }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Email submitted successfully");
            setEmail("");
            setErrorMessage("");
          } else {
            console.error("Failed to submit email");
          }
        })
        .catch((error) => {
          console.error("Error submitting email:", error);
        })
    } else {
      setErrorMessage("Please enter a valid email address");
    }
  }

  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTACT US</h1>
      <div className="contact-us" style={{ backgroundImage: `url(${wakandaImage})` }}>
        <div>
          <img className="email" src={Icon10} alt="icon 10" />
          <img className="email" src={Icon11} alt="icon 11" />
        </div>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn"
          id="btnsubs"
          onClick={onSubmit}
          disabled={isButtonDisabled}
        >
          Subscribe
        </button>
        {errorMessage && <h6 className="error-message">{errorMessage}</h6>}
      </div>
    </div>
  );
};

export default Contact;