//JavaScript
//Greetings with Name
var name = prompt("Hey!! WELCOME:) I'm AURO\nWhat's your name:");
if(name=="null" || name==""){
    name = "Dear";
}
alert('Hiii ' + name + '\nLooking forward to have a WONDERFUL year with you :-)');

//Year animation
const text = document.querySelector(".newyear");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

//For Countdown timer
//Setting the Date & Time
var countDownDate = new Date("Dec 31, 2019 23:59:59").getTime();

//Update every 1s
var x = setInterval(function() {
    //Get Today's Date & Time
    var now = new Date().getTime();
    //Find the difference between now and set time
    var distance = countDownDate - now;
    //Time calculation for days, hours, minutes & seconds
    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
    var seconds = Math.floor((distance % (1000*60)) / 1000);

    //Display the result
    document.getElementById("demo").innerHTML = days +"d "+hours +"h "+ minutes + "m "+ seconds + "s";

    //If the countdown is finished
    if(distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Happy 2020";
    }
}, 1000);
