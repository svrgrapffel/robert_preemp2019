console.log("CONNECTED");
/*Exercitui 1 */

var buttonClick = document.getElementById("buttonShow");
var imagine = document.getElementById("imagine");
var rmvImg = document.getElementById("removeBtn");

function displayImage(event) {
  imagine.style.display = "block";
}
function hideImage(event) {
  imagine.style.display = "none";
}
function removeDOM(event) {
  imagine.parentNode.removeChild(imagine);
  console.log("Imaginea a fost scoase");
  alert("Imaginea nu exista");
}

buttonClick.addEventListener("click", displayImage);
rmvImg.addEventListener("click", removeDOM);
imagine.addEventListener("click", hideImage);
