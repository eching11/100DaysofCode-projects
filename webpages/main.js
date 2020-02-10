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
			
			if (type === "") {
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
	startTimer(pomodoro, display, "pomodoro");
}

document.getElementById("short").onclick = function() {
	var short_break = 60 * 0.05,
		display = document.querySelector('#short');
	startTimer(short_break, display, "");
}

document.getElementById("long").onclick = function() {
	var short_break = 60 * 10,
		display = document.querySelector('#long');
	startTimer(short_break, display, "");
}