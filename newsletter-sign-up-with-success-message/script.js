const form = document.querySelector(".newsletter-form");
const modalOverlay = document.querySelector(".modal-overlay");
const modalMessage = document.querySelector(".modal-message");
const input = document.querySelector("#inputEmail");
const btnSubscribe = document.querySelector("#btnSubscribe");
const message = document.querySelector("#message");
const btnDismiss = document.querySelector("#btnDismiss");
let timer1;
// check for valid email
let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
// let testEmail = "dupa@gmail.com";
// console.log(regex.test(testEmail)); // true

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (regex.test(input.value)) {
    console.log("OK");
    message.innerHTML = `A confirmation email has been sent to <b>${input.value}</b>. Please open it and click the button inside to confirm your subscription.`;
    showModal();
  } else {
    input.classList.add("inputError");
    setTimeout(inputToggle, 3000);
  }
});

btnDismiss.addEventListener("click", () => {
  hideModal();
});

function showModal() {
  modalOverlay.style.visibility = "visible";
  modalOverlay.style.zIndex = "99";
  modalMessage.style.visibility = "visible";
  modalMessage.style.zIndex = "99";
}

function hideModal() {
  modalOverlay.style.visibility = "hidden";
  modalOverlay.style.zIndex = "-999";
  modalMessage.style.visibility = "hidden";
  modalMessage.style.zIndex = "-999";
}

function inputToggle() {
  input.classList.toggle("inputError");
}
