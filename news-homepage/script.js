const btnOpen = document.getElementById("btnOpen");
const btnClose = document.getElementById("btnClose");
const navList = document.querySelector(".nav__list");

btnOpen.addEventListener("click", () => {
  navList.classList.remove("hide");
  navList.classList.add("nav__list-mobile--show");
});

btnClose.addEventListener("click", () => {
  navList.classList.remove("nav__list-mobile--show");
  navList.classList.add("hide");
});
