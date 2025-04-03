const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.body.classList.toggle("overflow-hidden")
};


$('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                dots: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                dots: true,
            }
        }
    ]
});
