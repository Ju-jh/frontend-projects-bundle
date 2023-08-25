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
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
