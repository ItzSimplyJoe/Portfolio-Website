const swiper = new Swiper('.swiper', {
    spaceBetween: 24,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
        reverseDirection: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 4,
        },
        640: {
            slidesPerView: 5,
        },
        0: {
            slidesPerView: 3,
        },
    },
});