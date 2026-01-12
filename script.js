let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let running = false;

function start() {
  if (!running) {
    running = true;
    timer = setInterval(updateTime, 1000);
  }
}

function stop() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("display").innerText = "00:00:00";
}

function updateTime() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}
