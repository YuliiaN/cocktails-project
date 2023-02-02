import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import saveFavCocktails from './add-local-storage';
import { loading, loadingStop } from './loading';

const apiRandom = new CocktailApi();

createDrinksGallery();

async function createDrinksGallery() {
  try {
    let promises = [];

    for (let i = 0; i < 9; i++) {
      promises.push(apiRandom.getRandomCocktail());
    }

    loading();
    const cocktails = (await Promise.all(promises)).flat();
    refs.gallery.innerHTML = renderCardDrink(cocktails).join('');
    loadingStop();

    // add event on button for local storage
    const galleryButtons = document.querySelectorAll('.gallery__buttons');
    galleryButtons.forEach(item =>
      item.addEventListener('click', saveFavCocktails)
    );
  } catch (error) {
    console.log(error);
  }
}
