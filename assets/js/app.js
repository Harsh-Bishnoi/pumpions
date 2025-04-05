// navbar
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


// back to top
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};