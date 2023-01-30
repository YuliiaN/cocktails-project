import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderRandomDrink from './templates/random-drink';

const apiRandom = new CocktailApi();
getDrinksGallery();

async function getDrinksGallery() {
  try {
    let promises = [];
    let drinks = [];

    for (let i = 0; i < 9; i++) {
      promises.push(apiRandom.getRandomCocktail());
    }

    drinks = (await Promise.all(promises)).flat();
    refs.gallery.innerHTML = renderRandomDrink(drinks).join('');
  } catch (error) {
    console.log(error);
  }
}
