var btnBurger = document.querySelector(".lineBurger");
var btnClose = document.querySelector(".closeX");
var sideBar = document.querySelector(".sideBar");
var body = document.querySelector(".body");
var animaContato = document.querySelector(".animationContato");
var btnContato = document.getElementById("contato-sideBar");

btnContato.addEventListener("click", () => {
  if (animaContato.getAttribute("open") == "false") {
    animaContato.setAttribute("open", "open");
    animaContato.style.transition = ".5s";
    animaContato.style.height = "130px";
  } else {
    animaContato.setAttribute("open", "false");
    animaContato.style.transition = ".5s";
    animaContato.style.height = "0px";
  }
});

btnBurger.addEventListener("click", () => {
  body.style.overflow = "hidden";
  sideBar.style.transition = "0.3s";
  sideBar.style.width = "100vw";
});
btnClose.addEventListener("click", () => {
  sideBar.style.transition = "0.3s";
  sideBar.style.width = "0vw";
  body.style.overflow = "visible";
  animaContato.style.height = "0px";
});
