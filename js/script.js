// $('.slider-1').slick({
//     arrows:true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

$('.slider-2').slick({
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:`<i class="fa-solid fa-angle-right right"></i>`,
    prevArrow:`<i class="fa-solid fa-angle-left left"></i>`
  });

var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true, // Corrected typo
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: 'auto', // Corrected typo
    coverflowEffect: {
        rotate: 0,
        stretch: 150,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    on: {
        click(event) {
            if (swiper.clickedSlide) {
                swiper.slideTo(swiper.clickedSlide.dataset.swiperSlideIndex);
            }
        },
    },
});
