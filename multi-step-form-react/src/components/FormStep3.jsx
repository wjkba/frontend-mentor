function FormStep3({ isMonthly, addons, setAddons }) {
  return (
    <div className="form-step step3">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="step3-addons">
        <div
          onClick={() => setAddons([!addons[0], addons[1], addons[2]])}
          className={addons[0] ? "step3-addon active" : "step3-addon"}
        >
          <div>
            <input
              checked={addons[0]}
              onChange={() => setAddons([!addons[0], addons[1], addons[2]])}
              type="checkbox"
            />
            <div>
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
          </div>
          {isMonthly ? <p>+1/mo</p> : <p>+10/yr</p>}
        </div>
        <div
          onClick={() => setAddons([addons[0], !addons[1], addons[2]])}
          className={addons[1] ? "step3-addon active" : "step3-addon"}
        >
          <div>
            <input
              checked={addons[1]}
              onChange={() => setAddons([addons[0], !addons[1], addons[2]])}
              type="checkbox"
              name=""
              id=""
            />
            <div>
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          {isMonthly ? <p>+2/mo</p> : <p>+20/yr</p>}
        </div>
        <div
          onClick={() => setAddons([addons[0], addons[1], !addons[2]])}
          className={addons[2] ? "step3-addon active" : "step3-addon"}
        >
          <div>
            <input
              checked={addons[2]}
              onChange={() => setAddons([addons[0], addons[1], !addons[2]])}
              type="checkbox"
              name=""
              id=""
            />
            <div>
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
          </div>
          {isMonthly ? <p>+2/mo</p> : <p>+20/yr</p>}
        </div>
      </div>
    </div>
  );
}
export default FormStep3;
