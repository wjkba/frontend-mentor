import { useEffect, useState } from "react";

function Form({ formData, setFormData, isModal, setIsModal }) {
  const [name, number, month, year, cvc] = formData;
  const [setName, setNumber, setMonth, setYear, setCvc] = setFormData;
  const handleNameChange = (e) => {
    let v = onlyLetters(e.target.value);
    setName(v);
  };
  const handleNumberChange = (e) => {
    let value = onlyNumbers(e.target.value); // Remove non-numeric characters
    value = value.replace(/(.{4})/g, "$1 ").trim(); // Add a space every 4 characters
    setNumber(value);
  };
  const handleMonthChange = (e) => {
    let value = onlyNumbers(e.target.value);
    setMonth(value);
  };
  const handleYearChange = (e) => {
    let value = onlyNumbers(e.target.value);
    setYear(value);
  };
  const handleCvcChange = (e) => {
    let value = onlyNumbers(e.target.value);
    setCvc(value);
  };
  const handleConfirm = (e) => {
    e.preventDefault();

    checkEmpty(name, "card-name");
    checkEmpty(number, "card-number");
    checkEmpty(month, "card-month");
    checkEmpty(year, "card-year");
    checkEmpty(cvc, "card-cvc");
    if (
      name.length > 3 &&
      number.length === 19 &&
      month.length === 2 &&
      year.length === 2 &&
      cvc.length === 3
    ) {
      setIsModal(true);
    }
  };
  const handleFocus = (e) => {
    if (e.target.nextElementSibling != null) {
      e.target.classList.remove("input-error");
      e.target.nextElementSibling.remove();
    } else {
      void 1;
    }
  };

  return (
    <>
      <form className="form">
        <div className="card-holder">
          <p>CARDHOLDER NAME</p>
          <input
            id="card-name"
            onFocus={handleFocus}
            onChange={handleNameChange}
            placeholder="e.g. Jan Kowalski"
            value={name}
            maxLength={50}
          />
        </div>
        <div className="card-number">
          <p>CARD NUMBER</p>
          <input
            id="card-number"
            onFocus={handleFocus}
            onChange={handleNumberChange}
            placeholder="e.g. 1234 5678 9123 0000"
            value={number}
            maxLength={19}
          />
        </div>
        <div className="exp-cvc">
          <div className="exp-date">
            <p>EXP. DATE (MM/YY)</p>
            <div>
              <div className="exp-input-wrap">
                <input
                  id="card-month"
                  value={month}
                  onFocus={handleFocus}
                  onChange={handleMonthChange}
                  placeholder="MM"
                  maxLength={2}
                />
              </div>
              <div className="exp-input-wrap">
                <input
                  id="card-year"
                  value={year}
                  onFocus={handleFocus}
                  onChange={handleYearChange}
                  placeholder="YY"
                  maxLength={2}
                />
              </div>
            </div>
          </div>
          <div className="cvc">
            <p>CVC</p>
            <input
              id="card-cvc"
              value={cvc}
              onFocus={handleFocus}
              onChange={handleCvcChange}
              placeholder="e.g. 123"
              maxLength={3}
            />
          </div>
        </div>
        <button className="button-purple" onClick={(e) => handleConfirm(e)}>
          Confirm
        </button>
      </form>
    </>
  );
}

function inputError(id, message) {
  let target = document.getElementById(id);
  if (target.nextElementSibling != null) {
    void 1;
  } else {
    target.classList.add("input-error");
    const errorLabel = document.createElement("p");
    errorLabel.textContent = message;
    errorLabel.classList.add("error-label");
    target.parentNode.append(errorLabel);
  }
}
function onlyLetters(value) {
  return value.replace(/[^A-Za-z\s]/g, "");
}
function onlyNumbers(value) {
  return value.replace(/\D/g, "");
}
function checkEmpty(x, id) {
  if (x === "") {
    inputError(id, "Can't be blank");
  }
}
export default Form;
