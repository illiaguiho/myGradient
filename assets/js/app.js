/*
    Project Name: myGradient
    Location: Dakar, SENEGAL
    Date of creation: 30th September 2021
    Author: Elivi GUIHO
    Last Update: 1st October 2021 | 11:16:55
*/

// Variables declaration
let showInfo = document.getElementById("show-info");
let closeInfo = document.getElementById("close-info");
let info = document.getElementById("info");
let previewCard = document.getElementById("preview-card");
let firstColor = document.getElementById("first-color");
let secondColor = document.getElementById("second-color");
let cssCode = document.getElementById("css-code");
const copyBtn = document.getElementById("copy");
const isDone = document.getElementById("done");
const toLeft = "to left";
const toRight = "to right";

// Before events
isDone.style.display = "none";
cssCode.innerText = "linear-gradient(" + toRight + ", " + firstColor.value + ", " + secondColor.value + ")";

// Copy text to clipboard when copyBtn is clicked
copyBtn.addEventListener('click', function(){
  navigator.clipboard.writeText(cssCode.innerText = "linear-gradient(" + toRight + ", " + firstColor.value + ", " + secondColor.value + ")");
  cssCode.innerText = "copied successfully";
  copyBtn.style.display = "none";
  isDone.style.display = "block";
});

// Shows info text  when showInfo is clicked
showInfo.addEventListener("click", function(){
  info.style.display = "block";
  showInfo.style.display = "none";
  closeInfo.style.display = "block";
})

// Hides info text  when closeInfo is clicked
closeInfo.addEventListener("click", function(){
  info.style.display = "none";
  showInfo.style.display = "block";
  closeInfo.style.display = "none";
})

// Changes previewCard background when firstColor's value changes
firstColor.addEventListener('input', function(){
  isDone.style.display = "none";
  copyBtn.style.display = "block";
  previewCard.style.background = "linear-gradient(" + toRight + ", " + firstColor.value + ", " + secondColor.value + ")";
  cssCode.innerText = previewCard.style.background;
})

// Changes previewCard background when secondColor's value changes
secondColor.addEventListener('input', function(){
  isDone.style.display = "none";
  copyBtn.style.display = "block";
  previewCard.style.background = "linear-gradient(" + toRight + ", " + firstColor.value + ", " + secondColor.value + ")";
  cssCode.innerText = previewCard.style.background;
})
