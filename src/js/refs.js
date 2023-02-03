export const refs = {
  body: document.querySelector('.js-body'),
  form: document.querySelectorAll('.js-form'),
  input: document.querySelector('.js-input'),
  select: document.querySelector('.js-select'),
  selectButtons: document.querySelector('.js-select-buttons'),
  checkbox: document.querySelectorAll('.checkbox'),

  burgerOpen: document.querySelector('button[data-burger-open]'),
  burgerMenu: document.querySelector('[data-burger]'),
  burgerClose: document.querySelector('button[data-burger-close]'),

  cocktailModal: document.querySelector('[data-cocktail-modal]'),
  cocktailModalBtnClose: document.querySelector(
    'button[data-cocktail-modal-close'
  ),
  cocktailContent: document.querySelector('.cocktail-modal__content-wrapper'),

  gallery: document.querySelector('.gallery__list'),
  galleryTitle: document.querySelector('.gallery__title'),
  galleryNotFound: document.querySelector('.gallery__not-found'),
  favGallery: document.querySelector('.fav-gallery__list'),
  favGalleryNotFound: document.querySelector('.fav-gallery__not-found'),
};
