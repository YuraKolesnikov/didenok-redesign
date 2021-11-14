const hamburger = document.querySelector('.js-hamburger');
const navbar = document.querySelector('.js-navbar');
const logo = document.querySelector('.js-logo');

hamburger.addEventListener('change', e => {
	if (e.target.checked) {
		navbar.classList.add('header__navbar--visible');
  } else {
    navbar.classList.remove('header__navbar--visible');
  }
})