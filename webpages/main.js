//When timer obj is on and user clicks start button, start that timer.
function Timer (name, length, status) {
	this.name = name;
	this.length = length;
	this.status = status;
}

// Define timer objects
var pomodoro = new Timer("pomodoro", 25, "off");
pomodoro.count = 0;
var shortBreak = new Timer ("short", 5, "off");
var longBreak = new Timer ("long", 20, "off");


var select = "";
// Highlight selected timer function from https://stackoverflow.com/a/8644513
function highlight(text) {
	var searchText = document.getElementById("searchText");
	var innerHTML = searchText.innerHTML;
	var index = innerHTML.indexOf(text);
	if (index >= 0) {
		innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + text.length) + "</span>" + innerHTML.substring(index + text.length);
		searchText.innerHTML = innerHTML;
		select = text;
	}
};


var myClock = setInterval(myTimer, 1000);
function myTimer() {
	var time = new Date();
	document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}


function stopTimer() {
	clearInterval(stopwatch);
	window.alert("Session ended!")
	document.getElementById("tally").innerHTML = pomodoro.count;
};

// startTimer function from https://stackoverflow.com/a/20618517
function startTimer(obj, display) {
	var timer = obj.length * 60, minutes, seconds;
	stopwatch = setInterval(function() {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = minutes + ":" + seconds;
		timer = timer - 1;
		if (0 > timer) {
			timer = obj.length;			
			if (obj.name === "pomodoro") {
				pomodoro.count = pomodoro.count + 1;
			}
			stopTimer();
		}
		
	}, 1000)

};

document.getElementById("pomodoro").onclick = function() {
	var display = document.querySelector('#pomodoro');
	startTimer(pomodoro, display);
}

document.getElementById("short").onclick = function() {
	var display = document.querySelector('#short');
	startTimer(shortBreak, display);
}

document.getElementById("long").onclick = function() {
	var display = document.querySelector('#long');
	startTimer(longBreak, display);
}

function toggle(obj) {
	if (obj.status === "off") {
		obj.status = "on";
	} else {
		obj.status = "off";
	}
}
// outputs "off"
console.log(longBreak.status);
toggle(longBreak);
// outputs "on"
console.log(longBreak.status);





