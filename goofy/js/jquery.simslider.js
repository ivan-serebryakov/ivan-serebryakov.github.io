/**
* SimSlider v1.2.0
* mail[соб@ка]art-prog[тчк]ru
* Все стили слайдера на вашей совести
*/

( function($){
	$.fn.SimSlider = function(options)
    {
        var options = options || {};

        return this.each(function(index, element) {
            var opt = $.extend( {
                "autoplay": true,
                "item": ".ss-item", // селектор контейнера одного слайда
                "next": ".ss-next",
                "prev": ".ss-prev",
                "dots": ".ss-dot",  // кнопки переключения конкретных слайдов (1,2,3...)
                "dotActClass": "active",  // стиль активной кнопки слайда
                "delay": 4000, // автопрокрутка (мс)
                "speed": 800, // автопрокрутка (мс)
                // callback функции
                "onAfterInit" : function( sliders, nextBtn, prevBtn, dots ){ return false; }, // после инициализации слайдера
                "onBeginAnimate" : function( slider, status ){ return false; }, // перед началом прокрутки слайда
                "onEndAnimate" : function( slider, status ){ return false; } // после окончания прокрутки
            }, options );
            var timer, slNow=0, $slider = $(element), $sliders, slWidth, $dots, animateNow = false, isHover = false;

            // есть ли слайды?
            $sliders = $(opt.item, $slider);
            if( $sliders.length == 0 ){
                if (window.console && window.console.log) {
                    console.log("Sim Slider: slides not found!");
                } else {
                    if (window.status) {
                        window.status = "Sim Slider: slides not found!";
                    }
                }
                return;
            }

            // инициализация функций
            var nextFn = function() {
                if (animateNow) { return false; }
                // запускаем анимацию
                animate(slNow + 1);
                return false;
            };

            var prevFn = function()
            {
                if (animateNow) { return false; }
                // запускаем анимацию
                animate(slNow - 1, (-1));
                return false;
            };

            var dotsFn = function()
            {
                if (animateNow) { return false; }
                var num = $(this).attr("href").split("-");
                if (num.length > 1) {
                    num = parseInt(num[1]);
                    // проверяем номер активного слайда
                    if (num == slNow) {  return false;  }
                    // проверяем существование слайдера с номером num
                    if ($sliders[num]) {
                        // запускаем анимацию
                        animate(num);
                    }
                }
                return false;
            };

            var animate = function(slnext, dir)
            {
                if (animateNow) {  return;  }
                clearTimeout(timer);
                dir = dir || 1;
                if (slnext > $sliders.length-1) {  slnext = 0;  }
                if (slnext < 0) {  slnext = $sliders.length-1;  }
                animateNow = true;
                var lpos = slWidth * dir;
                $( $sliders[slnext] ).css( { left: lpos } ); // берем следующий слайдер и ставим его справа/слева от текущего
                if( $dots.length ){
                    $( $dots ).removeClass( opt.dotActClass );
                }
                // callback
                if( opt.onBeginAnimate ){
                    opt.onBeginAnimate( $sliders[slnext], 'hidden' );
                    opt.onBeginAnimate( $sliders[slNow], 'visible' );
                }
                // анимация
                $( $sliders[slNow] ).animate({left: lpos * (-1) }, opt.speed);
                $( $sliders[slnext] ).animate({left: 0 }, opt.speed, function() {
                    if($dots.length) {
                        $($dots[slnext]).addClass(opt.dotActClass);
                    }
                    // callback
                    if( opt.onEndAnimate ){
                        opt.onEndAnimate($sliders[slnext], 'visible');
                        opt.onEndAnimate($sliders[slNow], 'hidden');
                    }
                    animateNow = false;
                    slNow = slnext;
                    if (opt.autoplay && !isHover) {
                        timer = setTimeout(nextFn, opt.delay + opt.speed);
                    }
                } );
            };

            // инициализация слайдера
            slWidth = $($sliders[0]).outerWidth();
            // прячем все слайды кроме первого
            for (var i=1; i<$sliders.length; i++) {
                $($sliders[i]).css('left', (slWidth + 5) * (-1));
            }
            // привязываем события
            var $nextBtn = $(opt.next, $slider),
                $prevBtn = $(opt.prev, $slider);
            if ($nextBtn.length && $prevBtn.length) {
                $($nextBtn).on("click", nextFn);
                $($prevBtn).on("click", prevFn);
            }
            $dots = $(opt.dots, $slider);
            if ($dots.length) {
                $dots.on("click", dotsFn);
                $($dots[0]).addClass(opt.dotActClass);
            }

            if (opt.autoplay) {
                timer = setTimeout(nextFn, opt.delay + opt.speed);
                $sliders.hover(
                    function() {
                        clearTimeout(timer);
                        isHover = true;
                    },
                    function() {
                        isHover = false;
                        timer = setTimeout(nextFn, opt.delay + opt.speed);
                    }
                );
            }

            // callback
            if (opt.onAfterInit) {
                opt.onAfterInit($sliders, $nextBtn, $prevBtn, $dots);
            }
        });
	};
	$.SimSlider = $.fn.SimSlider;
} )( jQuery );
