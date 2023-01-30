import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderRandomDrink from './templates/random-drink';

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
    refs.galleryNotFound.classList.toggle('is-hidden');
    refs.gallery.innerHTML = renderRandomDrink(cocktails).join('');
  } catch (error) {
    console.log(error);
  }
}

function notFound() {
  refs.galleryTitle.textContent = `Sorry, we didn't find any cocktail for you`;
  refs.gallery.innerHTML = '';
  refs.galleryNotFound.classList.toggle('is-hidden');
}
