/**
 * Created by Иван on 15.05.2017.
 */
$(document).ready(function () {
    $('.slider').bxSlider({
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: '<img src="images/right_arrow.png" alt="">',
        prevText: '<img src="images/left_arrow.png" alt="">',
    });
    $('.carousel').bxSlider({
        pager: false,
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 550,
        slideMargin: 35,
        nextSelector: '#carousel_slider-next',
        prevSelector: '#carousel_slider-prev',
        nextText: '<img src="images/carousel_right.png" alt="">',
        prevText: '<img src="images/carousel_left.png" alt="">'
    });

    $(".menu_item").on({
        mouseenter: function () {
            $(this).children('.submenu').fadeIn(200);
        },
        mouseleave: function () {
            $(this).children('.submenu').fadeOut(300);
        }
    });
});