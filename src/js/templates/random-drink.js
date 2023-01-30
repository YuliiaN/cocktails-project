export default function renderRandomDrink(arr) {
  const collection = arr.map(({ idDrink, strDrink, strDrinkThumb }) => {
    return `
    <li class="gallery__item" id="${idDrink}">
  <img src="${strDrinkThumb}" alt="${strDrink}" class="gallery__item-picture" />
  <h2 class="gallery__item-title">${strDrink}</h2>
  <div class="gallery__buttons">
    <button type="button" class="btn-info">Learn More</button>
    <button type="button" class="btn-status">
      Add to<svg class="gallery__btn-icon">
        <use href="./images/sprite.svg#icon-pressed-heart" width="24" height="19"></use>
      </svg>
    </button>
  </div>
</li>`;
  });
  return collection;
}
