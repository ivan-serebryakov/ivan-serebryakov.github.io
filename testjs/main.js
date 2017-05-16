/**
 * Created by Иван on 16.05.2017.
 */
$(document).ready(function () {


    $('.slider_min').bxSlider({
        pager: false,
        controls: true,
        touchEnabled: false,
    });
    $('.slider_min_block').hide();


var slider = 0;
    if (localStorage.getItem('min_state') == null){
        localStorage.setItem('min_state' , 'false')
    };

    if(localStorage.getItem('min_state') == 'true'){

        $('.big_slider_block').hide();
        $('.slider_min_block').show();
    }
    if(localStorage.getItem('min_state') == 'false'){
        $('.slider_min_block').slideUp();
        $('.big_slider_block').slideDown();
    }



    //стрелки если больше 5 слайдов
    var slides_count = $('.slider_big').children('li').length;
        if(slides_count >= 5){
             slider = $('.slider_big').bxSlider({
                pagerCustom: '#slider_big_pager',
            });
        }
        else {
             slider = $('.slider_big').bxSlider({
                pagerCustom: '#slider_big_pager',
                controls: false,
            });
        }
    //всплывающее описание
    $('#slider_big_pager').find('a').on({
        mouseenter: function () {
            var index = parseInt($(this).attr('data-slide-index'));
            index += 1;
            var text1 = $('.slider_big').children('li').eq(-index).find('h1').text();
            var text2 = $('.slider_big').children('li').eq(-index).find('h2').text();
            $(this).after('<div class="pop_up"><span id="text1"></span><br><span id="text2"></span></div>');
            $('#text1').text(text1);
            $('#text2').text(text2);
        },
        mouseleave: function () {
            $('.pop_up').remove();
        }
    });


    //сворачивание слайдера
    $('.minify').on("click" , function () {
        $('.big_slider_block').slideUp(500);
        $('.slider_min_block').slideDown(500);
        localStorage.setItem('min_state' , true)
    });




    //разворачивание
    var over = false;
    $('.bx-prev , .bx-next').mouseenter(function() {
        over = true;
    })
    .mouseleave(function() {
        over = false;
    });


    $('.slider_min_block').find('li').click(function() {
        if (!over) {
            var slide_number = $(this).attr('id');
            console.log(slide_number);
            $('.slider_min_block').slideUp();
            $('.slider_min').bxSlider({
                pager: false,
                controls: true,
            });
            $('.big_slider_block').slideDown();

            if (slides_count >= 5){
                slider.reloadSlider({
                    pagerCustom: '#slider_big_pager',
                    controls: true,
                    startSlide: slide_number,
                });
            }
            else {
                slider.reloadSlider({
                    pagerCustom: '#slider_big_pager',
                    startSlide: slide_number,
                    controls:false,
                });
            }

            localStorage.setItem('min_state' , false)
        }
    });










});