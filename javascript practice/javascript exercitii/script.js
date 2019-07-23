console.log("CONNECTED");

var buttonClick = document.getElementById("buttonShow");
var imagine = document.getElementById("imagine");
var rmvImg = document.getElementById("removeBtn");
var bodyClick = document.querySelector("body");

function displayImage(event) {
  imagine.style.display = "block";
}
function hideImage(event) {
  imagine.style.display = "none";
}
function removeDOM(event) {
  imagine.parentNode.removeChild(imagine);
  console.log("Imaginea a fost scoase");
  alert("Imaginea a fost stearsa");
}

function somethingClicked(event) {
  console.log(event.target + " " + event.type);
  alert("Something was clicked!");
}

buttonClick.addEventListener("click", displayImage);
rmvImg.addEventListener("click", removeDOM);
imagine.addEventListener("click", hideImage);
bodyClick.addEventListener("click", somethingClicked);
