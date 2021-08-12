$(document).ready(function () {
    $('.navigation__burger').click(function (event) {
        $('.navigation').addClass('active-nav');
        $('.navigation__rightside').addClass('active');
        $('.navigation__close').addClass('active');
        $('.navigation__leftside').addClass('active');
    });
});
$(document).ready(function () {
    $('.navigation__close').click(function (event) {
        $('.navigation').removeClass('active-nav');
        $('.navigation__rightside').removeClass('active');
        $('.navigation__close').removeClass('active');
        $('.navigation__leftside').removeClass('active');
    });
});