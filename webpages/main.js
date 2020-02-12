var counter = 0;

function revealMessage() {
	document.getElementById("hiddenMessage").innerHTML = "Starting Again...";
}

var myClock = setInterval(myTimer, 1000);
function myTimer() {
	var time = new Date();
	document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}

// startTimer function from https://stackoverflow.com/a/20618517
function startTimer(duration, display, type) {
	var timer = duration, minutes, seconds;
	stopwatch = setInterval(function() {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = minutes + ":" + seconds;
		timer = timer - 1;
		if (0 > timer) {
			timer = duration;
			
			if (type === "pomodoro") {
				counter = counter + 1;
			}
			stopTimer();
		}
		
	}, 1000)

};

function stopTimer() {
	clearInterval(stopwatch);
	window.alert("Session ended!")
	document.getElementById("tally").innerHTML = counter;
}

document.getElementById("pomodoro").onclick = function() {
	var pomodoro = 60 * 25, 
		display = document.querySelector('#pomodoro');
	//select = "pomodoro";
	startTimer(pomodoro, display, type);
}

document.getElementById("short").onclick = function() {
	var short_break = 60 * 0.05,
		display = document.querySelector('#short');
	//select = "short";
	startTimer(short_break, display, type);
}

document.getElementById("long").onclick = function() {
	var short_break = 60 * 10,
		display = document.querySelector('#long');
	//select = "long;"
	startTimer(short_break, display, type);
}

// Define timer objects
var pomodoro = {
	name: "pomodoro",
	length: 25,
	status: "off"
};

var shortBreak = {
	name: "short",
	length: 5,
	status: "off"
};

var longBreak = {
	name: "long",
	length: 20,
	status: "off"
};


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

// Switch on/off -- switch object property
var switched = "off"
function toggle() {
	if (switched === "off") {
		switched = "on";
	} else {
		switched = "off";
	}
}
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
}


console.log(switched);

window.alert(toggle);