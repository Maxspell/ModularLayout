if (typeof Swiper !== 'undefined') {
  const portfolioSlider = new Swiper('.portfolio__slider', {
    slidesPerView: 1,
    spaceBetween: 12,
    grabCursor: true,
    navigation: {
      prevEl: '.portfolio__slider-button--prev',
      nextEl: '.portfolio__slider-button--next',
    },
    pagination: {
      el: '.portfolio__slider-pagination',
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }
    }
  });
}