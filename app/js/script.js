const quizSlider = new Swiper(".quiz-types__slider", {
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1660: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
