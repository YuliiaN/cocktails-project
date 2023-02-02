import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import saveFavCocktails from './add-local-storage';
import { loading, loadingStop } from './loading';

const apiQuery = new CocktailApi();

refs.form.addEventListener('submit', onChangeGetName);

function onChangeGetName(e) {
  e.preventDefault();
  getCertainCocktail(refs.input.value);
  e.currentTarget.reset();
}

async function getCertainCocktail(name) {
  try {
    loading();
    const cocktails = await apiQuery.getCocktailByName(name);
    if (!cocktails) {
      notFound();
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
