import { imgPaths, ko, options } from './api-data.js';
import { displayMovies, getMovies } from './api-functions.js';
import { qySel } from './functions.js';

let url = new URL(location.href);
let params = new URLSearchParams(url.search);
let list = params.get('list');
let page = parseInt(params.get('page'));

let option;

if (list === 'playing') {
  option = options.playing;
  qySel('.list-title').innerText = '현재상영작';
} else if (list === 'popular') {
  option = options.popular;
  qySel('.list-title').innerText = '인기영화';
} else if (list === 'upcoming') {
  option = options.upcoming;
  qySel('.list-title').innerText = '최신/개봉예정';
}
let movieData = await getMovies(option, ko, page);
let totalPages = parseInt(movieData.total_pages);
totalPages = totalPages > 500 ? 500 : totalPages;
let movies = movieData.results;

let images = movies.slice(0, 5).map((v) => {
  return `${imgPaths.original}${v.backdrop_path}`;
});

const setSlide = (images) => {
  images.forEach((imgPath, i) => {
    qySel('.slide').insertAdjacentHTML(
      'beforeend',
      `
        <img src="${imgPath}" class="slide-img${i + 1}" alt>
      `
    ); //insertAdjacentHTML
  }); //forEach
  let n = 1;

  setTimeout(() => {
    qySel('.slide-img1').classList.add('active');
  }, 10);

  setInterval(() => {
    n++;
    if (n > qySelAll('.slide img').length) n = 1;
    qySelAll('.slide img').forEach((img) => {
      img.classList.remove('active');
    }); //forEach
    qySel(`.slide-img${n}`).classList.add('active');
  }, 5000);
}; //setSlide

setSlide(images);

let startPaging =
  page % 5 !== 0 ? Math.floor(page / 5) * 5 + 1 : Math.floor(page / 5) * 5 - 4;

let finishPaging = startPaging + 4;
let endPaging = finishPaging > totalPages ? totalPages : finishPaging;

if (page >= 5) {
  qySel('.paging').insertAdjacentHTML(
    'beforeend',
    `
    <a href="./list.php?list=${list}&page=${startPaging - 5}">이전</a>
    `
  );
}

for (let i = startPaging; i <= endPaging; i++) {
  qySel('.paging').insertAdjacentHTML(
    'beforeend',
    `
    <a class="paging-btn${i}" href="./list.php?list=${list}&page=${i}">${i}</a>
    `
  );
}

qySel(`.paging-btn${page}`).classList.add('active');

if (totalPages > finishPaging) {
  qySel('.paging').insertAdjacentHTML(
    'beforeend',
    `
    <a href="./list.php?list=${list}&page=${startPaging + 5}">다음</a>
    `
  );
}

console.log(totalPages);
displayMovies(movies, '.grid-container');
