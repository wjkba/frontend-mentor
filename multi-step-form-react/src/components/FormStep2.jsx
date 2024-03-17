import Switch from "react-switch";
function FormStep2({ isMonthly, setIsMonthly, selectedPlan, setSelectedPlan }) {
  return (
    <div className="form-step step2">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="step2-plans">
        <div
          onClick={() => setSelectedPlan(1)}
          className={selectedPlan == 1 ? "step2-plan active" : "step2-plan"}
        >
          <img src="/images/icon-arcade.svg" alt="" />
          <div className="step2-plan__details">
            <p>Arcade</p>
            {isMonthly ? <p>$9/mo</p> : <p>$90/yr</p>}
            {!isMonthly && <p>2 months free</p>}
          </div>
        </div>
        <div
          onClick={() => setSelectedPlan(2)}
          className={selectedPlan == 2 ? "step2-plan active" : "step2-plan"}
        >
          <img src="/images/icon-advanced.svg" alt="" />
          <div className="step2-plan__details">
            <p>Advanced</p>
            {isMonthly ? <p>$12/mo</p> : <p>$120/yr</p>}
            {!isMonthly && <p>2 months free</p>}
          </div>
        </div>
        <div
          onClick={() => setSelectedPlan(3)}
          className={selectedPlan == 3 ? "step2-plan active" : "step2-plan"}
        >
          <img src="/images/icon-pro.svg" alt="" />
          <div className="step2-plan__details">
            <p>Pro</p>
            {isMonthly ? <p>$15/mo</p> : <p>$150/yr</p>}
            {!isMonthly && <p>2 months free</p>}
          </div>
        </div>
      </div>
      <div className="step2-toggle">
        {isMonthly ? (
          <p className="billing--selected">Monthly</p>
        ) : (
          <p>Monthly</p>
        )}
        <label className="switch">
          <input
            checked={!isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
            id="input-toggle"
            type="checkbox"
          />
          <span className="slider round"></span>
        </label>
        {!isMonthly ? (
          <p className="billing--selected">Yearly</p>
        ) : (
          <p>Yearly</p>
        )}
      </div>
    </div>
  );
}
export default FormStep2;
