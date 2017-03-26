$(document).ready(function() {
	$('#one').click(function() {
		$('#ar1').attr("class", "spin");
		$('#one').attr("id", "one_hide");
		$('#one_hide').click(function() {
			$('#ar1').attr("class", "spin_revers");
			$('#one_hide').attr("id", "one");
		});
	});
	$('#two').click(function() {
		$('#ar2').attr("class", "spin");
		$('#two').attr("id", "two_hide");
		$('#two_hide').click(function() {
			$('#ar2').attr("class", "spin_revers");
			$('#two_hide').attr("id", "two");
		});
	});
	$('#three').click(function() {
		$('#ar3').attr("class", "spin");
		$('#three').attr("id", "three_hide");
		$('#three_hide').click(function() {
			$('#ar3').attr("class", "spin_revers");
			$('#three_hide').attr("id", "three");
		});
	});
	$('#four').click(function() {
		$('#ar4').attr("class", "spin");
		$('#four').attr("id", "four_hide");
		$('#four_hide').click(function() {
			$('#ar4').attr("class", "spin_revers");
			$('#four_hide').attr("id", "four");
		});
	});
})