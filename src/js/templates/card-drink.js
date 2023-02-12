export default function renderCardDrink(arr) {
  const heart = './sprite.f14d31f7.svg#icon-heart';
  const pressed = './sprite.f14d31f7.svg#icon-heart-pressed';

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
      Add to <svg class="gallery__btn-icon heart">
        <use href="${heart}"></use>
      </svg>
      <svg class="gallery__btn-icon gallery__btn-icon--hidden pressed">
        <use href="${pressed}"></use>
      </svg>
    </button>
  </div>
</li>`;
  });
  return collection;
}
