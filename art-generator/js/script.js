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




    $('body').click(function(){
        console.log('click');
        var randomShape = getRandom(firstRandom);
        console.log(randomShape);
        $(this).append('<div id='+ randomShape + '></div>');
    });

    var randomColor = getRandom(colors);
    console.log(randomColor);
    

    // $('#shape1').click(function() {
    //     $(randomShape).fadeOut('slow');
    // });



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