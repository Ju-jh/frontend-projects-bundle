import {
  apiKey,
  baseUrl,
  genreIdx,
  gradeColors,
  imgPaths,
  ko,
  options,
} from './api-data.js';
import { qySel } from './functions.js';

export const getMovies = (option, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseUrl}${option}${apiKey}${lang}`);
    let data = await result.json();
    resolve(data);
  }); //promise
}; //getMovies

export const getMovie = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseUrl}/movie/${movieId}${apiKey}${lang}`);
    let data = await result.json();
    resolve(data);
  });
}; //getMovie

export const getVideos = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}/movie/${movieId}/videos${apiKey}${lang}`
    );
    let data = await result.json();
    resolve(data);
  });
}; //getVideos

export const getImages = (movieId) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseUrl}/movie/${movieId}/images${apiKey}`);
    let data = await result.json();
    resolve(data);
  });
};

export const displayMovies = (data, container, gridClassName = '') => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class = "no-data">관련 영화목록이 존재하지 않습니다.</p>';
    return false;
  }
  return new Promise((resolve) => {
    data.forEach((movie) => {
      let { id, poster_path, title, genre_ids, vote_average, release_date } =
        movie;

      let imgPath = poster_path
        ? `${imgPaths.w500}${poster_path}`
        : './img/no-image.jpg';

      let gradeLevel = Math.floor(vote_average - 5);
      if (gradeLevel > 4) gradeLevel = 4;
      if (gradeLevel < 0) gradeLevel = 0;
      let gradeColor = gradeColors[gradeLevel];

      let genre = [];
      genre_ids.forEach((v) => {
        genre.push(genreIdx[v]);
      });

      qySel(container).insertAdjacentHTML(
        'beforeend',
        `
          <figure class="${gridClassName}">
            <a href="detail.php?id=${id}">
              <div class="imgbox">
                <img src="${imgPath}" alt="">
                <span style="background:${gradeColor}"></span>
                <small>${vote_average}</small>
              </div>
              <figcaption>
                <h3>${title}</h3>
                <p>${genre}</p>
                <p>${release_date}</p>
              </figcaption>
            </a>
          </figure>
      `
      );
    }); //forEach
    resolve();
  }); //Promise
}; //displayMovies
