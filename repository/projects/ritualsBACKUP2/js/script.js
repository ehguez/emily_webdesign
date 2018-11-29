$(document).ready(function(){

    //Random Generation

    $('#reload').click(function(){ 
        location.reload(true); 
    });

    $('#load').click(function(){ 
         window.location("index.html"); 
    });


$('#bottomLeft').click(function(){
    $('#bottomLeftContainer').toggle();
    $('#bottomLeftContainer2').toggle();
    $('#bottomImg1Left').toggle();
    $('#bottomImg2Left').toggle();
    $('#bottomImg3Left').toggle();
    $('#bottomImg4Left').toggle();
    $('#videoPlayer2').toggle();
    });
 
$('#bottomLeft').hover(function(){
    $('#bottomLeftBack').toggle();
    });



$('#topRight').click(function(){
    $('#topRightContainer').toggle();
    $('#topImg1').toggle();
    $('#topImg2').toggle();
    $('#topImg3').toggle();
    $('#topImg4').toggle();
});

 $('#topRight').hover(function(){
    $('#topRightBack').toggle();
    });


$('#topLeft').click(function(){
    $('#topLeftContainer').toggle();
    $('#topLeftContainer2').toggle();
    $('#topImg1Left').toggle();
    $('#topImg2Left').toggle();
    $('#topImg3Left').toggle();
    $('#topImg4Left').toggle();
    $('#videoPlayer').toggle();
    $('#videoPlayerB').toggle();

});


 $('#topLeft').hover(function(){
    $('#topLeftBack').toggle();
    });



$('#bottomRight').click(function(){
    $('#bottomRightContainer').toggle();
    $('#bottomRightContainer2').toggle();
    $('#bottomImg1Right').toggle();
    $('#bottomImg2Right').toggle();
    $('#bottomImg3Right').toggle();
    $('#bottomImg4Right').toggle();
    $('#videoPlayer4').toggle();
    });
 
$('#bottomRight').hover(function(){
    $('#bottomRightBack').toggle();
    });


    
    //Bottom Left
    var extraShape = ['url(img/0_frog.png)', 'url(img/1_flower.png)', 'url(img/1_flower.png)']
    var rand = Math.floor(Math.random() * extraShape.length);
    console.log([rand]);
    $('#bottomLeft').css("background-image", extraShape[rand]);
    console.log(extraShape[rand])

    //Top Left
    var extraShape = ['url(img/0_shell.png)', 'url(img/1_apple.png)']
    var rand0 = Math.floor(Math.random() * extraShape.length);
    console.log([rand0]);
    $('#topLeft').css("background-image", extraShape[rand0]);
    console.log(extraShape[rand0])
   
    //Top Right
    var extraShape = ['url(img/0_moon.png)', 'url(img/1_rock.png)']
    var rand2 = Math.floor(Math.random() * extraShape.length);
    console.log([rand2]);
    $('#topRight').css("background-image", extraShape[rand2]);
    console.log(extraShape[rand2])

    //Bottom Right
    var extraShape = ['url(img/0_fish.png)', 'url(img/1_key.png)']
    var rand3 = Math.floor(Math.random() * extraShape.length);
    console.log([rand3]);
    $('#bottomRight').css("background-image", extraShape[rand3]);
    console.log(extraShape[rand3])
  
  

    //Bottom Left Clickables
    if (rand == '0'){
     console.log('frog');
        //text
        document.getElementById('bottomLeftText').innerHTML = 'Put your hands on your hips, <br>then squat down twice.';
       document.getElementById('bottomLeftContainer').style.height = "120px";
        document.getElementById('bottomLeftContainer').style.width = "620px";
        document.getElementById('bottomLeftContainer').style.backgroundColor = "#e48433";
        document.getElementById('bottomLeftContainer2').style.height = "720px";
         //img1
        document.getElementById('bottomLeftText2').innerHTML = 'Leaving the house,<br>I went out to see<br>The frog, for example,<br>in her satiny skin; <br>and her eggs <br>like a slippery veil;<br>and her eyes<br>with their golden rims;<br>and the pond<br>with its risen lilies;<br>and its warmed shores<br>dotted with pink flowers;<br>and the long, windless afternoons;<br>and the white heron<br>like a dropped cloud,<br>taking one slow step<br>then standing awhile then taking<br>another, writing<br>her own soft-footed poem<br>through the still waters.';
        document.getElementById('quoteName3').innerHTML = 'mary oliver';

         //img1
        document.getElementById('bottomImg1Left').style.backgroundImage = "url(img/MaryOliver.png)";
        document.getElementById('bottomImg1Left').style.transform = "translateY(-500px) translateX(1120px)";
        document.getElementById('bottomImg1Left').style.height = "320px";
        document.getElementById('bottomImg1Left').style.zIndex = "5";
         //img2
        document.getElementById('bottomImg2Left').style.backgroundImage = "url(img/moon_tide.gif)";
        document.getElementById('bottomImg2Left').style.transform = "translateY(-450px) translateX(200px)";
        document.getElementById('bottomImg2Left').style.visibility = "hidden";

         //img3
        document.getElementById('bottomImg3Left').style.backgroundImage = "url(img/moon_dolphin.gif)";
        document.getElementById('bottomImg3Left').style.transform = "translateY(-180px) translateX(900px)";
        document.getElementById('bottomImg3Left').style.visibility = "hidden";

         //img4
        document.getElementById('bottomImg4Left').style.backgroundImage = "url(img/moon_turtle.gif)";
        document.getElementById('bottomImg4Left').style.transform = "translateY(-300px) translateX(-50px)";
        document.getElementById('bottomImg4Left').style.visibility = "hidden";

        //hover
        document.getElementById('bottomLeftBack').style.backgroundImage = "url(img/0_frog_bck.png)";

       
    }

    if (rand == '1'){
        console.log('flower');
          //text
        document.getElementById('bottomLeftText').innerHTML = 'Take 3 steps to the right, <br>lifting your right arm each time.';
       document.getElementById('bottomLeftContainer').style.height = "120px";
               document.getElementById('bottomLeftContainer').style.transform = "translateY(-400px) translateX(400px)";

        document.getElementById('bottomLeftContainer').style.width = "620px";
        document.getElementById('bottomLeftContainer').style.backgroundColor = "#5d3ea6";
        document.getElementById('bottomLeftContainer2').style.height = "720px";
         //img1
        document.getElementById('bottomLeftText2').innerHTML = 'Leaving the house,<br>I went out to see<br>The frog, for example,<br>in her satiny skin; <br>and her eggs <br>like a slippery veil;<br>and her eyes<br>with their golden rims;<br>and the pond<br>with its risen lilies;<br>and its warmed shores<br>dotted with pink flowers;<br>and the long, windless afternoons;<br>and the white heron<br>like a dropped cloud,<br>taking one slow step<br>then standing awhile then taking<br>another, writing<br>her own soft-footed poem<br>through the still waters.';
        document.getElementById('quoteName3').innerHTML = 'mary oliver';
        document.getElementById('bottomLeftContainer2').style.visibility = "hidden";


         //img1
        document.getElementById('bottomImg1Left').style.backgroundImage = "url(img/flower_1.gif)";
        document.getElementById('bottomImg1Left').style.transform = "translateY(-600px) translateX(1000px)";
        document.getElementById('bottomImg1Left').style.width = "300px";
        document.getElementById('bottomImg1Left').style.height = "300px";
        document.getElementById('bottomImg1Left').style.zIndex = "5";

         //img2
        document.getElementById('bottomImg2Left').style.backgroundImage = "url(img/flower_2.gif)";
        document.getElementById('bottomImg2Left').style.transform = "translateY(-550px) translateX(120px)";
        document.getElementById('bottomImg2Left').style.visibility = "visible";
        document.getElementById('bottomImg2Left').style.width = "300px";
        document.getElementById('bottomImg2Left').style.height = "300px";


         //img3
        document.getElementById('bottomImg3Left').style.backgroundImage = "url(img/flower_3.gif)";
        document.getElementById('bottomImg3Left').style.transform = "translateY(-180px) translateX(200px)";
        document.getElementById('bottomImg3Left').style.width = "300px";
        document.getElementById('bottomImg3Left').style.height = "300px";
        document.getElementById('bottomImg3Left').style.visibility = "visible";

         //img4
        document.getElementById('bottomImg4Left').style.backgroundImage = "url(img/flower_4.gif)";
        document.getElementById('bottomImg4Left').style.transform = "translateY(-600px) translateX(700px)";
        document.getElementById('bottomImg4Left').style.width = "250px";
        document.getElementById('bottomImg4Left').style.height = "250px";
        document.getElementById('bottomImg4Left').style.visibility = "visible";

        //hover
        document.getElementById('bottomLeftBack').style.backgroundImage = "url(img/1_flower_bck.png)";
        document.getElementById('videoPlayer2').style.visibility = "hidden";

    }




//Top Right Clickables
    if (rand2 == '0'){
        console.log('moon');
        //text
        document.getElementById('topRightText').innerHTML = 'Take three long, audible breaths.';
        document.getElementById('topRightContainer').style.height = "70px";
        document.getElementById('topRight').style.width = "235px";
        document.getElementById('topRightContainer').style.backgroundColor = "#46e66c";
         //img1
        document.getElementById('topImg1').style.backgroundImage = "url(img/moon_wave.gif)";
        document.getElementById('topImg1').style.transform = "translateY(-160px) translateX(400px)";
         //img2
        document.getElementById('topImg2').style.backgroundImage = "url(img/moon_tide.gif)";
        document.getElementById('topImg2').style.transform = "translateY(-550px) translateX(200px)";
         //img3
        document.getElementById('topImg3').style.backgroundImage = "url(img/moon_dolphin.gif)";
        document.getElementById('topImg3').style.transform = "translateY(-180px) translateX(900px)";
         //img4
        document.getElementById('topImg4').style.backgroundImage = "url(img/moon_turtle.gif)";
        document.getElementById('topImg4').style.transform = "translateY(-300px) translateX(-50px)";

        //hover
        document.getElementById('topRightBack').style.backgroundImage = "url(img/0_moon_bck.png)";
        document.getElementById('topRightBack').style.width = "235px";

       

    }
  if (rand2 == '1'){
        console.log('rock');
        //text
        document.getElementById('topRightText').innerHTML = 'Lift your left leg up, <br>then stomp 3 times.';
        document.getElementById('topRightContainer').style.height = "120px";
        document.getElementById('topRightContainer').style.width = "400px";
        document.getElementById('topRightContainer').style.backgroundColor = "#46e66c";
        document.getElementById('topRightContainer').style.transform = "translateY(-350px) translateX(920px)";

         //img1
        document.getElementById('topImg1').style.backgroundImage = "url(img/rock_tree.jpg)";
        document.getElementById('topImg1').style.transform = "translateY(-210px) translateX(400px)";
         //img2
        document.getElementById('topImg2').style.backgroundImage = "url(img/rock_marks.jpg)";
        document.getElementById('topImg2').style.transform = "translateY(-450px) translateX(200px)";
         //img3
        document.getElementById('topImg3').style.backgroundImage = "url(img/rock_crab.jpg)";
        document.getElementById('topImg3').style.transform = "translateY(-580px) translateX(500px)";
         //img4
        document.getElementById('topImg4').style.backgroundImage = "url(img/rock_structure.jpg)";
        document.getElementById('topImg4').style.transform = "translateY(-300px) translateX(-50px)";

        //hover
        document.getElementById('topRightBack').style.backgroundImage = "url(img/1_rock_bck.png)";

    }

//Top Left Clickables    

    if (rand0 == '0'){
        console.log('shell');
    //hover
        document.getElementById('topLeftBack').style.backgroundImage = "url(img/0_shell_bck.png)";

        //text
        document.getElementById('topLeftText').innerHTML = 'Listen to the sounds around you, <br>then repeat one of your choice.';
        document.getElementById('topLeftContainer').style.height = "120px";
        document.getElementById('topLeftContainer').style.width = "620px";
        document.getElementById('topLeftContainer').style.backgroundColor = "#737bee";
        document.getElementById('topLeftContainer2').style.height = "350px";

        document.getElementById('topLeftText2').innerHTML = 'When you speak a word to a listener, <br>the speaking is an act. And it is a mutual act: the listener’s listening enables the speaker’s speaking. It is a shared event, intersubjective: the listener and speaker entrain with each other. Both the amoebas are equally responsible, equally physically, immediately involved in sharing bits of themselves.”';
        document.getElementById('quoteName2').innerHTML = 'ursula k. leguin';

         //img1
        document.getElementById('topImg1Left').style.backgroundImage = "url(img/UrsulaLeguin.png)";
        document.getElementById('topImg1Left').style.transform = "translateY(-100px) translateX(200px)";
        document.getElementById('topImg1Left').style.height = "300px";
        document.getElementById('topImg1Left').style.zIndex = "5";
        

         //img2
        document.getElementById('topImg2Left').style.backgroundImage = "url(img/moon_tide.gif)";
        document.getElementById('topImg2Left').style.transform = "translateY(-450px) translateX(200px)";
        document.getElementById('topImg2Left').style.visibility = "hidden";

         //img3
        document.getElementById('topImg3Left').style.backgroundImage = "url(img/moon_dolphin.gif)";
        document.getElementById('topImg3Left').style.transform = "translateY(-180px) translateX(900px)";
        document.getElementById('topImg3Left').style.visibility = "hidden";

         //img4
        document.getElementById('topImg4Left').style.backgroundImage = "url(img/moon_turtle.gif)";
        document.getElementById('topImg4Left').style.transform = "translateY(-300px) translateX(-50px)";
        document.getElementById('topImg4Left').style.visibility = "hidden";  
        document.getElementById('videoPlayerB').style.visibility = "hidden";
      
    }

    if (rand0 == '1'){
        console.log('apple');
    //hover
        document.getElementById('topLeftBack').style.backgroundImage = "url(img/1_apple_bck.png)";

        //text
        document.getElementById('topLeftText').innerHTML = 'Shout 3 times. Take a step.';
        document.getElementById('topLeftContainer').style.height = "80px";
        document.getElementById('topLeftContainer').style.width = "520px";
        document.getElementById('topLeftContainer2').style.transform = "translateY(-450px) translateX(150px)";
        document.getElementById('topLeftContainer2').style.height = "350px";
        document.getElementById('topLeftContainer2').style.backgroundColor = "#130ff7";

        document.getElementById('topLeftText2').innerHTML = '“Be happy whenever you can manage it. Enjoy yourself. <br>It’s lighter than you think.”';
        document.getElementById('quoteName2').innerHTML = 'sister corita kent';
        document.getElementById('topLeftText2').style.fontSize = '2.6em';

         //img1
        document.getElementById('topImg1Left').style.backgroundImage = "url(img/UrsulaLeguin.png)";
        document.getElementById('topImg1Left').style.transform = "translateY(-100px) translateX(200px)";
        document.getElementById('topImg1Left').style.height = "300px";
        document.getElementById('topImg1Left').style.zIndex = "5";
        document.getElementById('topImg1Left').style.visibility= "hidden";

        

         //img2
        document.getElementById('topImg2Left').style.backgroundImage = "url(img/moon_tide.gif)";
        document.getElementById('topImg2Left').style.transform = "translateY(-450px) translateX(200px)";
        document.getElementById('topImg2Left').style.visibility = "hidden";

         //img3
        document.getElementById('topImg3Left').style.backgroundImage = "url(img/moon_dolphin.gif)";
        document.getElementById('topImg3Left').style.transform = "translateY(-180px) translateX(900px)";
        document.getElementById('topImg3Left').style.visibility = "hidden";

         //img4
        document.getElementById('topImg4Left').style.backgroundImage = "url(img/moon_turtle.gif)";
        document.getElementById('topImg4Left').style.transform = "translateY(-300px) translateX(-50px)";
        document.getElementById('topImg4Left').style.visibility = "hidden";    

        document.getElementById('videoPlayer').style.visibility = "hidden";
    
    }


//Bottom Right Clickables
    if (rand3 == '0'){
     console.log('fish');
      //hover
        document.getElementById('bottomRightBack').style.backgroundImage = "url(img/0_fish_bck.png)";

        //text
        document.getElementById('bottomRightText').innerHTML = 'Jump forward, then back. <br> Three times.';
        document.getElementById('bottomRightContainer').style.height = "120px";
        document.getElementById('bottomRightContainer').style.width = "560px";
        document.getElementById('bottomRightContainer').style.backgroundColor = "#0078d3";
        document.getElementById('bottomRightContainer2').style.height = "720px";
        document.getElementById('bottomRightContainer2').style.visibility = "hidden";
         //img1
        document.getElementById('bottomRightText2').innerHTML = 'Leaving the house,<br>I went out to see<br>The frog, for example,<br>in her satiny skin; <br>and her eggs <br>like a slippery veil;<br>and her eyes<br>with their golden rims;<br>and the pond<br>with its risen lilies;<br>and its warmed shores<br>dotted with pink flowers;<br>and the long, windless afternoons;<br>and the white heron<br>like a dropped cloud,<br>taking one slow step<br>then standing awhile then taking<br>another, writing<br>her own soft-footed poem<br>through the still waters.';
        document.getElementById('quoteName3').innerHTML = 'mary oliver';

        //img1
        document.getElementById('bottomImg1Right').style.backgroundImage = "url(img/fish_lava.gif)";
        document.getElementById('bottomImg1Right').style.transform = "translateY(-280px) translateX(300px)";
        //document.getElementById('bottomImg2Right').style.visibility = "hidden";

         //img2
        document.getElementById('bottomImg2Right').style.backgroundImage = "url(img/fish_chemistry.gif)";
        document.getElementById('bottomImg2Right').style.transform = "translateY(-540px) translateX(80px)";
        //document.getElementById('bottomImg2Right').style.visibility = "hidden";

         //img3
        document.getElementById('bottomImg3Right').style.backgroundImage = "url(img/fish_cat.gif)";
        document.getElementById('bottomImg3Right').style.transform = "translateY(-380px) translateX(1000px)";
       // document.getElementById('bottomImg3Right').style.visibility = "hidden";

         //img4
        document.getElementById('bottomImg4Right').style.backgroundImage = "url(img/fish_physics.gif)";
        document.getElementById('bottomImg4Right').style.transform = "translateY(-500px) translateX(800px)";
      //  document.getElementById('bottomImg4Right').style.visibility = "hidden";

        document.getElementById('videoPlayer4').style.visibility = "hidden";

    }

    if (rand3 == '1'){
        console.log('key');
//hover
        document.getElementById('bottomRightBack').style.backgroundImage = "url(img/1_key_bck.png)";

        //text
        document.getElementById('bottomRightText').innerHTML = 'Stretch your back, head, and arms. <br>Take a large step to the left.';
        document.getElementById('bottomRightContainer').style.height = "120px";
        document.getElementById('bottomRightContainer').style.width = "690px";
        document.getElementById('bottomRightContainer').style.backgroundColor = "#fa46b2";
        document.getElementById('bottomRightContainer2').style.height = "720px";
        document.getElementById('bottomRightContainer2').style.visibility = "hidden";
         //img1
        document.getElementById('bottomRightText2').innerHTML = 'Leaving the house,<br>I went out to see<br>The frog, for example,<br>in her satiny skin; <br>and her eggs <br>like a slippery veil;<br>and her eyes<br>with their golden rims;<br>and the pond<br>with its risen lilies;<br>and its warmed shores<br>dotted with pink flowers;<br>and the long, windless afternoons;<br>and the white heron<br>like a dropped cloud,<br>taking one slow step<br>then standing awhile then taking<br>another, writing<br>her own soft-footed poem<br>through the still waters.';
        document.getElementById('quoteName3').innerHTML = 'mary oliver';


        //img1
        document.getElementById('bottomImg1Right').style.backgroundImage = "url(img/fish_lava.gif)";
        document.getElementById('bottomImg1Right').style.transform = "translateY(-280px) translateX(300px)";
        document.getElementById('bottomImg1Right').style.visibility = "hidden";

         //img2
        document.getElementById('bottomImg2Right').style.backgroundImage = "url(img/fish_chemistry.gif)";
        document.getElementById('bottomImg2Right').style.transform = "translateY(-540px) translateX(80px)";
        document.getElementById('bottomImg2Right').style.visibility = "hidden";

         //img3
        document.getElementById('bottomImg3Right').style.backgroundImage = "url(img/fish_cat.gif)";
        document.getElementById('bottomImg3Right').style.transform = "translateY(-380px) translateX(1000px)";
        document.getElementById('bottomImg3Right').style.visibility = "hidden";

         //img4
        document.getElementById('bottomImg4Right').style.backgroundImage = "url(img/fish_physics.gif)";
        document.getElementById('bottomImg4Right').style.transform = "translateY(-500px) translateX(800px)";
        document.getElementById('bottomImg4Right').style.visibility = "hidden";

    }


});




