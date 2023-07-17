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

//-----------------------------------------------efeito "Parallax"!
document.addEventListener("DOMContentLoaded", function () {
  function verificaElementos() {
    var alturaJanela = window.innerHeight;
    var elementos = document.querySelectorAll(".elemento");

    // Converte a NodeList em um array e percorre os elementos
    Array.from(elementos).forEach(function (elemento) {
      var posicaoElemento = elemento.getBoundingClientRect().top;

      if (posicaoElemento - alturaJanela <= 0) {
        elemento.classList.add("animado");
      }
    });
  }

  verificaElementos(); // Verifica se os elementos estão visíveis ao carregar a página

  window.addEventListener("scroll", verificaElementos); // Verifica a cada rolagem
});
