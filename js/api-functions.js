import { apiKey, baseUrl, en, ko, options } from './api-data.js';

export const getMovies = (option, lang = ko, query = '') => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseUrl}${option}${apiKey}${lang}${query}`);
    let data = await result.json();
    resolve(data);
  }); //promise
}; //getMovies

export const getMovie = (movieId, lang = ko, query = '') => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}/movie/${movieId}${apiKey}${lang}${query}`
    );
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
