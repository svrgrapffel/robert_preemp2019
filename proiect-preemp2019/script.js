console.log("CONNECTED");
var optionClick = document.querySelector(".options");
var subOptions = document.getElementById("sublist");

function showSuboptions() {
  if (subOptions.style.display === "none") {
    subOptions.style.display = "block";
  } else {
    subOptions.style.display = "none";
  }
}
optionClick.addEventListener("click", showSuboptions);
