// setInterval(func, time) tells JavaScript to call a function repeatedly at a specified interval, for example every 1000ms (1 second).

// When you do this, it returns a number (an ID). So besides calling the function, we store the generated ID in a variable, e.g., intervalId = setInterval(funcCheckTime, 1000);. This ID acts as the name or reference to the timer that was created.

// This ID is necessary to stop it using clearInterval(id).
// setInterval() and clearInterval() work together. clearInterval stops the interval, but it needs the generated ID to know which one to stop.

let selPlayButton = document.querySelector(".playBtn");
let selPauseButton = document.querySelector(".pauseBtn");
let selCount= document.querySelector(".count");

let timeUntilButtonPress= null;
let intervalId= null;

// Add event listener to the play button
selPlayButton.addEventListener("click", funcCallEverySecond);

function funcCallEverySecond() {
  timeUntilButtonPress= performance.now();
  intervalId= setInterval(funcCheckTime, 1000);
}

function funcCheckTime() {
  const now= performance.now();
  selCount.textContent= now - timeUntilButtonPress;
}

selPauseButton.addEventListener("click", pauseTimer);

function pauseTimer() {
  clearInterval(intervalId);
  
}