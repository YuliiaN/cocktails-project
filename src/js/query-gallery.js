import CocktailApi from './cocktail-api';
import { refs } from './refs';
import renderCardDrink from './templates/card-drink';
import saveFavCocktails from './add-local-storage';

const apiQuery = new CocktailApi();

refs.form.addEventListener('submit', onChangeGetQuery);

function onChangeGetQuery(e) {
  e.preventDefault();
  apiQuery.searchQuery = refs.input.value;
  getCertainCocktail(apiQuery.searchQuery);
  e.currentTarget.reset();
}

async function getCertainCocktail(name) {
  try {
    const cocktails = await apiQuery.getCocktailByName(name);
    if (!cocktails) {
      notFound();
      return;
    }
    found();

    // const collection = renderCardDrink(cocktails);
    // const parts = chunkArray(collection, 6);
    // refs.gallery.innerHTML = parts[0].join('');
    // if (collection.length > 6) {
    //   refs.galleryBtn.classList.remove('is-hidden');
    //   refs.galleryBtn.addEventListener('click', onLoadMoreClick);
    //   console.log(refs.galleryBtn);
    // } else {
    //   refs.galleryBtn.classList.add('is-hidden');
    // }

    refs.gallery.innerHTML = renderCardDrink(cocktails).join('');

    const galleryButtons = document.querySelectorAll('.gallery__buttons');
    galleryButtons.forEach(item =>
      item.addEventListener('click', saveFavCocktails)
    );
  } catch (error) {
    console.log(error);
  }
}

export function notFound() {
  refs.galleryTitle.textContent = `Sorry, we didn't find any cocktail for you`;
  refs.gallery.innerHTML = '';
  refs.galleryNotFound.classList.remove('is-hidden');
}

export function found() {
  refs.galleryTitle.textContent = 'Cocktails';
  refs.galleryNotFound.classList.add('is-hidden');
}

// function chunkArray(array, chunk) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += chunk) {
//     newArray.push(array.slice(i, i + chunk));
//   }
//   return newArray;
// }

// function onLoadMoreClick(arr) {
//   refs.gallery.insertAdjacentHTML('beforeend', arr[1].join(''));
// }
