$(document).ready(function () {
	$("#pic1").hover(
		function() { 
      $("#block1_pic2").fadeIn(1000);},
      function  () {
    $("#block1_pic2").fadeOut(600);
      });
	$("#pic2").hover(
		function() { 
      $("#block2_pic2").fadeIn(1000);},
      function  () {
    $("#block2_pic2").fadeOut(600);
      });
})