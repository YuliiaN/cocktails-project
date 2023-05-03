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
  const storedCollection = localStorage.getItem(STORAGE_KEY);

  if (storedCollection) {
    cocktailsCollection = JSON.parse(localStorage.getItem(STORAGE_KEY));
  }

  if (!cocktailsCollection.length) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function checkCollection(arr, elem, button) {
  const cocktailInd = arr.indexOf(elem);

  if (cocktailInd > -1) {
    arr.splice(cocktailInd, 1);
    button.innerHTML = button.classList.contains('btn-add-fav')
      ? 'Add to favorite'
      : buttonLike;
    failureNotification();

    const cocktail = document.getElementById(elem);
    console.log(elem);
    if (cocktail) {
      cocktail.remove();
    }
  } else {
    arr.push(elem);
    button.innerHTML = button.classList.contains('btn-add-fav')
      ? 'Remove from favorite'
      : buttonUnlike;
    successNotification();
  }

  saveToStorage();
}

function failureNotification() {
  Notify.failure(`You have removed cocktail from favorite`, {
    timeout: 700,
    clickToClose: true,
  });
}

function successNotification() {
  Notify.success(`You have added cocktail to favorite!`, {
    timeout: 700,
    clickToClose: true,
  });
}
