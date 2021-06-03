// Swiper 
const swiper = new Swiper('.slider', {
    navigation: {
        nextEl: '.slider-next',
        prevEl: false,
    },
    simulateTouch:false,
    breakpoints: {
        1200: {
            loop: false,
            slidesPerView: 4,
        },
        990: {
            loop: true,
            slidesPerView: 3,
        },
        790: {
            loop: true,
            slidesPerView: 2,
        },
        320: {
                loop: true,
            slidesPerView: 1,
        },
    }
});


