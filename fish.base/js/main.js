$(document).ready(function(){
    
  //popup
  $('.order_call').on('click',function () {
	 $('.popup , .popup_fade').fadeIn(700);
	 $('.popup_fade , #close_popup').on('click',function () {
         $('.popup , .popup_fade').fadeOut(700);
     });
  });
});


/*$(".submit_btn").submit(function() {
 $.ajax({
 type: "",//change
 url: "",//change
 data: $(".submit_btn").serialize()
 }).done(function() {
 //alert("Спасибо за заявку!");
 $(".submit_btn").trigger("reset");
 setTimeout(function() {
 $('.popup , .popup_fade').fadeOut(700);
 }, 1000);
 });
 return false;
 });*/
