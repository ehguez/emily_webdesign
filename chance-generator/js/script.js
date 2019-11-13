$(document).ready(function(){

    let numberMade = [
    'C',
    'H',
    'A',
    'N',
    'C',
    'E'
    ]

    console.log(numberMade);
 
    var randNumberSelector = Math.floor(Math.random() * numberMade.length)
    console.log(randNumberSelector);

    let numberSelect = numberMade[randNumberSelector];
    console.log(numberSelect)

    document.getElementById('number').innerHTML = numberSelect;

    

if (numberSelect === "one"){
 var  projectSingular = [
    '1-2',
    '2-3',
    '3-4',
    '4-5', 
    '5-6',
    '6-7', 
    '7-8', 
    '8-9',
    ]
    console.log(projectSingular);
 
    var singProjectSelector = Math.floor(Math.random() * projectSingular.length)
    console.log(singProjectSelector);

    let singularSelect = projectSingular[singProjectSelector];
    console.log(singularSelect)

    document.getElementById('projectType').innerHTML = singularSelect;

} else {
    
    var projectOptions = [
    '1-2',
    '2-3',
    '3-4',
    '4-5', 
    '5-6',
    '6-7', 
    '7-8', 
    '8-9',
    ]

    console.log(projectOptions);
 
    var randProjectSelector = Math.floor(Math.random() * projectOptions.length)
    console.log(randProjectSelector);

    let projectSelect = projectOptions[randProjectSelector];
    console.log(projectSelect)

    document.getElementById('projectType').innerHTML = projectSelect;

}


    let materialOptions = [
    'a',
    'b',
    'c', 
    'd', 
    'e', 
    'f', 
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
    ]

    console.log(materialOptions)
 
    var randMaterialSelector = Math.floor(Math.random() * materialOptions.length)
    console.log(randMaterialSelector);

    let materialSelect = materialOptions[randMaterialSelector];
    console.log(materialSelect)

    document.getElementById('material').innerHTML = materialSelect;



    let timeOptions = [
    '1', 
    '2', 
    '3', 
    '4', 
    '5',
    '6',
    '7',
    '8',
    '9'
    ]

    console.log(timeOptions);
 
    var randSelector = Math.floor(Math.random() * timeOptions.length)
    console.log(randSelector);

    let timeSelect = timeOptions[randSelector];
    console.log(timeSelect)

    document.getElementById('time').innerHTML = timeSelect;



    // let inspirationOptions = [
    // 'circle',
    // 'square',
    // 'oval',
    // 'rectangle',
    // 'flower',
    // 'star',
    // 'blob',
    // 'wiggly line',
    // 'triangle',
    // 'random geometric shape',
    // ]

    // console.log(inspirationOptions);
 
    // var inspirationSelector = Math.floor(Math.random() * inspirationOptions.length)
    // console.log(inspirationSelector);

    // let inspirationSelect = inspirationOptions[inspirationSelector];
    // console.log(inspirationSelect)

    // document.getElementById('inspiration').innerHTML = inspirationSelect;



var newnumber = Math.floor(Math.random() * 84)
console.log(newnumber);

document.getElementById('width').innerHTML = newnumber;




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
