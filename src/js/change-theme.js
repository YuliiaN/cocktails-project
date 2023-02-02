import { refs } from './refs';

const THEME_KEY = 'dark';
const darkThemeName = 'dark-theme';
refs.checkbox.forEach(item => item.addEventListener('change', changeTheme));

function changeTheme(e) {
  if (e.target.checked) {
    refs.body.classList.add(darkThemeName);
    localStorage.setItem(THEME_KEY, darkThemeName);
  } else if (!e.target.checked) {
    refs.body.classList.remove(darkThemeName);
    localStorage.removeItem(THEME_KEY);
  }
}

saveTheme();

export function saveTheme() {
  if (localStorage.getItem(THEME_KEY)) {
    refs.body.classList.add(darkThemeName);
    refs.checkbox.forEach(item => (item.checked = true));
  } else {
    refs.body.classList.remove(darkThemeName);
  }
}
