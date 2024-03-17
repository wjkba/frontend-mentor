function FormStep4({ selectedPlan, addons, isMonthly, setCurrentStep }) {
  const plans = [
    {
      id: 1,
      name: "Arcade",
      priceM: 9,
      priceY: 990,
    },
    {
      id: 2,
      name: "Advanced",
      priceM: 12,
      priceY: 120,
    },
    {
      id: 3,
      name: "Pro",
      priceM: 15,
      priceY: 150,
    },
  ];
  let selectedAddons = [];
  const checkSelectedAddons = () => {
    let a = [];
    if (addons[0]) {
      a = [...a, { name: "Online service", priceM: 1, priceY: 10 }];
    }
    if (addons[1]) {
      a = [...a, { name: "Larger storage", priceM: 2, priceY: 20 }];
    }
    if (addons[2]) {
      a = [...a, { name: "Customizable profile", priceM: 2, priceY: 20 }];
    }
    selectedAddons = a;
  };
  checkSelectedAddons();

  const selectedPlanName = plans[selectedPlan - 1].name;
  return (
    <div className="form-step step1">
      <h1>Finishing up</h1>
      <p>Double-check if everything looks OK before confirming.</p>
      <div className="step4-checkout">
        <div className="checkout__plan">
          <div>
            <p className="plan__name">
              {isMonthly
                ? `${selectedPlanName} (Monthly)`
                : `${selectedPlanName} (Yearly)`}
            </p>
            <p onClick={() => setCurrentStep(2)} className="plan__change">
              Change
            </p>
          </div>
          <p className="plan__price">
            {isMonthly
              ? `+$${plans[selectedPlan - 1].priceM}/mo`
              : `+$${plans[selectedPlan - 1].priceY}/yr`}
          </p>
        </div>
        <div className="checkout__addons">
          {selectedAddons.map((addon, id) => (
            <div key={id} className="checkout__addon">
              <p>{addon.name}</p>
              <p className="addon__price">
                {isMonthly ? `+$${addon.priceM}/mo` : `+$${addon.priceY}/yr`}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="step4-total">
        <p>Total ({isMonthly ? "per month" : "per year"})</p>
        <p>
          ${getTotalPrice()}
          {isMonthly ? "/mo" : "/yr"}
        </p>
      </div>
    </div>
  );
  function getTotalPrice() {
    let total = 0;
    selectedAddons.forEach((addon) => {
      total += isMonthly ? addon.priceM : addon.priceY;
    });
    total += isMonthly
      ? plans[selectedPlan - 1].priceM
      : plans[selectedPlan - 1].priceY;
    return total;
  }
}
export default FormStep4;
