import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import { getFavCocktails } from './add-local-storage';

const apiRandom = new CocktailApi();

createDrinksGallery();

async function createDrinksGallery() {
  try {
    let promises = [];

    for (let i = 0; i < 9; i++) {
      promises.push(apiRandom.getRandomCocktail());
    }

    const cocktails = (await Promise.all(promises)).flat();
    refs.gallery.innerHTML = renderCardDrink(cocktails).join('');

    // add event on button for local storage
    const galleryButtons = document.querySelectorAll('.gallery__buttons');
    galleryButtons.forEach(item =>
      item.addEventListener('click', getFavCocktails)
    );
  } catch (error) {
    console.log(error);
  }
}
