var btnBurger = document.querySelector(".lineBurger");
var btnClose = document.querySelector(".closeX");
var sideBar = document.querySelector(".sideBar");
btnBurger.addEventListener("click", () => {
  sideBar.style.transition = "0.3s";
  sideBar.style.width = "100vw";
});
btnClose.addEventListener("click", () => {
  sideBar.style.transition = "0.3s";
  sideBar.style.width = "0vw";
});
