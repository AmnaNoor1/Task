let percentage = 0;
const loaderText = document.getElementById("loaderText");
const circle = document.querySelector(".circle");

function updateLoader() {
  if (percentage <= 100) {
    document.getElementById("main-content").style.display = "none";
    loaderText.textContent = percentage + "%";
    const offset = 377 - (377 * percentage) / 100;
    circle.style.strokeDashoffset = offset;
    percentage++;
  } else {
    clearInterval(interval);
    document.querySelector(".loader-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }
}

const interval = setInterval(updateLoader, 30);