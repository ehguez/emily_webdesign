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

    $('#about').click(function(){
        $('#about-text').toggle();
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

  

});
