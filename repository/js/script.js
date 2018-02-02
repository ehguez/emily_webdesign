console.log('HELLO')

$(document).ready(function(){
    //pick random id
    var firstRandom = [
        "shape1",
        "shape2",
        "shape3"
    ];

    var colors = [
    "red",
    "green",
    "blue"
    ]


    console.log(firstRandom);

    function getRandom(array){
        var rand = Math.floor(Math.random() * array.length);
        return array[rand];
    }

// function getRandomShape(){
//     var shapeID = getRandom(0,firstRandom.length);
//     console.log(shapeID);
//     return firstRandom[shapeID];
// }

// function getRandomColor(){
//     var colorID = getRandom(0,colors.length);
//     colors[colorID]
// }


// var rand = firstRandom[Math.floor(Math.random() * firstRandom.length)];
// console.log(rand);


/*
    $('body').change(function(){
        console.log('click');
        var randomShape = getRandom(firstRandom);
        console.log(randomShape);
        $(this).append('<div id='+ randomShape + '></div>');
    });

    var randomColor = getRandom(colors);
    console.log(randomColor);
    */

    // $('#shape1').click(function() {
    //     $(randomShape).fadeOut('slow');
    // });

    $(document).ready(function() {
     var colors = ["#9d3a56", "#eee6a4", "#ff5eb9", "#ff1e33"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel').css("background", colors[rand]);

     var colors = ["#FF830D", "#D1731A", "FEC48D"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(3n+0)').css("background", colors[rand]);

     var colors = ["#D8C622", "#FFF05E", "#D8C40D", "#F2DA00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(odd)').css("background", colors[rand]);

     var colors = ['#fff7ec', '#7f0000'];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(6n+0)').css("background", colors[rand]);

     var colors = ["#9d3a56", "#eee6a4", "#ff5eb9", "#ff1e33"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(7n+0)').css("background", colors[rand]);

    var colors = ["#7ffe5d", "#78aec0", "#cdff6c", "#95dab0", "#ff5e5e"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(8n+1)').css("background", colors[rand]);

     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(9n+0)').css("background", colors[rand]);

     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(11n+0)').css("background", colors[rand]);

     var colors = ["#444332", "#356789", "#354678", "#FB9F54", "#FFAD00"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.pixel:nth-child(13n+1)').css("background", colors[rand]);



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