

$(document).ready(function() {
	$('#main_menu').hide();
	$('#menu_btn').click(function() {
		$(this).attr('class', 'spin');
		$('#main_menu').show(1000);
		//$(this).removeAttr('id');
		//$(this).attr('id', 'hide_menu_btn');
		
	});
	$('.menu a').click(function() {
		$('#menu_btn').attr('class', 'spin_revers');
		$('#main_menu').hide(1000);
	});
});

