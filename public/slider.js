//Скрипт, що відповідає за слайдер

//Пошук елементів слайдеру на сторінці html
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");


let slideIndex = 1;
showSlides(slideIndex);

//Функція для кнопок переключення слайду
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//Функція для точок переключення слайду
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Функція для слайдера. Відповідає за роботу слайдера. 
function showSlides(n) {
  let i;
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}