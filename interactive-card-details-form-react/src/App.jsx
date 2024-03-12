import { useState, useEffect } from "react";

import "./App.css";
import Form from "./Components/Form";
import CardFront from "./Components/CardFront";
import CardBack from "./Components/CardBack";
import Modal from "./Components/Modal";

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <>
      <div className="content-container-wrap">
        <div className="content-container">
          {windowSize < 1024 && (
            <div className="bg-mobile">
              <div className="cards-wrap">
                <CardFront
                  formData={[name, number, month, year, cvc]}
                  setFormData={[setName, setNumber, setMonth, setYear, setCvc]}
                />
                <CardBack
                  formData={[name, number, month, year, cvc]}
                  setFormData={[setName, setNumber, setMonth, setYear, setCvc]}
                />
              </div>
            </div>
          )}
          {windowSize >= 1024 && (
            <>
              <div className="bg-desktop"></div>
              <div className="cards-wrap2">
                <CardFront
                  formData={[name, number, month, year, cvc]}
                  setFormData={[setName, setNumber, setMonth, setYear, setCvc]}
                />
                <CardBack
                  formData={[name, number, month, year, cvc]}
                  setFormData={[setName, setNumber, setMonth, setYear, setCvc]}
                />
              </div>
            </>
          )}

          <div className="grid-center">
            {!isModal ? (
              <Form
                isModal={isModal}
                setIsModal={setIsModal}
                formData={[name, number, month, year, cvc]}
                setFormData={[setName, setNumber, setMonth, setYear, setCvc]}
              />
            ) : (
              <Modal isModal={isModal} setIsModal={setIsModal} />
            )}
          </div>
        </div>
      </div>
      <div class="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#https://github.com/wjkba">wjkba</a>.
      </div>
    </>
  );
}

export default App;
