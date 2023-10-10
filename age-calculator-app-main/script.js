const form = document.querySelector(".form-calculator");
const inputDay = document.querySelector("#inputDay");
const inputMonth = document.querySelector("#inputMonth");
const inputYear = document.querySelector("#inputYear");
const resultDay = document.querySelector(".result__day");
const resultMonth = document.querySelector(".result__month");
const resultYear = document.querySelector(".result__year");
const divError = document.querySelectorAll(".error");
const labelError = document.querySelectorAll(".labelError");
let currentDate, userDate, userYear, userMonth, userDay;
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
currentDate = new Date();
currentDay = currentDate.getDate();
currentMonth = 1 + currentDate.getMonth();
currentYear = currentDate.getFullYear();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clear();
  if (
    inputDay.value <= 31 &&
    inputMonth.value <= 12 &&
    inputYear.value >= 1900
  ) {
    userDate = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);
    userDay = userDate.getDate();
    userMonth = userDate.getMonth();
    userYear = userDate.getFullYear();

    if (userDay > currentDay) {
      currentDay = currentDay - months[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (userMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }

    let rDay = currentDay - userDay;
    let rMonth = currentMonth - userMonth;
    let rYear = currentYear - userYear;

    resultDay.children[0].textContent = rDay;
    resultMonth.children[0].textContent = rMonth;
    resultYear.children[0].textContent = rYear;
  }
  if (inputDay.value == "") {
    inputDay.classList.add("input--error");
    divError[0].children[0].style.visibility = "visible";
    console.log("error");
  }
  if (inputMonth.value == "") {
    inputMonth.classList.add("input--error");
    divError[1].children[0].style.visibility = "visible";
    console.log("error");
  }
  if (inputYear.value == "") {
    inputYear.classList.add("input--error");
    divError[2].children[0].style.visibility = "visible";
    console.log("error");
  } else {
    console.log("error");
  }
});

console.log(divError);

function clear() {
  for (let i = 0; i < 3; i++) {
    labelError[i].style.visibility = "hidden";
    inputDay.classList.remove("input--error");
    inputMonth.classList.remove("input--error");
    inputYear.classList.remove("input--error");
  }
}
