$(document).ready(function () {
    $('.navigation__burger').click(function (event) {
        $('.navigation').addClass('active-nav');
        $('.navigation__rightside').addClass('active');
        $('.navigation__close').addClass('active');
        $('.navigation__leftside').addClass('active');
        if (!document.body.classList.contains('scrolled')) document.body.classList.toggle('scrolled');
    });
});
$(document).ready(function () {
    $('.navigation__close').click(function (event) {
        $('.navigation').removeClass('active-nav');
        $('.navigation__rightside').removeClass('active');
        $('.navigation__close').removeClass('active');
        $('.navigation__leftside').removeClass('active');
        if (document.body.classList.contains('scrolled')) document.body.classList.toggle('scrolled');
    });
});

const NAVIGATE = document.getElementById('myNav');

const headerBG = () => {
    NAVIGATE.classList.toggle('scrolled');
};

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= 200 && !NAVIGATE.classList.contains('scrolled')) {
        headerBG();
    }
    if (window.pageYOffset < 200 && NAVIGATE.classList.contains('scrolled')) {
        headerBG();
    }
})