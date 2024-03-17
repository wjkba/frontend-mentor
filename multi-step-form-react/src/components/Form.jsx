import { useRef, useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";
import FormStep5 from "./FormStep5";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentStep, setCurrentStep] = useState(5);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const [addons, setAddons] = useState([false, false, false]);
  const isInfoSubmitted = useRef(false);
  const checkEmpty = (x, id) => {
    if (x === "") {
      inputError(id, "This field is required");
      return false;
    } else {
      return true;
    }
  };
  const checkEmail = (x, id) => {
    const regex = new RegExp(
      "^\\w+([-+.]w+)*@\\w+([-.]\\w+)*.\\w+([-.]\\w+)*$"
    );
    if (!regex.test(x)) {
      inputError(id, "email error");
      return false;
    } else {
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // rest of your submit logic
  };
  const handleNextStep = () => {
    // AT FIRST STEP
    if (currentStep === 1) {
      checkEmpty(name, "name");
      checkEmpty(email, "email");
      checkEmpty(phone, "phone");
      checkEmail(email, "email");
      if (
        checkEmpty(name, "name") &&
        checkEmpty(email, "email") &&
        checkEmpty(phone, "phone") &&
        checkEmail(email, "email")
      ) {
        isInfoSubmitted.current = true;

        setCurrentStep(2);
      }
    }
    if (currentStep === 2) {
      setCurrentStep(3);
    }
    if (currentStep === 3) {
      setCurrentStep(4);
    }
    if (currentStep === 4) {
      setCurrentStep(5);
    }
  };

  const handleGoBack = () => {
    if (currentStep > 1) {
      setCurrentStep((s) => s - 1);
    }
  };
  const handleStepChange = (x) => {
    if (isInfoSubmitted.current) {
      setCurrentStep(x);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__route">
        <div onClick={() => handleStepChange(1)} className="route">
          <div
            className={
              currentStep == 1
                ? "route__icon route__icon--active"
                : "route__icon"
            }
          >
            1
          </div>
        </div>
        <div onClick={() => handleStepChange(2)} className="route">
          <div
            className={
              currentStep == 2
                ? "route__icon route__icon--active"
                : "route__icon"
            }
          >
            2
          </div>
        </div>
        <div onClick={() => handleStepChange(3)} className="route">
          <div
            className={
              currentStep == 3
                ? "route__icon route__icon--active"
                : "route__icon"
            }
          >
            3
          </div>
        </div>
        <div onClick={() => handleStepChange(4)} className="route">
          <div
            className={
              currentStep == 4
                ? "route__icon route__icon--active"
                : "route__icon"
            }
          >
            4
          </div>
        </div>
      </div>

      <div className="form__window">
        {currentStep === 1 && (
          <FormStep1
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
        )}
        {currentStep === 2 && (
          <FormStep2
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
            isMonthly={isMonthly}
            setIsMonthly={setIsMonthly}
          />
        )}
        {currentStep === 3 && (
          <FormStep3
            addons={addons}
            setAddons={setAddons}
            isMonthly={isMonthly}
          />
        )}
        {currentStep === 4 && (
          <FormStep4
            selectedPlan={selectedPlan}
            isMonthly={isMonthly}
            addons={addons}
            setCurrentStep={setCurrentStep}
          />
        )}
        {currentStep === 5 && <FormStep5 />}
      </div>

      <div className="form__buttons">
        <button onClick={handleGoBack} className="btn-back">
          Go Back
        </button>
        <button
          onClick={handleNextStep}
          className={!(currentStep === 4) ? "btn-next" : "btn-confirm"}
        >
          {!(currentStep === 4) ? "Next Step" : "Confirm"}
        </button>
      </div>
    </form>
  );

  function inputError(id, message) {
    let target = document.getElementById(id);
    if (target.parentNode.children[0].childNodes.length > 1) {
      void 1;
    } else {
      target.classList.add("input--error");
      const errorLabel = document.createElement("p");
      errorLabel.textContent = message;
      errorLabel.classList.add("error-label");
      target.parentNode.children[0].append(errorLabel);
    }
  }
}
export default Form;
