/* script.js */
let slideIndex = 1;
showSlides(slideIndex);

// Controles siguiente/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Control de imagen actual
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}