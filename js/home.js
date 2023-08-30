import { en, ko, options, imgPaths } from './api-data.js';
import {
  displayMovies,
  getMovie,
  getMovies,
  getVideos,
} from './api-functions.js';
import { qySel, qySelAll, setSwiper, videoResize } from './functions.js';

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
      overview = overview.slice(0, 150) + '...';
      let imgPath = `${imgPaths.original}${backdrop_path}`;
      let videoData = await getVideos(id);
      if (videoData.results.length === 0) {
        videoData = await getVideos(id, en);
      }
      let videoKey = await videoData.results[0].key;

      qySel('.home-visual .swiper-wrapper').insertAdjacentHTML(
        'beforeend',
        `
          <figure class="swiper-slide">
            <img src="${imgPath}" alt="">
            <figcaption>
              <small class="original-title">${original_title}</small>
              <h6 class="title">${title}</h6>
              <p class="overview">
              ${overview}
              </p>
              <button class="play-btn" value="${videoKey}"><i class="fa-brands fa-google-play"></i>재생</button>
              <button class="detail-btn" value="${id}"><i class="fa-solid fa-circle-info"></i>상세정보</button>
            </figcaption>
          </figure>
        `
      );
    } //for of

    qySelAll('.home-visual .play-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        qySel('.video-modal').style.display = 'block';
        qySel(
          '.video-modal iframe'
        ).src = `http://www.youtube.com/embed/${e.target.value}?playlist=${e.target.value}&autoplay=1&loop=1&mute=1&playsinline=1`;
        videoResize();
      });
    }); //play-btn 'click'

    qySelAll('.home-visual .detail-btn').forEach((button) => {
      button.addEventListener('click', (e) => {
        location.href = `./detail.php?id=${e.target.value}`;
      });
    }); //detail-btn 'click'

    setSwiper('.home-visual', 5000, false);

    resovle();
  });
};

const setHomeSection = (option, section) => {
  return new Promise(async (resolve) => {
    const moviesData = await getMovies(option);
    let movies = moviesData.results.slice(0, 15);
    displayMovies(
      movies,
      `${section} .carousel .swiper-wrapper`,
      'swiper-slide'
    );
    setSwiper(`${section} .carousel`, false, true);
    resolve();
  });
};

await setVisual();
await setHomeSection(options.popular, '.popular-section');
await setHomeSection(options.upcoming, '.upcoming-section');
await setHomeSection(options.rated, '.rated-section');
await setHomeSection(options.trend, '.trend-section');

const scrollToSection = () => {
  let offsetTop =
    qySel('.popular-section').getBoundingClientRect().y + window.scrollY;
  let headerH = matchMedia('screen and (min-width:1000px)').matches ? 80 : 60;
  let scrollTargetY = offsetTop - headerH;
  window.scrollTo({
    top: scrollTargetY,
    behavior: 'smooth',
  });
};

qySel('.home-visual').addEventListener(
  'mousewheel',
  (e) => {
    e.preventDefault();
    let delta = e.wheelDelta < 0 ? 1 : -1;
    if (delta === -1) return false;
    scrollToSection();
  },
  { passive: false }
);

qySel('.wheel-btn').addEventListener('click', (e) => {
  scrollToSection();
});
