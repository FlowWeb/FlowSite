$( document ).ready(function() {

//  $('body').bind('mousewheel', function(e) {
//    if(e.originalEvent.wheelDelta / 120 > 0) {
//      console.log('up')
//      indexMain = indexMain == 1 ? 5: indexMain-1
//
//    } else {
//        indexMain = indexMain == 5 ? 1: indexMain+1
//    }
//    console.log(indexMain)
//    $(".main").moveTo(indexMain);
// });
  removeAddTime('container',['.zoom-in-down'],['puffIn'],2000,2500)

 $(".main").onepage_scroll({
   beforeMove: function(index) {
    indexMain = parseInt(index)
     if(index == 1){
       removeAdd('container',['.slogan','.aos-animate','.form','.zoom-in-down','.single_screen_slide','.zoom-in-down'],['swashIn','swashIn','swashIn','swashIn','slideLeftReturn','puffIn'])
       removeAddTime('container',['.zoom-in-down'],['puffIn'],1000,2000)

     }
     if(index > 1){

       if(index == 2){
          //removeAdd('container-page-1',['.phone','.img-x','.img-z','.text'],['slideInUp','slideInUp','slideInUp','slideInUp'])


          removeAdd('container-page-1',['.phone','.img-x','.img-z','.text'],['slideInUp','slideInUp','slideInUp','slideInUp'])
       }
       if(index == 3){
         removeAdd('container-page-2',['.phone','.img-x','.img-z'],['slideInUp','slideInUp','slideInUp'])
         removeAddTime('container-page-2',['.text'],['slideInUp'],200,1000)

       }
       if(index == 4){

         removeAdd('container-page-3',['.phone','.img-x','.img-z','.text'],['slideInUp','slideInUp','slideInUp','slideInUp'])

       }
       if(index == 5){
         setTimeout(function(){
           $('.container-page-4 .div-phone').addClass('magictime slideDownReturn');
           $('.container-page-4 .text').addClass('magictime slideInUp')

         }, 0);

         setTimeout(function(){
           $('.container-page-4 .div-phone').removeClass('slideDownReturn');
           $('.container-page-4 .text').removeClass('slideInUp');
         },1000);
       }

     }
     if(index > 1){
       changeToSecondPage(index)
     }else{
       changeToFirstPage()

     }
   },
   afterMove: function(index) {
  }
 });
});
function changeToSecondPage(index){
 $('.a-menu').attr('style','color:#595959')

 // $('#myBtn').css('background-image','url("./imgs/Arrow.png")')
if(index == 2){
  $('#myBtn').removeClass('rotate');
  $('#myBtn').css('background-image','url("./imgs/Arrow.png")')
}else{
  $('#myBtn').css('background-image','url("./imgs/arrow.png")')
  $('#myBtn').addClass('rotate');
}
$('#logoImg').attr('src','./imgs/logo_preview.png')

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
  $('#myBtn').css('background-image','url("./imgs/arrow.png")')
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
function removeAdd(container,element,className) {

 $.each( className, function( key, value ){

    $('.'+container+' '+element[key]).addClass('magictime '+className[key]);
 });

 setTimeout(function(){
    $.each( className, function( key, value ){
     $('.'+container+' '+element[key]).removeClass(className[key]);
   });
 },1000);

}
function removeAddTime (container,element,className,time1,time2) {

setTimeout(function(){
 $.each( className, function( key, value ){

    $('.'+container+' '+element[key]).addClass('magictime '+className[key]);
 });
  },time1);

 setTimeout(function(){
    $.each( className, function( key, value ){
     $('.'+container+' '+element[key]).removeClass(className[key]);
   });
 },time2);

}
