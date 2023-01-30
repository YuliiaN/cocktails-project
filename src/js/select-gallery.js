import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import { found, notFound } from './query-gallery';

const apiSelect = new CocktailApi();

refs.select.addEventListener('change', getSelectedOnMobile);
refs.selectButtons.addEventListener('click', getSelectedByButtons);

async function getSelectedOnMobile(e) {
  try {
    apiSelect.letter = e.target.value;
    const cocktails = await apiSelect.getCocktailByLetter(apiSelect.letter);
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

async function getSelectedByButtons(e) {
  try {
    apiSelect.letter = e.target.textContent;
    const cocktails = await apiSelect.getCocktailByLetter(apiSelect.letter);
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
