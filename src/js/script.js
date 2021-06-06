let yellow = "#fdd805";
let grey = "#8f8f9b";
let primary = "#2d2d44";

let header = document.querySelector('header');
let footer = document.querySelector(".footer");
let burgerBtn = document.querySelector('.menu');


// header opacity

window.onscroll = function () {
	if (window.pageYOffset > 100) {
    header.style.opacity = "0.95";
  } else {
    header.style.opacity = "1";
  }
};


// burger menu open

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
    footer.style.filter = "blur(5px)";
  } else {
		document.body.style.overflow = "";
		// убираем компенсацию скролла
    body.style.paddingRight = "0px";
    header.style.paddingRight = "0px";
		footer.style.filter = "none";
  }
});


// modal box

let body = document.body;
let modalSection = document.querySelector('.modal');
let addBtn = document.querySelector('.add-button');
let cancelBtn = modalSection.querySelector('.modal__button--cancel');
let inputBoxes = modalSection.querySelectorAll('.modal__forms-text');
let inputFile = modalSection.querySelector('.modal__forms-text');
let checkboxSnow =  document.querySelector('.modal__forms-checkbox');
let submitBtn = document.querySelector('.modal__button--ok');
let uploadFields = document.querySelectorAll('.upload-btn__input');

addBtn.addEventListener('click', function() {
	modalSection.classList.add('modal--show');
	document.body.style.overflow = "hidden";
	header.style.filter = "blur(5px)";
	footer.style.filter = "blur(5px)";
	
  let paddingOffset = window.innerWidth - body.offsetWidth + "px";
	
	body.style.paddingRight = paddingOffset;
  header.style.paddingRight = paddingOffset;
})

cancelBtn.addEventListener('click', function() {

	modalSection.classList.remove('modal--show');
	header.style.filter = "none";
	footer.style.filter = "none";
	
	document.body.style.overflow = "";
  body.style.paddingRight = "0px";
  header.style.paddingRight = "0px";

	for (let inputBox of inputBoxes) {
		inputBox.style.borderColor = grey;
	}
	
	for (let uploadField of uploadFields) {
		uploadField.value = "";
		
		let label = uploadField.nextElementSibling;
		label.style.color = grey;
		label.querySelector('.upload-btn__label-box').innerText = 'No file chosen';
		label.querySelector('.upload-btn__label-btn').
			style.backgroundColor = primary;
	}
})


for (let inputBox of inputBoxes) {
	inputBox.oninput = function() {
		if (inputBox.value.length > 1) {
			inputBox.style.borderColor = yellow;
		} else {
			inputBox.style.borderColor = grey;
		}
	}
}

// Modal checkbox


checkboxSnow.addEventListener('click', function() {
	if (checkboxSnow.checked) {
		submitBtn.disabled = false;
	} else {
		submitBtn.disabled = true;
	}
})

// File upload
    Array.prototype.forEach.call(uploadFields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.upload-btn__label-box').innerText;
  
      input.addEventListener('change', function (e) {
				let uploadBtn = label.querySelector('.upload-btn__label-btn');
				let uploadBox = label.querySelector('.upload-btn__label-box');
				

        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
					label.style.color = yellow;
					uploadBtn.style.backgroundColor = yellow;
					uploadBox.style.borderColor = yellow;
  
        if (countFiles)
          label.querySelector('.upload-btn__label-box').innerText = 'Files: ' + countFiles;
        else
          label.querySelector('.upload-btn__label-box').innerText = labelVal;
      });
    });