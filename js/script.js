const btn = document.querySelector('.js-btn');
const list = document.querySelector('.js-list');
const burger = document.querySelector('.js-burger');

burger.addEventListener('click', () => {
  list.classList.toggle('content__list--is-hidden');
  list.classList.contains('content__list--is-hidden')
    ? btn.setAttribute('aria-expanded', 'false')
    : btn.setAttribute('aria-expanded', 'true');
});
