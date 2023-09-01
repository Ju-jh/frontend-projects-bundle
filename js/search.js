import { controller, displayMovies, searchByKeyword } from './api-functions.js';
import { qySel, qySelAll, setSlide } from './functions.js';

setSlide([]);

const setDatalist = () => {
  if (!localStorage.getItem('keywordsStorage')) return false;
  let keywords = JSON.parse(localStorage.getItem('keywordsStorage'));
  keywords.forEach((keyword) => {
    qySel('datalist#keyword-list').insertAdjacentHTML(
      'beforeend',
      `
      <option>
        ${keyword}
      </option>
      `
    );
  });
};

setDatalist();

let timeoutId;
qySel('.search-input').addEventListener('input', async (e) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(async () => {
    controller.abort();
    let movieData = await searchByKeyword(e.target.value);
    let movies = movieData.results;
    qySel('.search-result-section .grid-container').innerHTML = '';
    displayMovies(movies, '.search-result-section .grid-container');

    let keywords = localStorage.getItem('keywordsStorage')
      ? JSON.parse(localStorage.getItem('keywordsStorage'))
      : [];

    if (movies.length === 0 || keywords.includes(e.target.value)) return;
    keywords.unshift(e.target.value);
    keywords = keywords.slice(0, 10);
    localStorage.setItem('keywordsStorage', JSON.stringify(keywords));
    qySel('datalist#keyword-list').innerHTML = '';
    keywords.forEach((keyword) => {
      qySel('datalist#keyword-list').insertAdjacentHTML(
        'beforeend',
        `
      <option>
        ${keyword}
      </option>
      `
      );
    });
  }, 1000);
});

qySel('.search-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

qySel('.delete-btn').addEventListener('click', (e) => {
  localStorage.removeItem('keywordsStorage');
  qySel('#keyword-list').innerHTML = '';
});
