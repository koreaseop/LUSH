$(function () {
    AOS.init();
});

// main-visual slide

$(function () {
    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      autoplay: true,
      speed: 1000,
  
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
  
    });
  });