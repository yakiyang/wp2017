// Get the id of the <path> element and the length of <path>
var red1 = document.getElementById("red1");
var red2 = document.getElementById("red2");
var red3 = document.getElementById("red3");
var red4 = document.getElementById("red4");
var red5 = document.getElementById("red5");

var length1 = red1.getTotalLength();
var length2 = red2.getTotalLength();
var length3 = red3.getTotalLength();
var length4 = red4.getTotalLength();
var length5 = red5.getTotalLength();

red1.style.strokeDasharray = length1;
red2.style.strokeDasharray = length2;
red3.style.strokeDasharray = length3;
red4.style.strokeDasharray = length4;
red5.style.strokeDasharray = length5;

red1.style.strokeDashoffset = length1;
red2.style.strokeDashoffset = length2;
red3.style.strokeDashoffset = length3;
red4.style.strokeDashoffset = length4;
red5.style.strokeDashoffset = length5;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {

var x=document.documentElement.scrollTop;
document.getElementById("num").innerHTML=x;

if(x>50 && x<200){
document.getElementById("cir").setAttribute("r",x+450 );
document.getElementById("ciry1").setAttribute("cx" ,1200-x);
document.getElementById("ciry1").setAttribute("rx",600-x );
document.getElementById("ciry2").setAttribute("cx",1200-x );
document.getElementById("ciry2").setAttribute("cy",600+2*x );
}

if(x>200){
document.getElementById("ciry1").setAttribute("ry" ,600-x);
document.getElementById("ciry1").setAttribute("rx",600-x );
document.getElementById("ciry2").setAttribute("r",550-x );
if(x>300)
document.getElementById("ciry1").setAttribute("cy" ,300+x);
if(x<600)
document.getElementById("ciry2").setAttribute("cx"  ,1200-x );
}

var scrollpercent1 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
var scrollpercent2 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
var scrollpercent3 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
var scrollpercent4 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
var scrollpercent5 = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

var draw1 = length1 * scrollpercent1;
var draw2 = length2 * scrollpercent2;
var draw3 = length3 * scrollpercent3;
var draw4 = length4 * scrollpercent4;
var draw5 = length5 * scrollpercent5;

// Reverse the drawing (when scrolling upwards)
red1.style.strokeDashoffset = length1 - draw1;
red2.style.strokeDashoffset = length2 - draw2;
red3.style.strokeDashoffset = length3 - draw3;
red4.style.strokeDashoffset = length4 - draw4;
red5.style.strokeDashoffset = length5 - draw5;

}

