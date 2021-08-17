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

$(document).ready(function () {
    $('#firsttab').click(function (event) {
        $('#firsttab').addClass('activetab');
        $('#secondtab').removeClass('activetab');
        $('#thirdtab').removeClass('activetab');
        $('#tab1').addClass('activeblocktab');
        $('#tab2').removeClass('activeblocktab');
        $('#tab3').removeClass('activeblocktab');
    });
    $('#secondtab').click(function (event) {
        $('#firsttab').removeClass('activetab');
        $('#secondtab').addClass('activetab');
        $('#thirdtab').removeClass('activetab');
        $('#tab1').removeClass('activeblocktab');
        $('#tab2').addClass('activeblocktab');
        $('#tab3').removeClass('activeblocktab');
    });
    $('#thirdtab').click(function (event) {
        $('#firsttab').removeClass('activetab');
        $('#secondtab').removeClass('activetab');
        $('#thirdtab').addClass('activetab');
        $('#tab1').removeClass('activeblocktab');
        $('#tab2').removeClass('activeblocktab');
        $('#tab3').addClass('activeblocktab');
    });
});
$('.buy__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{
            breakpoint: 1020,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$(document).ready(function () {
    $('#firstask').click(function (event) {
        document.getElementById('firstquest').classList.toggle('activequest');
    });
    $('#secondask').click(function (event) {
        document.getElementById('secondquest').classList.toggle('activequest');
    });
    $('#thirdask').click(function (event) {
        document.getElementById('thirdquest').classList.toggle('activequest');
    });
    $('#forthask').click(function (event) {
        document.getElementById('forthquest').classList.toggle('activequest');
    });
})

$('.testimonial__slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
})
/*$(document).ready(function () {
    $('.products-slider').slick()
})*/