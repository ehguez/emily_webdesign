$(document).ready(function(){

    let numberMade = [
    'one',
    'a series of two',
    'a series of three', 
    'a series of five', 
    'a series of eight', 
    'a series of ten', 
    'a series of twenty-five', 
    'a series of one hundred',
    ]

    console.log(numberMade);
 
    var randNumberSelector = Math.floor(Math.random() * numberMade.length)
    console.log(randNumberSelector);

    let numberSelect = numberMade[randNumberSelector];
    console.log(numberSelect)

    document.getElementById('number').innerHTML = numberSelect;



    

if (numberSelect === "one"){
 var  projectSingular = [
    '2D drawing',
    '3D structure',
    'typographic project',
    'illustration', 
    'animated gif',
    'interactive project', 
    'functional object', 
    'pattern',
    'collage',
    '3D drawing',
    'form project',
    'still-life',
    'speculative concept',
    'poster',
    'abstract painting',
    'flag',
    'portrait',
    'lanscape drawing',
    'handmade project',
    'zine',
    'map',
    'book cover',
    'comic strip',
    'album cover'
    ]
    console.log(projectSingular);
 
    var singProjectSelector = Math.floor(Math.random() * projectSingular.length)
    console.log(singProjectSelector);

    let singularSelect = projectSingular[singProjectSelector];
    console.log(singularSelect)

    document.getElementById('projectType').innerHTML = singularSelect;

} else {
    
    var projectOptions = [
    '2D drawings',
    '3D structures',
    'typographic projects',
    'illustrations', 
    'animated gifs',
    'interactive projects', 
    'functional objects', 
    'patterns',
    'collages',
    '3D drawings',
    'form projects',
    'still-lives',
    'speculative concepts',
    'posters',
    'abstract paintings',
    'flags',
    'portraits',
    'lanscape drawings',
    'handmade projects',
    'zines',
    'maps',
    'book covers',
    'comic strips',
    'album covers'
    ]

    console.log(projectOptions);
 
    var randProjectSelector = Math.floor(Math.random() * projectOptions.length)
    console.log(randProjectSelector);

    let projectSelect = projectOptions[randProjectSelector];
    console.log(projectSelect)

    document.getElementById('projectType').innerHTML = projectSelect;

}


    let materialOptions = [
    'found materials',
    'photoshop',
    'digital tools',
    'a scanner',
    'a photocopier',
    'a camera',   
    'illustrator',
    'code',
    'child-like materials',
    'play-doh',
    'stickers',
    'paint',
    'traditional art materials',
    'organic materials',
    'type only',
    'found imagery',
    'a material you’ve never used before',
    'one color',
    'outdated technology',
    'paper',
    'items from your kitchen',
    'liquids',
    'flyers'
    ]

    console.log(materialOptions)
 
    var randMaterialSelector = Math.floor(Math.random() * materialOptions.length)
    console.log(randMaterialSelector);

    let materialSelect = materialOptions[randMaterialSelector];
    console.log(materialSelect)

    document.getElementById('material').innerHTML = materialSelect;



    let timeOptions = [
    '15&nbsp;minutes', 
    '30&nbsp;minutes', 
    '45&nbsp;minutes', 
    '1&nbsp;hour', 
    '2&nbsp;hours',
    '3&nbsp;hours',
    '5&nbsp;hours',
    'a&nbsp;day'
    ]

    console.log(timeOptions);
 
    var randSelector = Math.floor(Math.random() * timeOptions.length)
    console.log(randSelector);

    let timeSelect = timeOptions[randSelector];
    console.log(timeSelect)

    document.getElementById('time').innerHTML = timeSelect;



    let inspirationOptions = [
    "Anni Albers's woven tapestries",
    "Susan Kare's bitmap illustrations", 
    "glitch art", 
    "the work of Tauba Auerbach", 
    "the concept of repetition",
    "Agnes Martin's paintings",
    "today's breaking news",
    "a featured New Yorker article",
    "Bruce Nauman's 'Square Dance'",
    "Dieter Rot's artist books",
    "a leaf",
    "the sky",
    "relational aesthetics",
    "Yayoi Kusama",
    "today's featured Wikipedia article",
    "intergalactic travel",
    "Keetra Dean Dixon's lettering",
    "the Gutenberg bible",
    "Ed Rusha's paintings",
    "medieval stained glass",
    "Giorgio Morandi's paintings",
    "concrete poetry",
    "the work of Shahzia Sikander",
    "Glenn Ligon's artwork",
    "everyday objects",
    "DADA",
    "Reid Miles' album covers",
    "DADA",
    "El Lissitzky",
    "psychedelic posters",
    "Carmen Herrera's paintings",
    "Cremaster 3",
    "Islamic geometric patterns",
    "ancient Greek scuplture",
    "Japanese woodblock prints",
    "Olafur Eliasson's work",
    "Anette Lenz's posters",
    "daguerreotpye images",
    "an animal",
    "bird flight patterns",
    "puzzle",
    "sci-fi",
    "woven Navajo blankets"
    ]

    console.log(inspirationOptions);
 
    var inspirationSelector = Math.floor(Math.random() * inspirationOptions.length)
    console.log(inspirationSelector);

    let inspirationSelect = inspirationOptions[inspirationSelector];
    console.log(inspirationSelect)

    document.getElementById('inspiration').innerHTML = inspirationSelect;


    $('#reload').click(function(){ 
        location.reload(true); 
    });

    $('#load').click(function(){ 
         window.location("index.html"); 
    });


   
     var colorTheme = ['#DEFFFF', "#B8FF69", "#FF6C07", "#C911AC", "#FFF0F0", 
     "#FFF0F0", "#E2FF53", "#7E1B46", "#FF4595", "#542C2C", "#333333", "#FFE987",
     "#E8F3FF", "#E9FFE8", "#DBFFD1", "#C075FF", "#014D46", "#F5F5F5", "#196E68",
     "#FAFFD8", "#FFDCFF", "#E14442", "#3F3F54", "#2F62FF", "#340635", "#F5FF68", "#FFDDDD"]
     var rand = Math.floor(Math.random() * colorTheme.length);
     $('body').css("background-color", colorTheme[rand]);
     $('.pTwo').css("color", colorTheme[rand]);
     $('.background-2').css("background-color", colorTheme[rand]);
     $('#reload').css("color", colorTheme[rand]);

     var backgroundShape = ['url(img/bckElement_2.png)', 'url(img/bckElement_3.png)', 
     'url(img/bckElement_4.png)', 'url(img/bckElement_5.png)', 'url(img/bckElement_6.png)',
     'url(img/bckElement_7.png)', 'url(img/bckElement_8.png)', 'url(img/bckElement_9.png)',
     'url(img/bckElement_10.png)', 'url(img/bckElement_11.png)', 'url(img/bckElement_12.png)',
     'url(img/bckElement_13.png)', 'url(img/bckElement_14.png)', 'url(img/bckElement_15.png)']
     var rand = Math.floor(Math.random() * backgroundShape.length);
     $('.background-2').css("background-image", backgroundShape[rand]);

    var extraShape = ['url(img/shape_1.svg)', 'url(img/shape_2.svg)', 
    'url(img/shape_3.svg)', 'url(img/shape_4.svg)', 'url(img/shape_5.svg)',
    'url(img/shape_6.svg)', 'url(img/shape_7.svg)',  'url(img/shape_8.svg)',
    'url(img/shape_9.svg)', 'url(img/shape_10.svg)', 'url(img/shape_11.svg)',
    'url(img/shape_12.svg)', 'url(img/shape_13.svg)', 'url(img/shape_14.svg)']
    var rand = Math.floor(Math.random() * extraShape.length);
    $('.shape1').css("background-image", extraShape[rand]);
    console.log(extraShape[rand])

    var extraShape = ['url(img/shape_1.svg)', 'url(img/shape_2.svg)', 
    'url(img/shape_3.svg)', 'url(img/shape_4.svg)', 'url(img/shape_5.svg)',
    'url(img/shape_6.svg)', 'url(img/shape_7.svg)',  'url(img/shape_8.svg)',
    'url(img/shape_9.svg)', 'url(img/shape_10.svg)', 'url(img/shape_11.svg)',
    'url(img/shape_12.svg)', 'url(img/shape_13.svg)', 'url(img/shape_14.svg)']
    var rand = Math.floor(Math.random() * extraShape.length);
    $('.shape2').css("background-image", extraShape[rand]);

    console.log(extraShape[rand])



//TIME TEST

    let timeForClock = [
    '00:15:00', 
    '00:30:00', 
    '00:45:00', 
    '01:00:00', 
    '02:00:00',
    '03:00:00',
    '05:00:00',
    '24:00:00'
    ]

    console.log(timeForClock);
 
    var randSelector = Math.floor(Math.random() * timeForClock.length)
    console.log(randSelector);

    let timeForClockSelect = timeForClock[randSelector];
    console.log(timeForClockSelect)


/*

    var countDownDate = new Date(timeForClockSelect).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("clock").innerHTML = hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("clock").innerHTML = "EXPIRED";
    }
    }, 1000); */


    /*$("#startClock").click(function() {
    var counter = 5;
    setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("timeOptions");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         alert('sorry, out of time');
         clearInterval(counter);
       }
     }, 1000);*/
});






/*   let materialOptions = [
    'material1',
    'material2', 
    'material3'
    ]

    console.log(materialOptions);
 
    var randMaterialSelector = Math.floor(Math.random() * materialOptions.length)
    console.log(randMaterialSelector);

    let materialSelect = materialOptions[randMaterialSelector];
    console.log(materialSelect)

    document.getElementById('material').innerHTML = materialSelect;
*/

    /*
     let colorOptions = [
    '#F8FF7E',
    '#F39485', 
    '#F39485'
    ];
    var colorSelector = Math.floor(Math.random() * colorOptions.length)
    console.log(colorSelector);

    let colorNew = colorOptions[colorSelector];
    console.log(colorNew)

    document.getElementById('p').css = "color", colorNew;
*/





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


/*
     var type = ['test', "test2", "test3", "test4"];
     var rand = Math.floor(Math.random() * type.length);
     $('.test1').css(".test1", type[rand]);

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
*/

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