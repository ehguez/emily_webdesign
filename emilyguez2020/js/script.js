$(document).ready(function(){

   $('#rightarrow').click(function(){ 
        console.log('isthisthingon');
        $('#page1').toggle();
        $('#page2').toggle();
        $('#rightarrow').toggle();
        $('#rightarrow2').toggle();
        $('#leftarrow').toggle();
        $('#leftarrow3').toggle();
    });

   $('#mirrormaze').mouseenter(function(){
    console.log('mirrormirror')
    document.getElementById('mirrormaze').style.backgroundColor= "CornflowerBlue";
    });

     $('#mirrormaze').click(function(){
    console.log('mirrormirror')
    document.getElementById('mirrormaze').style.backgroundColor= "DarkViolet";
    });

    // $("#mirrormaze" ).mouseout(function(){
    // console.log('eatyourfoot')
    // document.getElementById('mirrormaze').style.backgroundColor="black";
    // });


    $('#room402').mouseenter(function(){
    document.getElementById('room402').style.backgroundColor= "Purple";
    });

     $('#room402').click(function(){
    document.getElementById('room402').style.backgroundColor= "red";
    });


    // $("#room402" ).mouseout(function(){
    // document.getElementById('room402').style.backgroundColor="black";
    // });

    $('#fiftyfifty').mouseenter(function(){
    document.getElementById('fiftyfifty').style.backgroundColor= "LawnGreen";
    });

    // $("#fiftyfifty" ).mouseout(function(){
    // document.getElementById('fiftyfifty').style.backgroundColor="black";
    // });

     $('#futurelooms').mouseenter(function(){
    document.getElementById('futurelooms').style.backgroundColor= "orange";
    });

    // $("#futurelooms" ).mouseout(function(){
    // document.getElementById('futurelooms').style.backgroundColor="black";
    // });


 // $('#mirrormaze').mouseover(function(){
 //    console.log('mirrormirror')
 //    document.getElementById('mirrormaze').style.backgroundColor= "green";
 //    $(this)mouseout(function){
 //    document.getElementById('mirrormaze').style.backgroundColor= "none";
 //    }
 // });

// $( "#mirrormaze").hover(
//   function() {
//     console.log('what')
//     $(this).getElementById('mirrormaze').style.backgroundColor= "green"}, 
//     function() {
//     $(this).getElementById('mirrormaze').style.backgroundColor= "none"
//   }
// );

// document.getElementById("mirrormaze").addEventListener("hover", function(){
// document.getElementById('mirrormaze').style.backgroundColor= "green"
// ;});
// $( "mirrormaze" ).off( "mouseenter mouseleave" );


 //   $('#mirrormaze').hover(function(){
 //    getElementById('mirrormaze').style.backgroundColor= "green";
 // });
  
 //   $('#mirrormaze').hover(function(){
 //    var element = document.getElementById("mirrormaze");
 //  style.backgroundColor.toggle= "green";
 // });
  

 // $("#mirrormaze").hover(function(){
 //    $(this).css("background-color", "green");
 //    // }, function(){
 //    // $(this).css("background-color", "pink");
 //  });


// $("element").unbind('mouseover mouseout');

   $('#rightarrow2').click(function(){ 
        $('#page2').toggle();
        $('#page3').toggle();
        $('#rightarrow2').toggle();
        $('#rightarrow3').toggle();
        $('#leftarrow3').toggle();
        $('#leftarrow2').toggle();
    });

  $('#rightarrow3').click(function(){ 
        $('#page3').toggle();
        $('#page1').toggle();
        $('#rightarrow3').toggle();
        $('#rightarrow').toggle();
        $('#leftarrow2').toggle();
        $('#leftarrow').toggle();
    });

   $('#leftarrow').click(function(){ 
        $('#page1').toggle();
        $('#page3').toggle();
        $('#leftarrow').toggle();
        $('#leftarrow2').toggle();
        $('#rightarrow3').toggle();
        $('#rightarrow').toggle();
    });

   $('#leftarrow2').click(function(){ 
        $('#page3').toggle();
        $('#page2').toggle();
        $('#leftarrow2').toggle();
        $('#leftarrow3').toggle();
        $('#rightarrow3').toggle();
        $('#rightarrow2').toggle();
    });

      $('#leftarrow3').click(function(){ 
        $('#page2').toggle();
        $('#page1').toggle();
        $('#leftarrow3').toggle();
        $('#leftarrow').toggle();
        $('#rightarrow').toggle();
        $('#rightarrow2').toggle();
    });




//     let numberMade = [
//     'Zany',
//     'Raucous',
//     'Blue', 
//     'Yellow', 
//     'Salty', 
//     'Spicy', 
//     '',
//     'Pop', 
//     'Classic',
//     'Quaint',
//     'Lazy',
//     'Big',
//     'Lucky',
//     'Bright',
//     '',
//     'Ancient',
//     'Barking',
//     'Silver',
//     'Slow',
//     'Future',
//     'Spotted',
//     'Tiny',
//     'Tired',
//     'Neon',
//     'Icy',
//     '',
//     'New',
//     'Ancient',
//     'Odd'
//     ]

//     console.log(numberMade);
 
//     var randNumberSelector = Math.floor(Math.random() * numberMade.length)
//     console.log(randNumberSelector);

//     let numberSelect = numberMade[randNumberSelector];
//     console.log(numberSelect)

//     document.getElementById('number').innerHTML = numberSelect;

 

// if (numberSelect === "one"){
//  var  projectSingular = [
//     'Scorpion',
//     'Oxygen',
//     'Cactus',
//     'Zebra', 
//     'Marigold',
//     'Elm', 
//     'Obsidian', 
//     'Topaz',
//     'Willow',
//     'Neptune',
//     'Orion',
//     'Caterpillar',
//     '',

//     ]
//     console.log(projectSingular);
 
//     var singProjectSelector = Math.floor(Math.random() * projectSingular.length)
//     console.log(singProjectSelector);

//     let singularSelect = projectSingular[singProjectSelector];
//     console.log(singularSelect)

//     document.getElementById('projectType').innerHTML = singularSelect;

// } else {
    
//     var projectOptions = [
//     'Scorpion',
//     'Oxygen',
//     'Cactus',
//     'Zebra', 
//     'Marigold',
//     'Elm', 
//     'Obsidian', 
//     'Topaz',
//     'Willow',
//     'Neptune',
//     'Orion',
//     'Saturn',
//     'Hibiscus',
//     'Sunflower',
//     'Lighthouse',
//     'Trilogy',
//     'Amethyst',
//     'Goddess',
//     'Sunstone',
//     'Lime',
//     'Poseidon',
//     'Athena',
//     'Volcano',
//     'River',
//     'Canyon',
//     'Valley',
//     'Lake',
//     'Stalactite',

//     ]

//     console.log(projectOptions);
 
//     var randProjectSelector = Math.floor(Math.random() * projectOptions.length)
//     console.log(randProjectSelector);

//     let projectSelect = projectOptions[randProjectSelector];
//     console.log(projectSelect)

//     document.getElementById('projectType').innerHTML = projectSelect;

// }


//     // let materialOptions = [
//     // "a mom and pop' restaurant",
//     // 'an oyster bar',
//     // 'a tex-mex restaurant',
//     // 'a breakfast restaurant',
//     // 'a bakery',
//     // 'a bistro',   
//     // 'a bubble tea restaurant',
//     // 'an ice cream shop',
//     // 'a fine dining restaurant',
//     // 'a barbeque restaurant',
//     // 'a diner',
//     // 'a seafood restaurant',
//     // 'a local gourmet restaurant',
//     // 'a vegetarian restaurant',
//     // 'a noodle bar'
//     // ]

//     // console.log(materialOptions)
 
//     // var randMaterialSelector = Math.floor(Math.random() * materialOptions.length)
//     // console.log(randMaterialSelector);

//     // let materialSelect = materialOptions[randMaterialSelector];
//     // console.log(materialSelect)

//     // document.getElementById('material').innerHTML = materialSelect;





//     let timeOptions = [
//     'The', 
//     ' ', 
//     ]

//     console.log(timeOptions);
 
//     var randSelector = Math.floor(Math.random() * timeOptions.length)
//     console.log(randSelector);

//     let timeSelect = timeOptions[randSelector];
//     console.log(timeSelect)

//     document.getElementById('time').innerHTML = timeSelect;




//     $('#load').click(function(){ 
//          window.location("index.html"); 
//     });

//     $('#about').click(function(){
//         $('#about-text').toggle();
//     });
   
//      var colorTheme = ['#DEFFFF', "#B8FF69", "#FF6C07", "#C911AC", "#FFF0F0", 
//      "#FFF0F0", "#E2FF53", "#7E1B46", "#FF4595", "#542C2C", "#333333", "#FFE987",
//      "#E8F3FF", "#E9FFE8", "#DBFFD1", "#C075FF", "#014D46", "#F5F5F5", "#196E68",
//      "#FAFFD8", "#FFDCFF", "#E14442", "#3F3F54", "#2F62FF", "#340635", "#F5FF68", "#FFDDDD"]
//      var rand = Math.floor(Math.random() * colorTheme.length);
//      $('body').css("background-color", colorTheme[rand]);
//      $('.pTwo').css("color", colorTheme[rand]);
//      $('.background-2').css("background-color", colorTheme[rand]);
//      $('#reload').css("color", colorTheme[rand]);

//      var backgroundShape = ['url(img/bckElement_2.png)', 'url(img/bckElement_3.png)', 
//      'url(img/bckElement_4.png)', 'url(img/bckElement_5.png)', 'url(img/bckElement_6.png)',
//      'url(img/bckElement_7.png)', 'url(img/bckElement_8.png)', 'url(img/bckElement_9.png)',
//      'url(img/bckElement_10.png)', 'url(img/bckElement_11.png)', 'url(img/bckElement_12.png)',
//      'url(img/bckElement_13.png)', 'url(img/bckElement_14.png)', 'url(img/bckElement_15.png)']
//      var rand = Math.floor(Math.random() * backgroundShape.length);
//      $('.background-2').css("background-image", backgroundShape[rand]);

//     var extraShape = ['url(img/shape_1.svg)', 'url(img/shape_2.svg)', 
//     'url(img/shape_3.svg)', 'url(img/shape_4.svg)', 'url(img/shape_5.svg)',
//     'url(img/shape_6.svg)', 'url(img/shape_7.svg)',  'url(img/shape_8.svg)',
//     'url(img/shape_9.svg)', 'url(img/shape_10.svg)', 'url(img/shape_11.svg)',
//     'url(img/shape_12.svg)', 'url(img/shape_13.svg)', 'url(img/shape_14.svg)']
//     var rand = Math.floor(Math.random() * extraShape.length);
//     $('.shape1').css("background-image", extraShape[rand]);
//     console.log(extraShape[rand])

//     var extraShape = ['url(img/shape_1.svg)', 'url(img/shape_2.svg)', 
//     'url(img/shape_3.svg)', 'url(img/shape_4.svg)', 'url(img/shape_5.svg)',
//     'url(img/shape_6.svg)', 'url(img/shape_7.svg)',  'url(img/shape_8.svg)',
//     'url(img/shape_9.svg)', 'url(img/shape_10.svg)', 'url(img/shape_11.svg)',
//     'url(img/shape_12.svg)', 'url(img/shape_13.svg)', 'url(img/shape_14.svg)']
//     var rand = Math.floor(Math.random() * extraShape.length);
//     $('.shape2').css("background-image", extraShape[rand]);

//     console.log(extraShape[rand])

  

});