import { Notify } from 'notiflix';
import heart from '../images/sprite.svg';

export const STORAGE_KEY = 'cocktails';
let cocktailsCollection = [];
export const buttonUnlike = `Remove <svg class="gallery__btn-icon heart">
<use href="${heart}#icon-heart-pressed" class="heart-icon"></use>
</svg>`;
export const buttonLike = `Add to <svg class="gallery__btn-icon heart">
<use href="${heart}#icon-heart" class="heart-icon"></use></svg>
</svg>`;

checkStorageState();

export default function saveFavCocktails(e) {
  const target = e.target;

  if (!target.classList.contains('btn-ls')) {
    return;
  }

  let cocktail;
  if (target.classList.contains('btn-add-fav')) {
    cocktail = target.closest('[data-cocktail-modal]').id;
    checkCollection(cocktailsCollection, cocktail, target);
  } else {
    cocktail = target.closest('li').id;
    checkCollection(cocktailsCollection, cocktail, target);
  }
}

function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cocktailsCollection));
}

function checkStorageState() {
  if (!localStorage.length) {
    return;
  }

  cocktailsCollection = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!cocktailsCollection) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function checkCollection(arr, elem, button) {
  if (arr.includes(elem)) {
    const cocktailInd = arr.indexOf(elem);
    arr.splice(cocktailInd, 1);
    if (button.classList.contains('btn-add-fav')) {
      button.textContent = 'Add to favorite';
    } else {
      button.innerHTML = buttonLike;
      Notify.failure(`You have removed cocktail from favorite`);
    }
    saveToStorage();
  } else {
    arr.push(elem);
    if (button.classList.contains('btn-add-fav')) {
      button.textContent = 'Remove from favorite';
    } else {
      button.innerHTML = buttonUnlike;
      Notify.success(`You have added cocktail to favorite!`);
    }
    saveToStorage();
  }
}
