import CocktailApi from '../cocktail-api';
import { refs } from '../refs';
import renderDetailedDrink from '../templates/detailed-drink';
import saveFavCocktails from '../add-local-storage';

const apiModal = new CocktailApi();
let id;

refs.gallery.addEventListener('click', showCocktailModal);
refs.cocktailModalBtnClose.addEventListener('click', hideCocktailModal);

function showCocktailModal(e) {
  if (!e.target.hasAttribute('data-cocktail-modal-open')) {
    return;
  }
  id = e.target.closest('li').id;
  getCocktailDetails(id);

  refs.cocktailModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

function hideCocktailModal() {
  refs.cocktailModal.classList.toggle('is-hidden');
  refs.body.classList.toggle('no-scroll');
}

async function getCocktailDetails(id) {
  try {
    const data = await apiModal.getCocktailDetailsById(id);
    refs.cocktailContent.innerHTML = renderDetailedDrink(data[0]);
    refs.cocktailModal.id = id;

    const btn = document.querySelector('.btn-add-fav');
    btn.addEventListener('click', saveFavCocktails);
  } catch (error) {
    console.log(error);
  }
}
