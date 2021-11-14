const dropdownTrigger = document.querySelector('.js-dropdown-trigger');
const dropdownContent = document.querySelector('.js-dropdown-content');

document.addEventListener('click', e => {
  if (e.target.classList.contains('js-dropdown-trigger')) {
    dropdownContent.classList.add('dropdown__content--visible');
    dropdownTrigger.classList.add('dropdown__trigger--active');
  } else {
    dropdownContent.classList.remove('dropdown__content--visible');
    dropdownTrigger.classList.remove('dropdown__trigger--active');
  }
})