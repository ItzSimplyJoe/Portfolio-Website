const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
    spaceBetween: 24,
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
        reverseDirection: false,
        pauseOnMouseEnter: true,
    },
});