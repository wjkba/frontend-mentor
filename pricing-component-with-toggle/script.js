const inputToggle = document.getElementById("input-toggle");
const basicPrice = document.getElementById("basic-price");
const professionalPrice = document.getElementById("professional-price");
const masterPrice = document.getElementById("master-price");
let price = "annualy";

inputToggle.addEventListener("change", () => {
  if (event.target.checked) {
    basicPrice.textContent = "19.99";
    professionalPrice.textContent = "24.99";
    masterPrice.textContent = "39.99";
  } else {
    basicPrice.textContent = "199.99";
    professionalPrice.textContent = "249.99";
    masterPrice.textContent = "399.99";
  }
});
