export default function renderDetailedDrink({
  strDrink,
  strInstructions,
  strDrinkThumb,
  strIngredient1,
  strIngredient2,
  strIngredient3,
  strIngredient4,
  strIngredient5,
}) {
  const empty = 'no ingredients anymore';
  if (!strIngredient3) {
    strIngredient3 = empty;
  }
  if (!strIngredient4) {
    strIngredient4 = empty;
  }
  if (!strIngredient5) {
    strIngredient5 = empty;
  }

  return `
        <h2 class="cocktail-modal__title">${strDrink}</h2>
      <h3 class="cocktail-modal__subtitle cocktail-modal__subtitle--first">
        Instructions:
      </h3>
      <p class="cocktail-modal__description">
        ${strInstructions}
      </p>
      <img src="${strDrinkThumb}" alt="${strDrink}" class="cocktail-modal__picture" />
      <h3 class="cocktail-modal__subtitle cocktail-modal__subtitle--second">
        INGREDIENTS
      </h3>
      <p class="cocktail-modal__ingredients">Per cocktail</p>
      <ul class="cocktail-modal__list">
        <li class="cocktail-modal__item"><span>✶</span> ${strIngredient1}</li>
        <li class="cocktail-modal__item"><span>✶</span> ${strIngredient2}</li>
        <li class="cocktail-modal__item"><span>✶</span> ${strIngredient3}</li>
        <li class="cocktail-modal__item"><span>✶</span> ${strIngredient4}</li>
        <li class="cocktail-modal__item"><span>✶</span> ${strIngredient5}</li>
      </ul>
      <button type="button" class="btn-add-fav">Add to favorite</button>
    `;
}
