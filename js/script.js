const list = document.querySelector('.js-list');
const burger = document.querySelector('.js-burger');

burger.addEventListener('click', () =>
  list.classList.toggle('content__list--is-hidden')
);
