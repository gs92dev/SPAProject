var current = 0,
  slides = document.getElementsByClassName("slides");

setInterval(function () {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = current != slides.length - 1 ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 5000);

let letter = document.getElementById("letter");
let close = document.querySelector("[data-letter=close]");
console.log(close);
window.onload = function () {
  setTimeout(() => {
    letter.classList.remove("none");
  }, 3000);
};
close.onclick = function () {
  letter.classList.add("none");
};
