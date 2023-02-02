import { Loading } from 'notiflix/build/notiflix-loading-aio';

export function loading() {
  Loading.dots('Please, wait...', {
    svgColor: 'rgb(253, 81, 3)',
  });
}

export function loadingStop() {
  Loading.remove();
}
