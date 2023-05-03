export default function renderDetailedDrink(obj) {
  const { strDrink, strInstructions, strDrinkThumb } = obj;
  let ingredientsList = '';

  for (let ingredient in obj) {
    if (obj.hasOwnProperty(ingredient)) {
      if (ingredient.includes('strIngredient') && obj[ingredient]) {
        ingredientsList += `<li class="cocktail-modal__item"><span>✶</span> ${obj[ingredient]}</li>`;
      }
    }
  }

  return `
      <div class="first-content-wrapper">
        <h2 class="cocktail-modal__title">${strDrink}</h2>
        <h3 class="cocktail-modal__subtitle cocktail-modal__subtitle--first">
          Instructions:
        </h3>
        <p class="cocktail-modal__description">
          ${strInstructions}
        </p>
      </div>
      <div class="second-content-wrapper">
        <img src="${strDrinkThumb}" alt="${strDrink}" class="cocktail-modal__picture" />
        <div class="third-content-wrapper">
          <h2 class="cocktail-modal__title-tab">${strDrink}</h2>
          <h3 class="cocktail-modal__subtitle cocktail-modal__subtitle--second">
            INGREDIENTS
          </h3>
          <p class="cocktail-modal__ingredients">Per cocktail</p>
          <ul class="cocktail-modal__list">
${ingredientsList}
          </ul>
        </div>
      </div>
    `;
}
