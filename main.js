function revealMessage() {
	document.getElementById("hiddenMessage").innerHTML = "Starting Again...";
}

var myClock = setInterval(myTimer, 1000);
function myTimer() {
	var time = new Date();
	document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}

function startTimer() {
	var minutes = 1000 * 60 * 25;
	var start = new Date().getTime();
	var endTime = start + minutes;
	var end = new Date(endTime);
	min = updateTime()
	document.getElementById("countdown").innerHTML = 
}

function updateTime(t) {
	if (t < 10) {
		t = "0" + t;
	}
	return t;
}