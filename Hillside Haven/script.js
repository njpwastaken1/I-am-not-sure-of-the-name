const swiper = new Swiper('.mySwiper', {
  slidesPerView: 5,
  loop: true,
  freeMode: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is <= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is <= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is <= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
