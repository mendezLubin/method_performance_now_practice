// Exact time a function or task takes: performance.now()
// Total page load time: performance.timing or performance.getEntriesByType("navigation")

let start = 0;

let playButton = document.querySelector(".playBtn");
let pauseButton = document.querySelector(".pauseBtn");

// Add event listener to the play button
playButton.addEventListener("click", funcStart);

// This method gets the time that has passed since the page loaded.
// It doesn't need to run outside to "start" counting — it's always ready.

function funcStart() {
  start = performance.now(); // How much time (in ms) has passed since the page loaded when this method is called
  console.log(start);
  // console.log("Started at: " + start.toFixed(2) + " ms");
}

// Add event listener to the pause button
pauseButton.addEventListener("click", funcNow);

function funcNow() {
  const now = performance.now(); // How much time has passed since the page loaded when the Pause button is clicked
  const elapsed = now - start;
  console.log(elapsed);
  // console.log("Elapsed time: " + elapsed.toFixed(2) + " ms");
}