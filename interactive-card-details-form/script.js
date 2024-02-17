const inputName = document.querySelector("#inputName");
const inputNumber = document.querySelector("#inputNumber");
const inputMonth = document.querySelector("#inputMonth");
const inputYear = document.querySelector("#inputYear");
const inputCVC = document.querySelector("#inputCVC");
const btnConfirm = document.querySelector("#btnConfirm");
const btnContinue = document.querySelector("#btnContinue");
const form = document.querySelector(".card__details");
const cardMessage = document.querySelector(".card__message");

const frontName = document.getElementById("front__Name");
const frontNumber = document.getElementById("front__Number");
const frontDate = document.getElementById("front__Date");
const backCVC = document.getElementById("back_CVC");

const allInputs = [inputName, inputNumber, inputMonth, inputYear, inputCVC];
const numInputs = [inputMonth, inputYear, inputCVC];

let date = new Date();

form.addEventListener("submit", (e) => [e.preventDefault()]);

for (const i of allInputs) {
  i.addEventListener("input", () => {
    resetBorder(i);
    hideError(i);
  });
}

inputNumber.addEventListener("input", function () {
  let value = inputNumber.value.replace(/\D/g, ""); // Remove non-numeric characters
  value = value.replace(/(.{4})/g, "$1 ").trim(); // Add a space every 4 characters
  inputNumber.value = value;
});

for (const i of numInputs) {
  i.addEventListener("input", () => {
    onlyNum(i);
  });
}

btnConfirm.addEventListener("click", () => {
  let filled = checkBlank();
  let name = checkName();
  let num = checkNumber();
  let exp = checkExp();
  let cvc = checkCVC();
  if (filled && name && num && exp && cvc) {
    toggleForm();
    frontName.textContent = inputName.value;
    frontNumber.textContent = inputNumber.value;
    frontDate.textContent = `${inputMonth.value}/${inputYear.value}`;
    backCVC.textContent = inputCVC.value;
  }
});

btnContinue.addEventListener("click", () => {
  toggleForm();
  window.location.reload();
});

function checkBlank() {
  for (const i of allInputs) {
    if (i.value.length === 0) {
      redBorder(i);
      return false;
    } else {
      return true;
    }
  }
}

// STYLE

function redBorder(i) {
  i.style.borderColor = "red";
}
function resetBorder(i) {
  i.style.borderColor = "hsl(270, 63%, 33%)";
}

// CHECKS

function onlyNum(i) {
  let value = i.value.replace(/\D/g, ""); // Remove non-numeric characters
  i.value = value;
}

function onlyChar(i) {
  let value = i.value;
  let containsNumbers = /\d/.test(value);
  if (containsNumbers) {
    return true;
  } else {
    return false;
  }
}

function checkName() {
  if (onlyChar(inputName)) {
    redBorder(inputName);
    errorLabel(inputName, "Wrong format.");
    return false;
  } else {
    return true;
  }
}

function checkNumber() {
  if (inputNumber.value.length < 19) {
    redBorder(inputNumber);
    errorLabel(inputNumber, "Make sure you typed in all 16 numbers.");
    return false;
  } else {
    return true;
  }
}

function checkExp() {
  let bM,
    bY = false;
  if (isNaN(inputMonth.value)) {
    redBorder(inputMonth);
  } else if (inputMonth.value > 12 || inputMonth.value < 1) {
    redBorder(inputMonth);
  } else {
    bM = true;
  }
  if (isNaN(inputYear.value)) {
    redBorder(inputYear);
  } else if (
    inputYear.value > (date.getFullYear() % 100) + 10 ||
    inputYear.value < date.getFullYear() % 100
  ) {
    redBorder(inputYear);
  } else {
    bY = true;
  }
  if (bM && bY) {
    return true;
  } else {
    return false;
  }
}

function checkCVC() {
  if (isNaN(inputCVC.value) || inputCVC.value.length != 3) {
    redBorder(inputCVC);
    errorLabel(inputCVC, "Wrong CVC.");
    return false;
  } else if (inputCVC.value.length === 3) {
    return true;
  }
}

function toggleForm() {
  cardMessage.classList.toggle("visible");
  form.classList.toggle("invisible");
}

function errorLabel(element, text) {
  let parent = element.parentNode;
  if (parent.lastElementChild.classList.contains("error-label")) {
  } else {
    let error = document.createElement("label");
    error.textContent = `${text}`;
    error.style.color = "red";
    error.classList.add("error-label");
    parent.append(error);
  }
}

function hideError(element) {
  try {
    let parent = element.parentNode;
    if (parent.lastElementChild.classList.contains("error-label")) {
      parent.lastElementChild.remove();
    }
  } catch (error) {}
}
