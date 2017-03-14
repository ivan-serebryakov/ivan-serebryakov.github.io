$(document).ready(function(){
  $('.first_slider').bxSlider({

  	auto: true,
  	autoHover: true,
  	pause: 1300,
  	controls: false,
  });
});

$(document).ready(function(){
  $('.second_slider').bxSlider({
  	nextSelector: '#slider-next',
  	prevSelector: '#slider-prev',
  	prevText: '<button><img src="images/left_arrow.png" alt=""></button>',
  	nextText: '<button><img src="images/right_arrow.png" alt=""></button>', 
  });
});