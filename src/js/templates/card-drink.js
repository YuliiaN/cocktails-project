export default function renderCardDrink(arr) {
  const collection = arr.map(({ idDrink, strDrink, strDrinkThumb }) => {
    return `
    <li class="gallery__item" id="${idDrink}">
  <img src="${strDrinkThumb}" alt="${strDrink}" class="gallery__item-picture" />
  <h2 class="gallery__item-title">${strDrink}</h2>
  <div class="gallery__buttons">
    <button type="button" class="btn-info" data-cocktail-modal-open>
      Learn More
    </button>
    <button type="button" class="btn-status btn-ls">
      Add to<svg class="gallery__btn-icon">
        <use href="./images/sprite.svg#icon-heart"></use>
      </svg>
    </button>
  </div>
</li>`;
  });
  return collection;
}
