$(function() {
  console.log('Hello Bootstrap5');
});
// var swiper = new Swiper(".mySwiper", {});

var indexCourseSwiper = new Swiper(".indexCourseSwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  grid: {
    rows: 2,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      },
    },
    992: {
      slidesPerView: 1.5,
      slidesPerColumn: 1,
      grid: {
        rows: 1,
        fill: 'column'
      },
      spaceBetween: 30
    },
  },
});

var feedbackSwiper = new Swiper(".feedbackSwiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30
    },
  },
});