$(document).ready(function() {
	$('.make_order').click(function() {
		$('.formwrap').fadeIn(400);
		$('.form_fade').fadeIn(400)
	});
	$('#close_cross').click(function(){
		$('.formwrap').fadeOut(400);
		$('.form_fade').fadeOut(400)
	});
	$('#send').click(function() {
		$('.message_post').fadeIn(200);
		setTimeout(function(){
			$('.formwrap').fadeOut(400);
			$('.form_fade').fadeOut(400);
			$('.message_post').fadeOut(400);
		}, 2000);
	});
	$('#send_mail').click(function() {
		$('.message_post').fadeIn(300);
		$('.form_fade').fadeIn(400);
		setTimeout(function(){
			$('.form_fade').fadeOut(400);
			$('.message_post').fadeOut(400);
		}, 2000);
	})
});