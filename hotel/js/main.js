$(document).ready(function() {
	$("#btn").click(function() {
		$('.bgc, .up_block').fadeIn(1000);
	});
	$('.bgc').click(function() {
		$('.bgc, .up_block').fadeOut(600);
	});
});