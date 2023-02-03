import { refs } from './refs';

export const STORAGE_KEY = 'cocktails';
const hiddenClassName = 'gallery__btn-icon--hidden';
let cocktailsCollection = [];

checkStorageState();

export default function saveFavCocktails(e) {
  const target = e.target;
  if (!target.classList.contains('btn-ls')) {
    return;
  }

  let cocktail;
  if (target.classList.contains('btn-add-fav')) {
    cocktail = target.closest('[data-cocktail-modal]').id;
  } else {
    cocktail = target.closest('li').id;
  }

  if (cocktailsCollection.includes(cocktail)) {
    const cocktailInd = cocktailsCollection.indexOf(cocktail);
    cocktailsCollection.splice(cocktailInd, 1);
    changeStatus(target);
    saveToStorage();
  } else {
    cocktailsCollection.push(cocktail);
    changeStatus(target);
    saveToStorage();
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

function changeStatus(target) {
  // const text = target.children[0];
  const heart = target.children[0];
  const pressed = target.children[1];
  heart.classList.toggle(hiddenClassName);
  pressed.classList.toggle(hiddenClassName);
  // text.innerHTML = 'Remove';
}
