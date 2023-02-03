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
    checkCollection(cocktailsCollection, cocktail, target);
  } else {
    cocktail = target.closest('li').id;
    checkCollection(cocktailsCollection, cocktail);
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
    button.textContent = 'Add to favorite';
    saveToStorage();
  } else {
    arr.push(elem);
    button.textContent = 'Remove from favorite';
    saveToStorage();
  }
}

// function changeStatus(target) {
//   const text = target.children[0];
//   const heart = target.children[1];
//   const pressed = target.children[2];
//   heart.classList.toggle(hiddenClassName);
//   pressed.classList.toggle(hiddenClassName);
//   text.innerHTML = 'Remove';
// }
