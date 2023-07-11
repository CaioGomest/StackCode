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
    animaContato.style.height = "160px";
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
//efeito Parallax
window.addEventListener("scroll", function () {
  // Calcula a posição do scroll
  var scrollPosition = window.pageYOffset;

  // Aplica o efeito paralaxe às camadas
  var parallaxLayers = document.querySelectorAll(".parallax-layer");
  for (var i = 0; i < parallaxLayers.length; i++) {
    var speed = parallaxLayers[i].getAttribute("data-speed");
    parallaxLayers[i].style.transform =
      "translateY(" + scrollPosition * speed + "px)";
  }
});
