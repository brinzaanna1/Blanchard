(() => {
  const swiper = new Swiper('.js-bg-slider', {
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    }
  });
})();
