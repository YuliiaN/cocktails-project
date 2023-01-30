import { refs } from '../refs';

refs.gallery.addEventListener('click', showCocktailModal);
refs.cocktailModalBtnClose.addEventListener('click', hideCocktailModal);

function showCocktailModal(e) {
  if (!e.target.hasAttribute('data-cocktail-modal-open')) {
    return;
  }
  refs.cocktailModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function hideCocktailModal() {
  refs.cocktailModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}
