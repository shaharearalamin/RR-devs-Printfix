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

  
  // brand-1
  var swiper = new Swiper(".tp-brand-top-active", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    freemode: true,
    centeredSlides: true,
    allowTouchMove: false, // if you want mouse cursur not working in this slider
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });

  // brand-2
  var swiper = new Swiper(".tp-brand-bottom-active", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    freemode: true,
    centeredSlides: true,
    allowTouchMove: false, // if you want mouse cursur not working in this slider
    speed: 4000,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });
  
  // testimonials slider
  var swiper = new Swiper(".pf__tes-slider", {
    loop:true,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".pf__tes-next-btn",
      prevEl: ".pf__tes-prev-btn",
    },
  });

  // Blog slider
  var swiper = new Swiper(".pf__blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    navigation: {
      nextEl: ".pf__blog-next-btn",
      prevEl: ".pf__blog-prev-btn",
    },
  });

})(jQuery);
