var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");

var containerPos = {w:800,h:600};

var layerOnePos = {x: 0, y: 0, w:1100, h:600}
var layerTwoPos = {x: 0, y: 0, w:1100, h:600}
var layerThreePos = {x: 0, y: 0, w:1100, h:600}
var layerFourPos = {x: 0, y: 0, w:1100, h:600}
var layerFivePos = {x: 0, y: 0, w:1100, h:600}
var layerSixPos = {x: 0, y: 0, w:1100, h:600}

//section two
var containerOne = document.getElementById("container");
var containerTwo = document.getElementById("containertwo");

var layerOneSecond = document.getElementById("layerOne-Second");
var layerTwoSecond = document.getElementById("layerTwo-Second");
var layerThreeSecond = document.getElementById("layerThree-Second");
var layerFourSecond = document.getElementById("layerFour-Second");
var layerFiveSecond = document.getElementById("layerFive-Second");
var layerSixSecond = document.getElementById("layerSix-Second");
var layerSevenSecond = document.getElementById("layerSeven-Second");

var containerPosTwo = {w:800,h:300};

var layerOneSecondPos = {x: 0, y: 0, w:1000, h:300}
var layerTwoSecondPos = {x: 0, y: 0, w:1000, h:300}
var layerThreeSecondPos = {x: 0, y: 0, w:1000, h:300}
var layerFourSecondPos = {x: 0, y: 0, w:1000, h:300}
var layerFiveSecondPos = {x: 0, y: 0, w:1000, h:300}
var layerSixSecondPos = {x: 0, y: 0, w:1000, h:300}
var layerSevenSecondPos = {x: 0, y: 0, w:1000, h:300}

window.addEventListener("mousemove",onMouseMove);
window.addEventListener("scroll", onScroll);

function onScroll(evt) {
    console.log("container scroll height", containerOne.scrollHeight);
    if (window.scrollY + 450 >= containerTwo.offsetTop) {
        
        containerTwo.style.transition = 'ease 3s';
        containerTwo.style.opacity = 1;
        
        

    } else {
        containerTwo.style.opacity = 0;
    }
}

function onMouseMove(evt) {

    var mouse = {
        x: evt.pageX - container.offsetLeft,
        y: evt.pageY - container.offsetTop,
    };

    layerOnePos.x = (-mouse.x*0.02) + (containerPos.w/2 - layerOnePos.w /2);
    layerOne.style.left = layerOnePos.x +'px';

    layerTwoPos.x = (-mouse.x*0.08) + (containerPos.w/2 - layerTwoPos.w /2);
    layerTwo.style.left = layerTwoPos.x +'px';

    layerThreePos.x = (-mouse.x*0.06) + (containerPos.w/2 - layerThreePos.w /2);
    layerThree.style.left = layerThreePos.x +'px';

    layerFourPos.x = (-mouse.x*0.04) + (containerPos.w/2 - layerFourPos.w /2);
    layerFour.style.left = layerFourPos.x +'px';

    layerFivePos.x = (-mouse.x*0.02) + (containerPos.w/2 - layerFivePos.w /2);
    layerFive.style.left = layerFivePos.x +'px';

    //section two js

    var mouseTwo = {
        x: evt.pageX - containertwo.offsetLeft,
        y: evt.pageY - containertwo.offsetTop,
    };

    layerOneSecondPos.x = (-mouseTwo.x*0.1) + (containerPosTwo.w/2 - layerOneSecondPos.w /2);
    layerOneSecond.style.left = layerOneSecondPos.x +'px';

    layerTwoSecondPos.x = (-mouseTwo.x*0.06) + (containerPosTwo.w/2 - layerTwoSecondPos.w /2);
    layerTwoSecond.style.left = layerTwoSecondPos.x +'px';

    layerThreeSecondPos.x = (-mouseTwo.x*0.08) + (containerPosTwo.w/2 - layerThreeSecondPos.w /2);
    layerThreeSecond.style.left = layerThreeSecondPos.x +'px';

    layerFourSecondPos.x = (-mouseTwo.x*0.03) + (containerPosTwo.w/2 - layerFourSecondPos.w /2);
    layerFourSecond.style.left = layerFourSecondPos.x +'px';

    layerFiveSecondPos.x = (-mouseTwo.x*0.02) + (containerPosTwo.w/2 - layerFiveSecondPos.w /2);
    layerFiveSecond.style.left = layerFiveSecondPos.x +'px';

    layerSixSecondPos.x = (-mouseTwo.x*0.01) + (containerPosTwo.w/2 - layerSixSecondPos.w /2);
    layerSixSecond.style.left = layerSixSecondPos.x +'px';

    layerSevenSecondPos.x = (-mouseTwo.x*0.01) + (containerPosTwo.w/2 - layerSevenSecondPos.w /2);
    layerSevenSecond.style.left = layerSevenSecondPos.x +'px';


}

