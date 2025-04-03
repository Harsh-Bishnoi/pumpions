const navbarbtn = () => {
    document.getElementById("nav-name").classList.toggle("show-navbar")
    document.body.classList.toggle("overflow-hidden")
};


// slider 1
$('.slider').slick({
    slidesToShow: 1.2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    dots: true,
});


// slider 2
$('.team-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 800,
    dots: true,
});