(function ($) {
  "use strict";
  var swiper = new Swiper(".pf__hero-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    touchReleaseOnEdges: true,
    resistanceRatio: 0.5,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".pf__hero-next-btn",
      prevEl: ".pf__hero-prev-btn",
    },
  });
})(jQuery);
