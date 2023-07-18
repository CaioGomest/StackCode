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

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = carousel.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  }

  function goToPrevSlide() {
    currentIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  }

  function goToNextSlide() {
    currentIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  }

  prevButton.addEventListener("click", goToPrevSlide);
  nextButton.addEventListener("click", goToNextSlide);
});

const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () => {
  current = current > 0 ? current - 1 : slides.length - 1;
  updateIndexes();
  gotoNum(current);
};

const gotoNext = () => {
  current = current < slides.length - 1 ? current + 1 : 0;
  updateIndexes();
  gotoNum(current);
};

const updateIndexes = () => {
  prev = current - 1 >= 0 ? current - 1 : slides.length - 1;
  next = current + 1 < slides.length ? current + 1 : 0;
};

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  // Verifique se os índices estão dentro dos limites válidos
  if (prev < 0) {
    prev = slides.length - 1;
  }

  if (next >= slides.length) {
    next = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.remove("prev");
    slides[i].classList.remove("next");
  }

  slides[current].classList.add("active");
  slides[prev].classList.add("prev");
  slides[next].classList.add("next");

  // Remova a classe "next" do slide atual, exceto quando for o último slide
  if (current !== slides.length - 1) {
    slides[current].classList.remove("next");
  }

  console.log(next);
};

// Atualize os índices prev e next para lidar corretamente com o último slide
prev = current === 0 ? slides.length - 1 : current - 1;
next = current === slides.length - 1 ? 0 : current + 1;

// Atualize os índices prev e next para lidar corretamente com o último slide
prev = slides.length - 1;
next = current + 1;

// alteraçao do email para mobile

var email = document.querySelector(".contato-email");
if (window.matchMedia("(max-width: 900px)").matches) {
  email.href = "mailto:stackcode.dev@gmail.com";
  email.target = "_blank";
}
