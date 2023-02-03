import { refs } from '../refs';

refs.burgerOpen.addEventListener('click', showBurgerMenu);
refs.burgerClose.addEventListener('click', hideBurgerMenu);

function showBurgerMenu() {
  refs.burgerMenu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

export function hideBurgerMenu() {
  refs.burgerMenu.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
