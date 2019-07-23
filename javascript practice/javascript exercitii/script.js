console.log("CONNECTED");
/*Exercitui 1 : Sa creem un buton care sa arata o imagine atunci cand dam click pe el*/

var buttonClick = document.getElementById("buttonClick");
var imagine = document.getElementById("imagine");

function displayImage(event) {
  imagine.style.display = "block";
}

buttonClick.addEventListener("click", displayImage);
