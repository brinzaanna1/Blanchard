(() => {

  let eventsSlider = new Swiper(".js-events-slider", {
    slidesPerView: 1,
    spaceBetween: 20,

    grid: {
      rows: 1,
      fill: "row"
    },
    pagination: {
      el: ".js-events-pagination",
    },

    navigation: {
      nextEl: ".js-events-next",
      prevEl: ".js-events-prev",
      disabledClass: "nav-btn--disabled"
    },

    breakpoints: {
      611: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2

      },

      971: {
        slidesPerView: 3,
        spaceBetween: 27,
        slidesPerGroup: 2
      },

      1281: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  })


})();
