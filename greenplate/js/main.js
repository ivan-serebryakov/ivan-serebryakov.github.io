$(document).ready(function () {
	//ДЛЯ АБЗАЦА
	$('#hide').slideUp(150);

	$('#more').click(function (){
		$('#hide').slideDown(150);
		$('#more').addClass("none");
		$('#sec_par').removeClass("prerolled");
		$('#sec_par').addClass("rolled");
	})
	
	$('#close').click(function (){
		$('#hide').slideUp(150);
		$('#more').removeClass("none");
		$('#sec_par').removeClass("rolled");
		$('#sec_par').addClass("prerolled");
	})
	//ДЛЯ КАРТЫ
	$('#map').slideUp(150);
	$('#show_map').click(function (){
		$('#map').slideDown(150);
		$('#show_map').addClass("none");
		$('#cross').removeClass("none")
	})


	
	$('#cross').click(function (){
		$('#map').slideUp(150);
		$('#show_map').removeClass("none");
		$('#cross').addClass("none")
	})


})