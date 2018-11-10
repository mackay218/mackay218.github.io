/*open/close nav menu*/
function activation() {
   var menu = document.getElementById("menuContainer");
   menu.classList.toggle("active");
}
function openClose(){
  activation();
}
/****************************/
/* animate menu button*/
function hamburger_x(x) {
    x.classList.toggle("change");
}
/*******************************/


/* keep scroll position function*/

let totalHeight;
let newHeight;
let landHeight
let correctPos;
let scrlPerc;
let scrollPos;
let newScrollPos;

$(document).scroll(function (){
  /*get current scroll position and height of document*/
  scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  totalHeight = $(document).height();
  newHeight = $(document).width() * 5;

  /*calc percent scrolled of document*/
  scrlPerc = scrollPos / totalHeight;

});

$(window).on("orientationchange", function(event){

  /*pause function until orientationchange is complete*/

  /* calc correct position in pixels to scroll to*/
  correctPos = (scrlPerc * newHeight);

  newScrollPos = document.documentElement.scrollTop || document.body.scrollTop;

  /* timeout so scroll to correct position happens on completion of orientationchagne*/
  setTimeout(function(){
    $(document).scrollTop(correctPos);
  }, 500);


});

/*********************************************************/

function showBlue(){
  var upperProjectLayer = document.getElementById("upperProjectLayer");
  var projectBlue = document.getElementById("blue2");
  upperProjectLayer.classList.toggle("fullScreenProject");
  projectBlue.classList.toggle("fullScreenProject");
}

function showGreen(){
  var upperProjectLayer = document.getElementById("upperProjectLayer");
  var projectGreen = document.getElementById("green2");
  upperProjectLayer.classList.toggle("fullScreenProject");
  projectGreen.classList.toggle("fullScreenProject");
}

function showRed(){
  var upperProjectLayer = document.getElementById("upperProjectLayer");
  var projectRed = document.getElementById("red2");
  upperProjectLayer.classList.toggle("fullScreenProject");
  projectRed.classList.toggle("fullScreenProject");
}

function showYellow(){
  var upperProjectLayer = document.getElementById("upperProjectLayer");
  var projectYellow = document.getElementById("yellow2");
  upperProjectLayer.classList.toggle("fullScreenProject");
  projectYellow.classList.toggle("fullScreenProject");
}