//Dragging

dragElement(document.getElementById("wisdomDiv"));
dragElement(document.getElementById("wisdomDiv2"));
dragElement(document.getElementById('topImg1'));
dragElement(document.getElementById('topImg2'));
dragElement(document.getElementById('topImg3'));
dragElement(document.getElementById('topImg4'));
dragElement(document.getElementById('topRightContainer'));
dragElement(document.getElementById('topLeftContainer'));
dragElement(document.getElementById('topLeftContainer2'));
dragElement(document.getElementById('topImg1Left'));
dragElement(document.getElementById('videoPlayer'));
dragElement(document.getElementById('videoPlayer2'));
dragElement(document.getElementById('bottomLeftContainer'));
dragElement(document.getElementById('bottomLeftContainer2'));
dragElement(document.getElementById('bottomImg1Left'));
dragElement(document.getElementById('bottomImg2Left'));
dragElement(document.getElementById('bottomImg3Left'));
dragElement(document.getElementById('bottomImg4Left'));
dragElement(document.getElementById('bottomRightContainer'));
dragElement(document.getElementById('bottomLeftContainer'));

dragElement(document.getElementById('bottomRightContainer'));
dragElement(document.getElementById('bottomRightContainer2'));
dragElement(document.getElementById('bottomImg1Right'));
dragElement(document.getElementById('bottomImg2Right'));
dragElement(document.getElementById('bottomImg3Right'));
dragElement(document.getElementById('bottomImg4Right'));
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


