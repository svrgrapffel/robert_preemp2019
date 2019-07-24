console.log("CONNECTED");
var optionClick = document.querySelector(".options");
var subOptions = document.getElementById("sublist");
var products = document.querySelector(".btm-right-product");
var modal = document.getElementById("modal");
var closeModalPg = document.getElementById("closeModal");

function showSuboptions() {
  if (subOptions.style.display === "none") {
    subOptions.style.display = "block";
  } else {
    subOptions.style.display = "none";
  }
}
optionClick.addEventListener("click", showSuboptions);

/*Se adauga functionalitate la modal*/

function showModal() {
  modal.style.display = "block";
}

function closeModals() {
  modal.style.display = "none";
}
products.addEventListener("click", showModal);
closeModalPg.addEventListener("click", closeModals);
