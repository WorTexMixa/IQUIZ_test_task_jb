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

const modal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");
const modalOpenButtons = document.querySelectorAll(".button");

function openModal() {
  modal.classList.add("modal--open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("modal--open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");
}

modalOpenButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    openModal();
  });
});

modalCloseButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
