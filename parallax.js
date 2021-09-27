var onion = document.getElementById('onion');
var container = document.getElementById('container');
var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");

var containerPos = {w:512 , h:512};
var onionPos = {x: 0 , y: 0, w: 50, h:50};

var layerOnePos = {x: 0 , y: 0, w: 1000, h: 512}
var layerTwoPos = {x: 0 , y: 0, w: 1000, h: 512}
var layerThreePos = {x: 0 , y: 0, w: 1000, h: 512}



window.addEventListener("mousemove", onMouseMove);

function onMouseMove(evt) {
    
    console.log("x in browser:",evt.pageX);
    console.log("y in browser:",evt.pageY);

    //gives position of the mouse in relative to the container
    var mouse = {
        x: evt.pageX - container.offsetLeft,
        y: evt.pageY - container.offsetTop,};

        console.log("mouse position: ", mouse.x, mouse.y);
    

    onionPos.x = mouse.x - onionPos.w /2; 
    onionPos.y = mouse.y - onionPos.h /2;
    
    // onion.style.left = mouse.x - 25 - container.offsetLeft +'px';
    // onion.style.top = mouse.y - 25 - container.offsetTop + 'px';
    
    //to center the onion pic
    onion.style.left = onionPos.x +'px';
    onion.style.top = onionPos.y + 'px';
    

    layerOnePos.x = (-mouse.x*0.1) + (containerPos.w/2 - layerOnePos.w /2);
    layerOne.style.left = layerOnePos.x +'px';

    layerOnePos.y = (-mouse.y*0.08) + (containerPos.h/2 - layerOnePos.h /2);
    layerOne.style.top = layerOnePos.y; +'px';


    layerTwoPos.x = (-mouse.x*0.05) + (containerPos.w/2 - layerTwoPos.w /2);
    layerTwo.style.left = layerTwoPos.x +'px';

    layerThreePos.x = (-mouse.x*0.01) + (containerPos.w/2 - layerThreePos.w /2);
    layerThree.style.left = layerThreePos.x +'px';

}


// keep track the current sun.x value
// when mouse x increase. sun.x = sun.x + mouse.x;