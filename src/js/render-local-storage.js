import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import saveFavCocktails from './add-local-storage';
import { STORAGE_KEY } from './add-local-storage';
import { loading, loadingStop } from './loading';

const apiStorage = new CocktailApi();
let cocktails = [];

if (!localStorage.getItem(STORAGE_KEY)) {
  refs.favGalleryNotFound.classList.remove('is-hidden');
  return;
}

renderFavCocktails();

export async function renderFavCocktails() {
  try {
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const promises = storage.map(item =>
      apiStorage.getCocktailDetailsById(item)
    );
    loading();
    cocktails = (await Promise.all(promises)).flat();
    refs.favGallery.innerHTML = renderCardDrink(cocktails).join('');
    refs.favGalleryNotFound.classList.add('is-hidden');
    loadingStop();

    const galleryButtons = document.querySelectorAll('.gallery__buttons');
    galleryButtons.forEach(item =>
      item.addEventListener('click', saveFavCocktails)
    );
  } catch (error) {
    console.log(error);
  }
}
