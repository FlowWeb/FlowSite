$(function() {

//     if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
//     var delta = 0;
//     if (event.wheelDelta) delta = event.wheelDelta / 120;
//     else if (event.detail) delta = -event.detail / 3;

//     handle(delta);
//     if (event.preventDefault) event.preventDefault();
//     event.returnValue = false;
// }

// function handle(delta) {
//  //    var time = 200;
// 	// var distance = 300;

//  //    $('html, body').stop().animate({
//  //        scrollTop: $(window).scrollTop() - (distance * delta)
//  //    }, time );
// }

});
$(document).ready(function(){

    $('body').bind('scroll',chk_scroll);
});

function chk_scroll(e)
{
    var elem = $(e.currentTarget);
    if (elem[0].scrollHeight - elem.scrollTop() == elem.outerHeight())
    {
        console.log("bottom");
    }

}
$(window).scroll(function() {

   var hT = $('#container').offset().top,
       hH = $('#container').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);

   if (wS > (hT+hH-wH)){

      changeToSecondPage()
   }else{

   	 changeToFirstPage()
   }

});
function scrollToContain1(){
	hT = $('.container-page-1').offset().top,
    hH = $('.container-page-1').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS == 1008){
    removeAdd('container',['.slogan','.aos-animate','.form','.zoom-in-down','.single_screen_slide','.zoom-in-down'],['slideInUp','slideInUp','slideInUp','slideInUp','slideLeftReturn','puffIn'])
   removeAddTime('container',['.zoom-in-down'],['puffIn'],1000,2000)


   }
}
jQuery(
  function($)
  {
    $('#container-page-1').bind('scroll', function()
                              {
                                if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
                                {
                                  alert('end reached');
                                }
                              })
  }
);
function scrollToContain2(){

}
function scrollToContain3(){

}
function scrollToContain4(){

}
function scrollToContain5(){

}
$( document ).ready(function() {

    $('html, body').animate({
        scrollTop: $("#container").offset().top
    }, 1000);

});
function removeAdd(container,element,className) {

 $.each( className, function( key, value ){

    $('.'+container+' '+element[key]).addClass('animated '+className[key]);
 });

}
function removeAddTime (container,element,className,time1,time2) {

setTimeout(function(){
 $.each( className, function( key, value ){

    $('.'+container+' '+element[key]).addClass('animated '+className[key]);
 });
  },time1);

 setTimeout(function(){
    $.each( className, function( key, value ){
     $('.'+container+' '+element[key]).removeClass(className[key]);
   });
 },time2);

}

function changeToSecondPage(){
 $('.a-menu').attr('style','color:#595959')

  $('.menu-a-2').attr('style','color:#fff')
 // $('#myBtn').css('background-image','url("./imgs/Arrow.png")')
$('#logoImg').attr('src','./imgs/logo_preview.png')
  // $('#logoImg2').attr('src','./imgs/logo_preview.png')
 elem = $('.li-menu');
 elem.hover(function () {
   $(this).css("background", "rgba(0, 0, 0, 0.1)").css("border-radius", "16px");
 }, function () {
   $(this).css("background", "none").css("border-radius", "16px");
 });
 $('#myBtn').attr('onclick','$(".main").moveTo(1);')
 $('#contactMenu').hide()
 $('.get-in-touch').show()
}
function changeToFirstPage(){
  $('#myBtn').removeClass('rotate');
  $('.a-menu').attr('style','color:#fff')
  $('.menu-a-2').attr('style','color:#fff')
  // $('#myBtn').css('background-image','url("./imgs/arrow.png")')
  $('#logoImg2').attr('src','./imgs/logo.png')
  $('#logoImg').attr('src','./imgs/logo.png')
  $('#myBtn').attr('onclick','$(".main").moveTo(2);')
  elem = $('.li-menu');
  elem.hover(function () {
    $(this).css("background", "rgba(255, 255, 255, 0.2)").css("border-radius", "16px");
 }, function () {
    $(this).css("background", "none").css("border-radius", "16px");
 });
 $('#contactMenu').show()
 $('.get-in-touch').hide()
}
