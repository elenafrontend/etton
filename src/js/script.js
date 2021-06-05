// header opacity

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    header.style.opacity = "0.95";
  } else {
    header.style.opacity = "1";
  }
};


// burger menu open

let burgerBtn = document.querySelector('.menu');
let header = document.querySelector('header');

burgerBtn.addEventListener("click", function () {
  header.classList.toggle("header--active-nav");

	// ширина скролла
  let body = document.body;
  let paddingOffset = window.innerWidth - body.offsetWidth + "px";

  // блокируем/возобновляем скролл страницы
  if (header.classList.contains("header--active-nav")) {
    document.body.style.overflow = "hidden";
		// убираем скачок страницы - компенсируем скролл
    body.style.paddingRight = paddingOffset;
    header.style.paddingRight = paddingOffset;
  } else {
    document.body.style.overflow = "";
		// убираем компенсацию скролла
    body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
  }

	



});