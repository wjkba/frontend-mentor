import { useState } from "react";

function FormStep1({ name, setName, email, setEmail, phone, setPhone }) {
  const handleNameChange = (e) => {
    let value = onlyLetters(e.target.value);
    setName(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    let value = onlyNumbers(e.target.value);
    setPhone(value);
  };
  const handleInputFocus = (e) => {
    e.target.classList.remove("input--error");
    if (e.target.parentNode.children[0].childNodes.length > 1) {
      e.target.parentNode.children[0].children[1].remove();
    }
  };
  return (
    <div className="form-step step1">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <label htmlFor="name">
        <div>
          <p>Name</p>
        </div>
        <input
          onFocus={handleInputFocus}
          value={name}
          onChange={handleNameChange}
          placeholder="e.g. Jan Kowalski"
          type="text"
          id="name"
        />
      </label>

      <label htmlFor="email">
        <div>
          <p>Email address</p>
        </div>
        <input
          onFocus={handleInputFocus}
          value={email}
          onChange={handleEmailChange}
          placeholder="e.g. jankowalski@wp.pl"
          type="text"
          id="email"
        />
      </label>

      <label htmlFor="phone">
        <div>
          <p>Phone Number</p>
        </div>
        <input
          onFocus={handleInputFocus}
          value={phone}
          onChange={handlePhoneChange}
          placeholder="e.g. 123 456 789"
          type="text"
          id="phone"
        />
      </label>
    </div>
  );
  function onlyLetters(value) {
    return value.replace(/[^A-Za-z\s]/g, "");
  }
  function onlyNumbers(value) {
    return value.replace(/\D/g, "");
  }
}
export default FormStep1;
