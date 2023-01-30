import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderRandomDrink from './templates/random-drink';

const apiRandom = new CocktailApi();
createDrinksGallery();

async function createDrinksGallery() {
  try {
    let promises = [];

    for (let i = 0; i < 9; i++) {
      promises.push(apiRandom.getRandomCocktail());
    }

    const cocktails = (await Promise.all(promises)).flat();
    refs.gallery.innerHTML = renderRandomDrink(cocktails).join('');
  } catch (error) {
    console.log(error);
  }
}
