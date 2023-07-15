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
document.addEventListener("DOMContentLoaded", function () {
  var elementos = document.querySelectorAll(".elemento");

  function verificaElementos() {
    var alturaJanela = window.innerHeight;

    elementos.forEach(function (elemento) {
      var posicaoElemento = elemento.getBoundingClientRect().top;

      if (posicaoElemento - alturaJanela <= 0) {
        elemento.classList.add("animado");
      }
    });
  }

  verificaElementos(); // Verifica se os elementos estão visíveis ao carregar a página

  window.addEventListener("scroll", verificaElementos); // Verifica a cada rolagem
});
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = slides.length - 1;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () =>
  current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  if (next == slides.length) {
    next = 0;
  }

  if (prev == -1) {
    prev = slides.length - 1;
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");
};
