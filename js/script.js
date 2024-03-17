//js

//rose change
function blueRose(){
    document.getElementById("roses").src='image/blue.jpg'
 }
 function blackRose(){
    document.getElementById("roses").src='image/black.jpg'
 }
 function pinkRose(){
    document.getElementById('roses').src='image/pink.jpg'
 }
 function  whiteRose(){
    document.getElementById("roses").src='image/white.jpg'
 }
//text change
function textChange1(){
    document.getElementsByClassName('tc')[2].innerHTML= "welcome romadan";

}

//calculation2
let number7,number8;
number7=6;
number8=7;
number8*=number7;
function calculation2() {
    document.getElementById('value2').innerHTML=number8;
}
//calculation1
let number4,number5,number6;
number4=6;
number5=7;
number6=number4+number5;
function calculation1() {
    document.getElementById('value1').innerHTML=number6;
}

//calculation
var number1=5;
var number2=2;
var number3=number1+number2;
function calculation(){
    document.getElementById('value').innerHTML=number3;
}

//text show/hide
function showText(){
    document.getElementById('s_h').style.display='block';
}
function  hideText(){
    document.getElementById('s_h').style.display='none';
}

//color change
function colorChange(){
    document.getElementById('c_c').style.color='blue';
}

//bulb on /off
function bulbOn(){
    document.getElementById('bulb').src='bulbon.gif';

}
function bulbOff(){
    document.getElementById('bulb').src='bulb.gif';
}
//show date
function showDate(){
    document.getElementById('s_d').innerHTML=Date(); 
 
}
//text change
function textChange(){
    document.getElementById('t_c').innerHTML= "Hello ideas";

}

 
//boolean
const bool1 =73;
const bool2 =60;
function boolean1(){
    document.getElementById("b.v").innerHTML=bool1>bool2;
}

// example 18 
const array1= ["red","green","yellow","blue","black"];
function  color1(){
    document.getElementById('array').innerHTML=array1[3];
}
function color2(){
    document.getElementById('array').innerHTML=array1[2];
}
function color3(){
    document.getElementById('array').innerHTML=array1[1];
}
// uppercase
function textUpper(){
    let text=document.getElementById("u_t").innerHTML;
   document.getElementById("u_t").innerHTML=text.toUpperCase();
   }

// lower case
function textLower(){
    let text=document.getElementById("l_t").innerHTML;
   document.getElementById("l_t").innerHTML=text.toLowerCase();
   }



