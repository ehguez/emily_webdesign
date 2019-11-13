$(document).ready(function(){

$('.elm').click(function (){
    $('.elmfall').toggle();
    $('.elm').toggle();
});

$('div').mouseenter(function (){
    $(this).animate({
     left: +20
  } , 0, function() {
  }); });

$('div').mouseleave(function (){
    $(this).animate({
     left: +40
  } , 0, function() {
  }); });



$('.elmfall').click(function (){
    $('.elmfall').toggle();
    $('.elm').toggle();
});


$('.elm2').click(function (){
    $('.elmfall2').toggle();
    $('.elm2').toggle();
});

$('.elmfall2').click(function (){
    $('.elm2').toggle();
    $('.elmfall2').toggle();

});

$('.whiteoak').click(function (){
    $('.whiteoakfall').toggle();
    $('.whiteoak').toggle();
});

$('.whiteoakfall').click(function (){
    $('.whiteoakfall').toggle();
    $('.whiteoak').toggle();
});

$('.whiteoak2').click(function (){
    $('.whiteoakfall2').toggle();
    $('.whiteoak2').toggle();
});

$('.whiteoakfall2').click(function (){
    $('.whiteoakfall2').toggle();
    $('.whiteoak2').toggle();
});


$('.greenaspen').click(function (){
    $('.greenaspenfall').toggle();
    $('.greenaspen').toggle();
});

$('.greenaspenfall').click(function (){
    $('.greenaspenfall').toggle();
    $('.greenaspen').toggle();
});

$('.greenaspen2').click(function (){
    $('.greenaspenfall2').toggle();
    $('.greenaspen2').toggle();
});

$('.greenaspenfall2').click(function (){
    $('.greenaspenfall2').toggle();
    $('.greenaspen2').toggle();
});

$('.maple').click(function (){
    $('.maplefall').toggle();
    $('.maple').toggle();
});

$('.maplefall').click(function (){
    $('.maplefall').toggle();
    $('.maple').toggle();
});

$('.birch').click(function (){
    $('.birchfall').toggle();
    $('.birch').toggle();
});

$('.birchfall').click(function (){
    $('.birchfall').toggle();
    $('.birch').toggle();
});

$('.redoak').click(function (){
    $('.redoakfall').toggle();
    $('.redoak').toggle();
});

$('.redoakfall').click(function (){
    $('.redoak').toggle();
    $('.redoakfall').toggle();

});


$(document).scroll(function(){
 $('.snow').toggle();
});




$( "#a" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
   $('.zoetrope').toggle();
});



$(document).keypress(function(){
    $('.happyfall').toggle();
});




$( "#other" ).click(function() {
  $( "#target" ).keydown();
});

   
  

});
