import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';

const apiQuery = new CocktailApi();

refs.form.addEventListener('submit', onChangeGetQuery);

function onChangeGetQuery(e) {
  e.preventDefault();
  apiQuery.searchQuery = refs.input.value;
  getCertainCocktail(apiQuery.searchQuery);
  e.currentTarget.reset();
}

async function getCertainCocktail(name) {
  try {
    const cocktails = await apiQuery.getCocktailByName(name);
    if (!cocktails) {
      notFound();
      return;
    }
    found();
    refs.gallery.innerHTML = renderCardDrink(cocktails).join('');
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
