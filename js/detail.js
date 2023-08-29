import { gradeColors, imgPaths } from './api-data.js';
import { getCredits, getImages, getMovie, getVideos } from './api-functions.js';
import { setSlide } from './functions.js';

let url = new URL(location.href);
let params = new URLSearchParams(url.search);
let id = params.get('id');
let imageData = await getImages(id);
let { backdrops, posters } = imageData;
backdrops = backdrops.slice(0, 15);
let posterPath = `${imgPaths.w500}${posters[0].file_path}`;
let movieData = await getMovie(id);
let {
  title,
  vote_average,
  vote_count,
  runtime,
  release_date,
  genres,
  overview,
  original_date,
  production_companies,
} = movieData;
let vote_averages = vote_average.toFixed(1);
let gradeLevel = Math.floor(vote_averages - 5);
if (gradeLevel > 4) gradeLevel = 4;
if (gradeLevel < 0) gradeLevel = 0;
let gradecolor = gradeColors[gradeLevel];
let hour = parseInt(runtime / 60);
let min = runtime % 60;
let genre = genres.map((genre) => genre.name).join(' / ');
if (!overview) {
  let enMovieData = await getMovie(id, en);
  overview = enMovieData.overview;
}
let company = production_companies.map((company) => company.name).join(', ');

let credits = await getCredits(id);
let { cast, crew } = credits;
cast = cast.slice(0, 10);
let directors = crew
  .filter((v) => v.job === 'Director')
  .map((v) => v.name)
  .join(', ');
let producers = crew
  .filter((v) => v.job === 'Producer')
  .map((v) => v.name)
  .join(', ');

let videoData = await getVideos(id);
let videos = videoData.results;
if (videos.lenth === 0) {
  videoData = await getVideos(id, en);
  videos = videoData.results;
}

setSlide(backdrops.slice(0, 4));
