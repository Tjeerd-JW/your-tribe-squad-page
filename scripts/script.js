  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If you want pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // If you want navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // If you want a scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });