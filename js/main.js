$(document).ready(function () {
  // Мобильное меню

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".header__navbar").classList.toggle("header__navbar-visible");
  });

  // Слайдер "Жанры"

  const genreSlider = new Swiper(".genre-slider", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 4,
    navigation: {
      nextEl: ".genre__button-next",
      prevEl: ".genre__button-prev",
    },
  });

  // Слайдер "Неизданные книги"

  const unreleasedSlider = new Swiper(".unreleased__swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: "5",
    navigation: {
      nextEl: ".unreleased__button-next",
      prevEl: ".unreleased__button-prev",
    },
  });

  // Обработка форм

  $(".subscribe").validate({
    messages: {
      email: {
        required: "Нам нужен ваш адрес электронной почты, чтобы с вами связаться",
        email: "Ваш адрес электронной почты должен быть в формате name@domain.com",
      },
    },
  });
});
