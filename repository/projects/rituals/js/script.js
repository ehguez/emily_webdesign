$(document).ready(function(){

    //Random Generation

    $('#reload').click(function(){ 
        location.reload(true); 
    });

    $('#load').click(function(){ 
         window.location("index.html"); 
    });

    $('.wisdom').click(function(){
        $('#wisdomDiv').toggle();
    });
 


    var extraShape = ['url(img/EmilyDickinson.png)', 'url(img/1_OctaviaButler.png)']
    var rand = Math.floor(Math.random() * extraShape.length);
    console.log([rand]);
    $('.wisdom').css("background-image", extraShape[rand]);
    console.log(extraShape[rand])


    var extraShape = ['url(img/shape_1.svg)', 'url(img/shape_2.svg)', 
    'url(img/shape_3.svg)', 'url(img/shape_4.svg)', 'url(img/shape_5.svg)',
    'url(img/shape_6.svg)', 'url(img/shape_7.svg)',  'url(img/shape_8.svg)',
    'url(img/shape_9.svg)', 'url(img/shape_10.svg)', 'url(img/shape_11.svg)',
    'url(img/shape_12.svg)', 'url(img/shape_13.svg)', 'url(img/shape_14.svg)']
    var rand2 = Math.floor(Math.random() * extraShape.length);
    console.log([rand2]);
    $('.shape2').css("background-image", extraShape[rand2]);
    console.log(extraShape[rand2])
  
    //Clickables
    if (rand == '1'){
        console.log('shape2');
        document.getElementById('wordsWisdom').innerHTML = '"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it. That’s why I say one of the most valuable traits is persistence."';
        document.getElementById('wisdomDiv').style.height = "310px";
        document.getElementsByClassName('wisdom').style.transform = "310px";

    }


    if (rand2 == '2'){
        console.log('shape2');
        document.getElementById('wordsWisdom').innerHTML = "hiya witch";
    }




});


//Dragging

dragElement(document.getElementById("wisdomDiv"));


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
    document.getElementById('hourlyTask').innerHTML = "Make a cup of tea. Sit quietly with it, doing nothing, until it's done.";
    document.getElementById('body').style.backgroundColor = "#dea1ec";
    document.getElementById('morning').innerHTML = " AM";

    }


    if (h=="07"){
    document.getElementById('hourlyTask').innerHTML = "Spend ten minutes focusing on your goals for the day.";
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
    document.getElementById('hourlyTask').innerHTML = "Send a text or email to a friend you haven't spoken to in a while.";
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
    document.getElementById('hourlyTask').innerHTML = "Sing a song.";
    document.getElementById('body').style.backgroundColor = "#4c2f9e";
    }

    if (h=="20"){
    document.getElementById('hourlyTask').innerHTML = "Close your eyes and try to relax every part of your body, starting from the head. 10 minutes.";
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
    document.getElementById('hourlyTask').innerHTML = "go to bed";
    document.getElementById('body').style.backgroundColor = "yellow";
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
    document.getElementById('hourlyTask').innerHTML = "Stretch your body out fully. Three times.";
    document.getElementById('body').style.backgroundColor = "#c69879";
    document.getElementById('morning').innerHTML = " AM";

    }

};


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

};