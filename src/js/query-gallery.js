import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import saveFavCocktails from './add-local-storage';
import { loading, loadingStop } from './loading';
import { hideBurgerMenu } from './modals/burger-menu';

const apiQuery = new CocktailApi();

refs.form.forEach(item => item.addEventListener('submit', onChangeGetName));

function onChangeGetName(e) {
  e.preventDefault();
  if (e.currentTarget.classList.contains('header__search-wrapper')) {
    const input = document.querySelector('.header__search.js-input');
    getCertainCocktail(input.value);
  } else {
    const mobInput = document.querySelector('.burger-menu__search');
    getCertainCocktail(mobInput.value);
    hideBurgerMenu();
  }
  e.currentTarget.reset();
}

async function getCertainCocktail(name) {
  try {
    loading();
    const cocktails = await apiQuery.getCocktailByName(name);
    if (!cocktails) {
      notFound();
      loadingStop();
      return;
    }
    found();
    refs.gallery.innerHTML = renderCardDrink(cocktails).join('');
    loadingStop();

    const galleryButtons = document.querySelectorAll('.gallery__buttons');
    galleryButtons.forEach(item =>
      item.addEventListener('click', saveFavCocktails)
    );
  } catch (error) {
    console.log(error);
  }
}

export function notFound() {
  refs.galleryTitle.textContent = `Sorry, we didn't find any cocktail for you`;
  refs.gallery.innerHTML = '';
  refs.galleryNotFound.classList.remove('is-hidden');
}

export function found() {
  refs.galleryTitle.textContent = 'Cocktails';
  refs.galleryNotFound.classList.add('is-hidden');
}
