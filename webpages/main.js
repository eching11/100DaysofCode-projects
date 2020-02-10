function revealMessage() {
	document.getElementById("hiddenMessage").innerHTML = "Starting Again...";
}

var myClock = setInterval(myTimer, 1000);
function myTimer() {
	var time = new Date();
	document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}

// startTimer function from https://stackoverflow.com/a/20618517
function startTimer(duration, display) {
	var timer = duration, minutes, seconds;
	setInterval(function() {
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		
		display.textContent = minutes + ":" + seconds;
		timer = timer - 1;
		if (0 > timer) {
			timer = duration;
		}
		
	}, 1000)
};


document.getElementById("start").onclick = function() {
	var pomodoro = 60 * 25, 
		display = document.querySelector('#time');
	startTimer(pomodoro, display);
}

document.getElementById("short").onclick = function() {
	var short_break = 60 * 5,
		display = document.querySelector('#short');
	startTimer(short_break, display);
}

document.getElementById("long").onclick = function() {
	var short_break = 60 * 10,
		display = document.querySelector('#long');
	startTimer(short_break, display);
}