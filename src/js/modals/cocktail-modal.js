import CocktailApi from '../cocktail-api';
import { refs } from '../refs';
import renderDetailedDrink from '../templates/detailed-drink';
import saveFavCocktails from '../add-local-storage';
import { STORAGE_KEY } from '../add-local-storage';
import { Notify } from 'notiflix';

const apiModal = new CocktailApi();
let id;

refs.gallery.addEventListener('click', showCocktailModal);
refs.cocktailModalBtnClose.addEventListener('click', hideCocktailModal);

function showCocktailModal(e) {
  if (!e.target.hasAttribute('data-cocktail-modal-open')) {
    return;
  }
  id = e.target.closest('li').id;
  getCocktailDetails(id);

  refs.cocktailModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');

  refs.cocktailModal.addEventListener('click', hideByBackdrop);
}

function hideCocktailModal() {
  refs.cocktailModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

async function getCocktailDetails(id) {
  try {
    const data = await apiModal.getCocktailDetailsById(id);
    refs.cocktailContent.innerHTML = renderDetailedDrink(data[0]);
    refs.cocktailModal.id = id;

    const btn = document.querySelector('.btn-add-fav');
    checkBtnStatus(id, btn);
    btn.addEventListener('click', saveFavCocktails);
  } catch (error) {
    console.log(error);
  }
}

function hideByBackdrop(e) {
  if (e.target !== refs.cocktailModal) {
    return;
  }
  hideCocktailModal();
  refs.cocktailModal.removeEventListener('click', hideByBackdrop);
}

export function checkBtnStatus(id, button) {
  if (!localStorage.getItem(STORAGE_KEY)) {
    return;
  }
  const arr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const elem = arr.find(item => item === id);
  if (elem) {
    button.textContent = 'Remove from favorite';
  } else {
    button.textContent = 'Add to favorite';
  }
}
