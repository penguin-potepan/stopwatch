let display = document.getElementById('display');
let button_1 = document.getElementById('button_1');
let button_2 = document.getElementById('button_2');
let button_3 = document.getElementById('button_3');

let hours = 0;
let minutes = 0;
let seconds = 0;

let newHours = 0;
let newMinutes = 0;
let newSeconds = 0;

let status;
let interval;

function stopwatch(){
	seconds++;
	if(seconds / 60 == 1){
	  minutes++;
	  seconds = 0;
	  if(minutes / 60 == 1){
	    hours++;
	    minutes = 0;
	  }
	}
  if(seconds < 10){
   newSeconds =  "0" + seconds;
  }else{
    newSeconds = seconds;
  }
  if(minutes < 10){
   newMinutes =  "0" + minutes;
  }else{
    newMinutes = minutes;
  }
  if(hours < 10){
   newHours =  "0" + hours;
  }else{
    newHours = hours;
  }

	
	display.innerHTML = newHours + ":" + newMinutes + ":" +  newSeconds;
	
}
button_1.addEventListener("click", function(){
  
  interval = setInterval(stopwatch, 1000);
})

button_2.addEventListener("click", function(){
  clearInterval(interval);
})


button_3.addEventListener("click", function() {
    clearInterval(interval);
    display.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
})