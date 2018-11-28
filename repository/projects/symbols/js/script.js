$(document).ready(function(){

    //Random Generation

    $('#reload').click(function(){ 
        location.reload(true); 
    });

    $('#load').click(function(){ 
         window.location("index.html"); 
    });

    $('#about').click(function(){
        $('#about-text').toggle();
    });
 

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


    if (h == "10"){
    console.log('ten');}

    if (h == "11" ){
    console.log('eleven')
    $('#eleven').toggle();}

    if (h == "12"){
    console.log('noon');}

    if (h=="11"){
    document.getElementById('hourlyTask').innerHTML = "cloud";
    }

    if (h=="12"){
    document.getElementById('hourlyTask').innerHTML = "dove";
    }

    if (h=="13"){
    document.getElementById('hourlyTask').innerHTML = "cat";
    }

    if (h=="14"){
    document.getElementById('hourlyTask').innerHTML = "Set 10 minnute timer, and write whatever comes to midnd until it rings.";
    }

    if (h=="15"){
    document.getElementById('hourlyTask').innerHTML = "Set a 10 minute timer, and write whatever comes to midnd until it rings.";
    }

    if (h=="19"){
    document.getElementById('hourlyTask').innerHTML = "Write without stopping for 15 minutes.";
    document.getElementsByClassName('body').innerCSS = "background-color: #FFFfff";
    }

 if (h=="20"){
    document.getElementById('hourlyTask').innerHTML = "Write without stopping for 15 minutes.";
    document.getElementById('body').style.backgroundColor = "blue";
    }
};


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

};