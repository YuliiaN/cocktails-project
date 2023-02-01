export const STORAGE_KEY = 'cocktails';
let cocktailsCollection = [];

checkStorageState();

export function getFavCocktails(e) {
  if (!e.target.classList.contains('btn-ls')) {
    return;
  }

  let cocktail;
  if (e.target.classList.contains('btn-add-fav')) {
    cocktail = e.target.closest('[data-cocktail-modal]').id;
  } else {
    cocktail = e.target.closest('li').id;
  }

  if (cocktailsCollection.includes(cocktail)) {
    const cocktailInd = cocktailsCollection.indexOf(cocktail);
    cocktailsCollection.splice(cocktailInd, 1);
    saveToStorage();
  } else {
    cocktailsCollection.push(cocktail);
    saveToStorage();
  }
}

export function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cocktailsCollection));
}

function checkStorageState() {
  if (!localStorage.length) {
    return;
  }

  cocktailsCollection = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!cocktailsCollection.length) {
    localStorage.removeItem(STORAGE_KEY);
  }
}
