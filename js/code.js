let playButton = document.querySelector(".playBtn");
let pauseButton = document.querySelector(".pauseBtn");

let timeElapsed= null;

// Add event listener to the play button
playButton.addEventListener("click", funcCallEverySecond);

function funcCallEverySecond() {
  timeElapsed= performance.now();
  setInterval(funcCheckTime, 1000);
}

function funcCheckTime() {
  const now= performance.now();
  //  console.log("Time elapsed is: " + timeElapsed + " ms");
  console.log(now - timeElapsed);
}
