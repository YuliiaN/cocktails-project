import { refs } from './refs';

const visible = 'block';
const notVisible = 'none';

refs.burgerOpen.addEventListener('click', onClickBurgerOpen);
refs.burgerClose.addEventListener('click', onClickBurgerClose);

function onClickBurgerOpen(e) {
  e.currentTarget.style.display = notVisible;
  refs.logo.style.display = notVisible;
  refs.burgerMenu.style.display = visible;

  refs.headerSearch.classList.toggle('is-open');
}

function onClickBurgerClose() {
  refs.burgerOpen.style.display = visible;
  refs.logo.style.display = visible;
  refs.burgerMenu.style.display = notVisible;

  refs.headerSearch.classList.toggle('is-open');
}
//
