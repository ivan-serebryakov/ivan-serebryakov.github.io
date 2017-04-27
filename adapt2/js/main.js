
$(document).ready(function(){
    /*$('.category_slider').bxSlider({
        pagerCustom: '.cat_pager',
        controls: false,
        touchEnabled: false,
        infiniteLoop: false,
        auto: false,

    });*/
    $('.slider').bxSlider({
        controls: false,
        infiniteLoop: false,
        auto: false,
    });
    
    
    $('.cat_pager').children().on('click', function () {
        var num = $(this).attr('data-slide-index');
        var id = "#cat_"+num;
        console.log(id);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(id).siblings().removeAttr('style');
        $(id).attr('style' , 'display: block;');
    });
    
});