//Time-based content
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
    console.log(h);
    console.log(t);


    if (h=="06"){
    document.getElementById('hourlyTask').innerHTML = "Make a cup of tea. <br>Sit quietly with it, doing nothing, until it's empty.";
    document.getElementById('body').style.backgroundColor = "#dea1ec";
    document.getElementById('morning').innerHTML = " AM";

    }


    if (h=="07"){
    document.getElementById('hourlyTask').innerHTML = "Spend ten minutes focusing on your goals for the day. Write them down.";
    document.getElementById('body').style.backgroundColor = "#419deb";
    document.getElementById('morning').innerHTML = " AM";

    }

    if (h=="08"){
    document.getElementById('hourlyTask').innerHTML = "Listen to 3 of your favorite songs, as loudly as you can.";
    document.getElementById('body').style.backgroundColor = "#fa716a";
    document.getElementById('morning').innerHTML = " AM";

    }
    if (h=="09"){
    document.getElementById('hourlyTask').innerHTML = "Spend 5 minutes imagining living someone else's life.";
    document.getElementById('body').style.backgroundColor = "#bc59c8";
    document.getElementById('morning').innerHTML = " AM";
    }


    if (h=="10"){
    document.getElementById('hourlyTask').innerHTML = "In a notebook, write without stopping for 15 minutes.";
    document.getElementById('body').style.backgroundColor = "#c9b6be";
    document.getElementById('morning').innerHTML = " AM";
    }

    if (h=="11"){
    document.getElementById('hourlyTask').innerHTML = "Have a short conversation with someone near you.";
    document.getElementById('body').style.backgroundColor = "#212155";
    document.getElementById('morning').innerHTML = " AM";
    }

    if (h=="12"){
    document.getElementById('hourlyTask').innerHTML = "Knock on a table 3 times. Eat something. Knock on a table 3 times.";
    document.getElementById('body').style.backgroundColor = "#f960e2";
    document.getElementById('morning').innerHTML = " AM";
    }

    if (h=="13"){
    document.getElementById('hourlyTask').innerHTML = "Send a text or <br>email to a friend <br>you haven't spoken <br>to in a while.";
    document.getElementById('body').style.backgroundColor = "#e78d00";
    }

    if (h=="14"){
    document.getElementById('hourlyTask').innerHTML = "Step outside. Breathe in the air for 10 minutes.";
    document.getElementById('body').style.backgroundColor = "#89253c";
    }

    if (h=="15"){
    document.getElementById('hourlyTask').innerHTML = "Focus your eyes on something at least 20 feet away for a minute.";
    document.getElementById('body').style.backgroundColor = "#f5f5f5";
    }

    if (h=="16"){
    document.getElementById('hourlyTask').innerHTML = "Take a walk outside for 15 minutes. Look around.";
    document.getElementById('body').style.backgroundColor = "#213531";
    }

    if (h=="17"){
    document.getElementById('hourlyTask').innerHTML = "Spend 10 minutes drawing in a notebook.";
    document.getElementById('body').style.backgroundColor = "#b26d2b";
    }

    if (h=="18"){
    document.getElementById('hourlyTask').innerHTML = "Spend 15 minutes stretching or exercising your body in some way.";
    document.getElementById('body').style.backgroundColor = "#bc70fc";
    }

    if (h=="19"){
    document.getElementById('hourlyTask').innerHTML = "Sing a song <br>out loud. Maybe dance, too.";
    document.getElementById('body').style.backgroundColor = "#4c2f9e";
    }

    if (h=="20"){
    document.getElementById('hourlyTask').innerHTML = "Close your eyes. Try to relax every part of your body, starting from the head. <br>10 minutes.";
    document.getElementById('body').style.backgroundColor = "#708536";
    }

    if (h=="21"){
    document.getElementById('hourlyTask').innerHTML = "Give someone a hug. If alone, write down something nice about someone.";
    document.getElementById('body').style.backgroundColor = "#f43531";
    }

    if (h=="22"){
    document.getElementById('hourlyTask').innerHTML = "Turn off your devices for the next hour. Take a hot bath or shower.";
    document.getElementById('body').style.backgroundColor = "#882b57";
    }

    if (h=="23"){
    document.getElementById('hourlyTask').innerHTML = "Pick a book. Sit somewhere comfortable and read for at least 15 minutes";
    document.getElementById('body').style.backgroundColor = "#4f4c4d";
    }

    if (h=="00"){
    document.getElementById('hourlyTask').innerHTML = "On a piece of paper, write down the 3 most memorable parts of your day.";
    document.getElementById('body').style.backgroundColor = "#71593d";
    document.getElementById('morning').innerHTML = " AM";

    }

    if (h=="01"){
    document.getElementById('hourlyTask').innerHTML = "Close your eyes, and breathe deeply through your nose for 15 minutes. Breathe into your stomach.";
    document.getElementById('body').style.backgroundColor = "#0b4a08";
    document.getElementById('morning').innerHTML = " AM";

    }

    if (h=="02"){
    document.getElementById('hourlyTask').innerHTML = "Lie down, then stretch your legs up on a wall for 10 minutes.";
    document.getElementById('body').style.backgroundColor = "#f08f68";
    document.getElementById('morning').innerHTML = " AM";

    }

    if (h=="03"){
    document.getElementById('hourlyTask').innerHTML = "Sit on a comfortable chair with your eyes closed. Listen to calm music for 15 minutes.";
    document.getElementById('body').style.backgroundColor = "#354161";
    document.getElementById('morning').innerHTML = " AM";

    }

    if (h=="04"){
    document.getElementById('hourlyTask').innerHTML = "Make yourself comfortable. Think about good memories. Breathe deeply.";
    document.getElementById('body').style.backgroundColor = "#6c3950";
    document.getElementById('morning').innerHTML = " AM";

    }

    if (h=="05"){
    document.getElementById('hourlyTask').innerHTML = "Stretch your body out, three times, <br>as exhaustively <br>as you can.";
    document.getElementById('body').style.backgroundColor = "#c69879";
    document.getElementById('morning').innerHTML = " AM";

    }

};


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

};