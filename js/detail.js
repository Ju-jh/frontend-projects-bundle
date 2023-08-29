import { imgPaths } from './api-data.js';
import { getImages, getMovie } from './api-functions.js';
import { setSlide } from './functions.js';

let url = new URL(location.href);
let params = new URLSearchParams(url.search);
let id = params.get('id');

let imageData = await getImages(id);
let { backdrops, posters } = imageData;
let posterPath = `${imgPaths.w500}${posters[0].file_path}`;

let movieData = await getMovie(id);
let {} = movieData;

console.log(movieData);

setSlide(backdrops.slice(0, 4));
