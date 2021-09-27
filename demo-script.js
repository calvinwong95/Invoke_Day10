var progressBar = document.getElementById('progress-bar')

window.addEventListener("scroll",onScroll);

var container = document.getElementById('container');

var sectionOne = document.getElementById('sectionOne')
var sectionTwo = document.getElementById('sectionTwo');

var sectionHolder = document.getElementById("item-holder")

window.onbeforeunload = function () {
    window.scrollTo(0,0);
}
function onScroll(evt) {
    // console.log("window height:", window.innerHeight);
    // console.log("the window can scroll",window.scrollY);
    // console.log("container scroll height", container.scrollHeight);

    // console.log("sectionTwo offSetTop",sectionTwo.offsetTop);
    var maxHeight = window.innerHeight;
    var currentHeight = (window.scrollY / (container.scrollHeight -  window.innerHeight)) * 100;

    

    progressBar.style.width = currentHeight + '%';

    //section Two
    // if(window.scrollY >= sectionTwo.offsetTop) {
    //     console.log("you reached section 2");
    //     sectionHolder.style.display = "flex";

    // } else {
    //     console.log("you are above section two");
    //     sectionHolder.style.display = "none";
    // }

    var itemList = document.querySelectorAll('.item');
    console.log(itemList);

    // if(window.scrollY + 300 >= itemList[0].offsetTop) {
    //     itemList[0].classList.add('fadeIn');
    // } 

    // if (window.scrollY + 300 >= itemList[1].offsetTop) {
    //     itemList[1].classList.add('fadeIn');
    // }

    // if (window.scrollY + 300 >= itemList[2].offsetTop) {

    //     itemList[2].classList.add('fadeIn');
    // } 

    // if (window.scrollY + 300 >= itemList[3].offsetTop) {
    //     itemList[3].classList.add('fadeIn');
    // }

    for (var i=0; i < itemList.length; i++) {
        if(window.scrollY + 400 >= itemList[i].offsetTop) {
            itemList[i].classList.add('fadeIn');
        }
    }
}