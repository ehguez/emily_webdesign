$(document).ready(function(){
 
     var colors = ["#9d3a56", "#eee6a4", "#ff5eb9", "#ff1e33"];
     var rand = Math.floor(Math.random() * colors.length);
     $(".pixel2").css("background", colors[rand]);
     $('a').css("color", colors[rand]);


     var colors = ["#FF830D", "#D1731A", "FEC48D"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(3n+0)').css("background", colors[rand]);

     var colors = ["#D8C622", "#FFF05E", "#D8C40D", "#F2DA00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(odd)').css("background", colors[rand]);

    

     var colors = ['#fff7ec', '#7f0000'];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(6n+0)').css("background", colors[rand]);

     var colors = ["#9d3a56", "#eee6a4", "#ff5eb9", "#ff1e33"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(7n+0)').css("background", colors[rand]);
    //$('#a4').css("color", colors[rand]);

     var colors = ["#7ffe5d", "#78aec0", "#cdff6c", "#95dab0", "#ff5e5e"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(8n+1)').css("background", colors[rand]);
    // $('#list-arrow-4').css("fill", colors[rand]);

     //$('a:hover').css("color", colors[rand]);
     //$('a:visited').css("color", colors[rand]);
    // $('a:active').css("color", colors[rand]);


     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(9n+0)').css("background", colors[rand]);
   
     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(11n+0)').css("background", colors[rand]);
     $('#refresh-button').css("fill", colors[rand]);
     $('#list-arrow-1').css("fill", colors[rand]);
     $('#list-arrow-2').css("fill", colors[rand]);

     //$('#list-arrow-3').css("fill", colors[rand]);

     //$('#a3').css("color", colors[rand]);

     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel2:nth-child(13n+1)').css("background", colors[rand]);

    /*var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.work:hover').css("color", colors[rand]);*/

    $('.refresh').click(function(){ 
        location.reload(true); 
    });

    $('#moreInfoButton').click(function(){
        $('.moreInfoTextBox').toggle();
    });

    $('#moreCodeButton').click(function(){
        $('.moreCodeBox').toggle();
    });

   $('#resizeTipButton').click(function(){
        $('.resizeTipBox').toggle();
    });



});

    
    




/*
THIS THING WORKS TO SELECT ONE
var rand = firstRandom [Math.floor(Math.random() * firstRandom.length)];
console.log(rand);

$(document).ready(function(){
     $(rand).addClass(".display");
});




function.display(rand){
    document.getRand(rand).style.display = "none";
}




/* $(document).ready(function(){
     $("#shape1").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
});
});




/* $("#shape1").click(function(){
    console.log('click')
    $("#shape1").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
}); */