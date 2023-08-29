import { imgPaths } from './api-data.js';

export const qySel = (el) => {
  return document.querySelector(el);
};

export const qySelAll = (el) => {
  return document.querySelectorAll(el);
};

export const setSwiper = (el, sec = false, breakpoint = false) => {
  const swiper = new Swiper(el, {
    autoplay: sec
      ? {
          delay: sec,
          disableOnInteraction: false,
        }
      : false,

    loop: true,

    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    }, //navigation

    pagination: {
      el: '.pagination',
      type: 'bullets',
      clickable: true,
    }, //pagination

    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: breakpoint && {
      300: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      600: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      900: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1200: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1500: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    }, //breakpoints
  }); //new Swiper
}; //setSwiper

export const videoResize = () => {
  let videoWidth = qySel('.youtube-ratio').clientWidth;
  let videoHeight = qySel('.youtube-ratio').clientHeight;
  qySel('.video-modal iframe').style.width = `${videoWidth}px`;
  qySel('.video-modal iframe').style.height = `${videoHeight}px`;
};

export const setSlide = (images) => {
  if (images.length < 2) {
    for (let i = 1; i <= 4; i++) {
      qySel('.slide').insertAdjacentHTML(
        'beforeend',
        `
        <img src='./img/film${i}.jpg' class="slide-img${i}" alt>
      `
      );
    }
  } else {
    images.forEach((imgInfo, i) => {
      let { file_path } = imgInfo;
      let imgPath = `${imgPaths.original}${file_path}`;
      qySel('.slide').insertAdjacentHTML(
        'beforeend',
        `
        <img src='${imgPath}' class="slide-img${i + 1}" alt>
      `
      );
    });
  }

  let n = 1;
  setTimeout(() => {
    qySel('.slide-img1').classList.add('active');
  }, 10);
  setInterval(() => {
    n++;
    if (n > qySelAll('.slide img').length) n = 1;
    qySelAll('.slide img').forEach((img) => {
      img.classList.remove('active');
    });
    qySel(`.slide-img${n}`).classList.add('active');
  }, 5000);
};
