
// Swiper 
const swiper = new Swiper('.slider', {
    breakpoints: {
        1200: {
            slidesPerView: 4,
            allowSlidePrev: false,
            allowSlideNext: false,
        },
        990: {
            loop: true, 
            navigation: {
                nextEl: '.slider-next',
                prevEl: false,
            },
            allowSlidePrev: true,
            allowSlideNext: true,
            slidesPerView: 3,
        },
        720: {
            loop: true, 
            navigation: {
                nextEl: '.slider-next',
                prevEl: false,
            },
            allowSlidePrev: true,
            allowSlideNext: true,
            slidesPerView: 2,
        },
        580: {
            loop: true, 
            navigation: {
                nextEl: '.slider-next',
                prevEl: false,
            },
            allowSlidePrev: true,
            allowSlideNext: true,
            slidesPerView: 1,
        },
    }
});
