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

window.onload = function() {
	var pomodoro = 60 * 25, 
		display = document.querySelector('#time');
	startTimer(pomodoro, display);
}
