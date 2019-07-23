console.log("CONNECTED");

var buttonClick = document.getElementById("buttonShow");
var image = document.getElementById("imagine");
var rmvImg = document.getElementById("removeBtn");
/*var bodyClick = document.querySelector("body");*/
var imageAgain = document.getElementById("showAgain");

var parinteIMG = document.getElementById("parinteIMG");
var event = new Event("myEvent");

function eventHandler() {
  console.log("Hello from myEvent");
}

function displayImage() {
  image.style.display = "block";
}

function hideImage() {
  parinteIMG.dispatchEvent(event);
  image.style.display = "none";
}

function removeDOM(event) {
  imagine.parentNode.removeChild(image);
  console.log("Imaginea a fost scoase");
  alert("Imaginea a fost stearsa");
}

/*function somethingClicked(event) {
  console.log(event.target + " " + event.type);
  alert("Something was clicked!");
}*/

buttonClick.addEventListener("click", displayImage);
rmvImg.addEventListener("click", removeDOM);
image.addEventListener("click", hideImage);
parinteIMG.addEventListener("myEvent", eventHandler);
imageAgain.addEventListener("click", displayImage);
/*bodyClick.addEventListener("click", somethingClicked);*/
