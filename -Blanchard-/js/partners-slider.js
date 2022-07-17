(() => {
  const partnersSlider = new Swiper(".js-partners-slides", {
    slidesPerView: 1,
    spaceBetween: 20,

    grid: {
      rows: 1,
      fill: "row"
    },

    pagination: {
      el: ".js-partners-pagination",
    },

    navigation: {
      nextEl: ".js-partners-next",
      prevEl: ".js-partners-prev",
      disabledClass: "nav-btn--disabled"
    },

    breakpoints: {
      611: {
        slidesPerView: 2,
        spaceBetween: 34
      },

      971: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1281: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }

  });


})();
