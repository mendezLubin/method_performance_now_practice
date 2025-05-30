let playButton = document.querySelector(".playBtn");
let pauseButton = document.querySelector(".pauseBtn");

// Add event listener to the play button
playButton.addEventListener("click", funcCallEverySecond);

function funcCallEverySecond() {
  setInterval(funcCheckTime, 1000);
}

function funcCheckTime() {
  const now = performance.now();
  console.log(now);
}
