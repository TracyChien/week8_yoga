// $(function() {
//   console.log('Hello Bootstrap5');
// });
// var swiper = new Swiper(".mySwiper", {});
// index.html
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
// index.html
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

// surroundings.html courseSwiper
var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerView: 1.4,
  spaceBetween: 30,
  grid: {
    rows: 1,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4.5,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 30,
    },
  },
});
