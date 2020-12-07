"use strict";

$(document).ready(function () {
  // Модальное окно Получить консультацию
  $('.popup-btn').click(function () {
    $('.popup').fadeIn(500);
  });
  $('.popup-close').click(function () {
    $('.popup').fadeOut(500);
  }); // Слайдер с отзывами

  $('.feedback-slider').slick({
    prevArrow: '<button type="button" class="feedback-slider-btn feedback-prev-btn"><img src="img/feedback/prewArrow.svg" alt=""></button>',
    nextArrow: '<button type="button" class="feedback-slider-btn feedback-next-btn"><img src="img/feedback/nextArrow.svg" alt=""></button>'
  }); // Слайдер с преимуществами

  $('.feature-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        prevArrow: '<button class="prev arrow"></button>',
        nextArrow: '<button class="next arrow"></button>',
        slidesToScroll: 1
      }
    }]
  });
});