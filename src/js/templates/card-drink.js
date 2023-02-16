import heart from '../../images/sprite.svg';
import { STORAGE_KEY } from '../add-local-storage';
import { buttonLike, buttonUnlike } from '../add-local-storage';

export default function renderCardDrink(arr) {
  const savedCocktails = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];

  const collection = arr.map(({ idDrink, strDrink, strDrinkThumb }) => {
    if (savedCocktails.includes(idDrink)) {
      return `
<li class="gallery__item" id="${idDrink}">
  <img src="${strDrinkThumb}" alt="${strDrink}" class="gallery__item-picture" />
  <h2 class="gallery__item-title">${strDrink}</h2>
  <div class="gallery__buttons">
    <button type="button" class="btn-info" data-cocktail-modal-open>
      Learn More
    </button>
    <button type="button" class="btn-status btn-ls">${buttonUnlike}</button>
  </div>
</li>
`;
    } else {
      return `
<li class="gallery__item" id="${idDrink}">
  <img src="${strDrinkThumb}" alt="${strDrink}" class="gallery__item-picture" />
  <h2 class="gallery__item-title">${strDrink}</h2>
  <div class="gallery__buttons">
    <button type="button" class="btn-info" data-cocktail-modal-open>
      Learn More
    </button>
    <button type="button" class="btn-status btn-ls">${buttonLike}</button>
  </div>
</li>
`;
    }
  });
  return collection;
}
