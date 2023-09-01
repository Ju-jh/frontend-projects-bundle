import {
  apiKey,
  baseUrl,
  genreIdx,
  gradeColors,
  imgPaths,
  ko,
  options,
} from './api-data.js';
import {
  qySel,
  qySelAll,
  showModal,
  sortArray,
  videoResize,
} from './functions.js';

export const getMovies = (option, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}${option}${apiKey}${lang}&include_adult=false`
    );
    let data = await result.json();
    resolve(data);
  }); //promise
}; //getMovies

export const getMovie = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}/movie/${movieId}${apiKey}${lang}&include_adult=false`
    );
    let data = await result.json();
    resolve(data);
  });
}; //getMovie

export const getVideos = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}/movie/${movieId}/videos${apiKey}${lang}&include_adult=false`
    );
    let data = await result.json();
    resolve(data);
  });
}; //getVideos

export const getImages = (movieId) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}/movie/${movieId}/images${apiKey}&include_adult=false`
    );
    let data = await result.json();
    resolve(data);
  });
}; //getImages

export const getSimilarMovies = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(
      `${baseUrl}/movie/${movieId}/similar${apiKey}${lang}&include_adult=false
`
    );
    let data = await result.json();
    resolve(data);
  });
}; //getSimilarMovies

export const getCredits = (movieId, lang = ko) => {
  return new Promise(async (resolve) => {
    const result = await fetch(
      `${baseUrl}/movie/${movieId}/credits${apiKey}${lang}`
    );
    const data = await result.json();

    resolve(data);
  });
}; //getCredits

export const displayVideos = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 영상이 존재하지 않습니다</p>';
    return false;
  }
  data.forEach((video) => {
    let { key } = video;
    qySel(container).insertAdjacentHTML(
      'beforeend',
      `
      <button value="${key}">
      <img src="https://img.youtube.com/vi/${key}/mqdefault.jpg" alt>
      </button>

    `
    );
  });

  qySelAll(`${container} button`).forEach((btn) => {
    btn.addEventListener('click', (e) => {
      showModal('.video-modal');
      let youtubeId = e.currentTarget.value;
      qySel(
        '.video-modal iframe'
      ).src = `http://www.youtube.com/embed/${youtubeId}?playlist=${youtubeId}&autoplay=1&loop=1&mute=1&playsinline=1`;
      videoResize();
    });
  });
}; //displayVideos

export const displayImages = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 이미지가 존재하지 않습니다</p>';
    return false;
  }
  data.forEach((img) => {
    let { file_path } = img;
    let imgPathOriginal = `${imgPaths.original}${file_path}`;
    let imgPathW500 = `${imgPaths.w500}${file_path}`;
    qySel(container).insertAdjacentHTML(
      'beforeend',
      `
      <a class="viewbox-btn" href="${imgPathOriginal}">
        <img src="${imgPathW500}" alt>
      </a>
    `
    );
  });

  $('.viewbox-btn').viewbox();
}; //displayImages

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

      let vote_averages = vote_average.toFixed(1);

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
                <small>${vote_averages}</small>
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

export const displayPeople = (data, container) => {
  if (data.length === 0) {
    qySel(container).innerHTML =
      '<p class="no-data">관련 이미지가 존재하지 않습니다.</p>';
    return false;
  }
  data.forEach((person) => {
    let { id, name, character, profile_path } = person;
    let photo = profile_path
      ? `${imgPaths.w500}${profile_path}`
      : './img/no-image.jpg';
    qySel(container).insertAdjacentHTML(
      'beforeend',
      `
              <figure>
                  <a href="${id}">
                  <img src="${photo}" alt="">
                  <figcaption>
                  <em>${name}</em>
                  <b>${character}</b>
                  </figcaption>
                  </a>
              </figure>
          `
    );
  });

  qySelAll(`${container} a`).forEach((anchor) => {
    anchor.addEventListener('click', async (e) => {
      e.preventDefault();
      let id = e.currentTarget.getAttribute('href');
      let profile = await getProfile(id);
      let filmography = await getFilmography(id);
      displayPerson(profile);
      displayFilmography(filmography);
      showModal('.person-modal');
    });
  });
}; //displayPeople

export const getProfile = (personId, lang = ko) => {
  return new Promise(async (resolve) => {
    let result = await fetch(`${baseUrl}/person/${personId}${apiKey}`);
    let data = await result.json();
    resolve(data);
  });
}; //getProfile

export const displayPerson = (profileData, en) => {
  let {
    profile_path,
    name,
    birthday,
    deathday,
    known_for_department,
    place_of_birth,
    biography,
  } = profileData;
  let photoPath = profile_path
    ? `${imgPaths.w500}${profile_path}`
    : `.img/no-image.jpg`;

  name = name ? name : '관련 정보가 없습니다';
  known_for_department = known_for_department
    ? known_for_department
    : '관련 정보가 없습니다';
  place_of_birth = place_of_birth ? place_of_birth : '관련 정보가 없습니다';
  biography = biography ? biography : '관련 정보가 없습니다';
  deathday = deathday ? deathday : ' ';
  birthday = birthday ? `${birthday} ~ ${deathday}` : '관련 정보가 없습니다';

  qySel('.person-photo').src = photoPath;
  qySel('.person-name').innerText = name;
  qySel('.person-job').innerText = known_for_department;
  qySel('.person-life').innerText = birthday;
  qySel('.person-place').innerText = place_of_birth;
  qySel('.person-biography').innerText = biography;

  // =()?:'관련 정보가 없습니다'
}; //displayPerson

export const getFilmography = (personId, lang = ko) => {
  return new Promise(async (resolve) => {
    const result = await fetch(
      `${baseUrl}/person/${personId}/movie_credits${apiKey}${lang}`
    );
    const data = result.json();
    resolve(data);
  });
}; //getFilmography

export const displayFilmography = (filmographyData) => {
  let { cast, crew } = filmographyData;
  let filmography = [...cast, ...crew];
  sortArray(filmography, 'popularity', -1);
  filmography = filmography.slice(0, 20);
  qySel('.filmography').innerHTML = '';
  filmography.forEach((movie) => {
    let { id, release_date, title, job } = movie;
    job = job ? job : 'acting';
    qySel('ul.filmography').insertAdjacentHTML(
      'beforeend',
      `
    <li>
      <time>${release_date}</time>
      <a href="./detail.php?id=${id}">
        <em>${title}</em>
        <small>(${job})</small>
      </a>
    </li>
    `
    );
  });
  console.log(filmography);
}; //displayFilmography

export let controller = new AbortController();
let signal = controller.signal;

export const searchByKeyword = async (keyword, lang = ko) => {
  return new Promise(async (resovle) => {
    controller = new AbortController();
    signal = controller.signal;
    try {
      const result = await fetch(
        `${baseUrl}/search/movie${apiKey}${lang}&query=${keyword}`,
        { signal }
      );
      const data = await result.json();
      resovle(data);
    } catch {}
  });
};
