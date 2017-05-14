/**
 * Created by Иван on 29.04.2017.
 */
$(document).ready(function () {
   $('#scroll_up').on('click' , function () {
       $('body,html').animate({scrollTop:0},800);
   });
});