const quizSlider = new Swiper(".quiz-types__slider", {
  slidesPerView: 1,
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});