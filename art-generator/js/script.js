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
     var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00", "#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.change').css("background-color", colors[rand]);



     var colors = ["#739600", "#1F5EA8", "#F72C2C", "#FA5021", "#FB9F54", "#FFAD00", "#FFEB3B", "#55C934", "#4CAF58", "#1FA895", "#1FD2DB", "#2196F3", "#61338F", "#8F3378", "#E91E63", "#B32E37"];
     var rand = Math.floor(Math.random() * colors.length);
     $('.change2').css("background-color", colors[rand]);
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