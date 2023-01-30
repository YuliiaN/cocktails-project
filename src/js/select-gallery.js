import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import { found, notFound } from './query-gallery';

const apiSelect = new CocktailApi();

refs.select.addEventListener('change', getSelectedValue);

async function getSelectedValue(e) {
  try {
    apiSelect.letter = e.target.value;
    const cocktails = await apiSelect.getCocktailByLetter(apiSelect.letter);
    console.log(cocktails);
    console.log(apiSelect.letter);
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
