var userName = window.localStorage.getItem("userName");
document.querySelector(".profile-details h2").innerHTML = userName;
var now = new Date();

function navBarDate() {
  var date = `${now.toLocaleString("en-NZ", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  })}`;
  var time = `${now.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  })}`;
  if (time.includes("PM")) {
    time = time.replace("PM", "");
  } else {
    time = time.replace("AM", "");
  }
  document.getElementById("liveDate").innerText = date;
  document.getElementById("liveTime").innerText = time;
}
navBarDate();
setInterval(navBarDate, 1000);
document.getElementById("dark-theme").addEventListener("click", function () {
  let profileCard = document.getElementById("profile-card");
  profileCard.style.backgroundColor = "#000";
  let userName = document.querySelector(".profile-details h2");
  let title = document.querySelector(".profile-details p");
  let sign = document.querySelector(".work-timer p");
  let zero = document.querySelector(".timer");
  userName.style.color = "#fff";
  title.style.color = "#fff";
  sign.style.color = "#fff";
  zero.style.color = "#fff";
});

document.getElementById("light-theme").addEventListener("click", function () {
  const profileCard = document.getElementById("profile-card");
  profileCard.style.backgroundColor = "#fff";
  let userName = document.querySelector(".profile-details h2");
  let title = document.querySelector(".profile-details p");
  let sign = document.querySelector(".work-timer p");
  let zero = document.querySelector(".timer");
  userName.style.color = "#000";
  title.style.color = "#000";
  sign.style.color = "#000";
  zero.style.color = "#000";
});

document.addEventListener("DOMContentLoaded", function () {
  // let timerDisplay = document.getElementById("timer-counter");
  let timerDisplay = document.querySelector(".timer");
  let startButton = document.getElementById("start-btn");
  let resumeButton = document.getElementById("resume-btn");
  let stopButton = document.getElementById("stop-btn");

  let timer;
  let time = 0;
  let running = false;

  function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Ensure double digits in display
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${minutes}:${seconds}`;
  }

  function startTimer() {
    if (!running) {
      running = true;
      timer = setInterval(() => {
        time++;
        updateDisplay();
      }, 1000);
      resumeButton.style.display = "block";
      startButton.style.display = "none";
      stopButton.style.display = "block";
    }
  }

  function pauseTimer() {
    if (running) {
      clearInterval(timer);
      running = false;
      resumeButton.style.display = "none";
      startButton.style.display = "block";
    }
  }

  function stopTimer() {
    clearInterval(timer);
    time = 0;
    running = false;
    updateDisplay();
    resumeButton.style.display = "none";
    startButton.style.display = "block";
    stopButton.style.display = "none";
  }

  startButton.addEventListener("click", startTimer);
  resumeButton.addEventListener("click", pauseTimer);
  stopButton.addEventListener("click", stopTimer);

  // In mitialize display
  updateDisplay();
});
