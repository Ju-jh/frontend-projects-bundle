import { en, ko, options, imgPaths } from './api-data.js';
import { getMovie, getMovies, getVideos } from './api-functions.js';
import { qySel, qySelAll } from './functions.js';

const setVisual = () => {
  return new Promise(async (resovle) => {
    let movieData = await getMovies(options.playing);
    let movies = movieData.results;
    movies = movies.slice(0, 5);
    for (let movie of movies) {
      let { id, original_title, title, backdrop_path, overview } = movie;
      if (!overview) {
        let movieEn = await getMovie(id, en);
        overview = movieEn.overview;
        //영어로된
      }
      let imgPath = `${imgPaths.original}${backdrop_path}`;
      let videoData = await getVideos(id);
      if (videoData.results.length === 0) {
        videoData = await getVideos(id, en);
      }
      let videoKey = await videoData.results[0].key;

      qySel('.home-visual').insertAdjacentHTML(
        'beforeend',
        `
        
        `
      );
    } //for of
    resovle();
  });
};

await setVisual();
//module로 js를 만들었기때문에 가능한 await만 쓰는 방법
