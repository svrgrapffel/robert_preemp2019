console.log("CONNECTED");
var optionClick = document.querySelector(".options");
var subOptions = document.getElementById("sublist");

var products = document.querySelectorAll(".btm-right-product");
/*var logProductIndex = function(productIndex) {
  console.log("productIndex:", productIndex);
};*/

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
function closeModals() {
  modal.style.display = "none";
}
closeModalPg.addEventListener("click", closeModals);

products.forEach(function(product) {
  product.addEventListener("click", function() {
    modal.style.display = "block";
    /*logProductIndex(index);*/
  });
});
