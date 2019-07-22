/*document.getElementById("firstName").addEventListener("blur", function(event) {
  var value = document.getElementById("firstName").value;
  if (value == "") {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid red;");
  } else {
    document
      .getElementById("firstName")
      .setAttribute("style", "border: 1px solid #777777;");
  }
});*/

var fn = document.getElementById("firstName");
var ln = document.getElementById("lastName");
var email = document.getElementById("email");

var add = document.getElementsByClassName("add");
var subtract = document.getElementsByClassName("remove");
var quantityElements = document.getElementsByClassName("quantity");
var finalPrice = document.getElementsByClassName("finalPrice");
var totalPrice = document.getElementsByClassName("totalPrice");
console.log("price", totalPrice[0].innerHTML);
var isFN = false;
var isLN = false;
var isEM = false;
var productPrice = 4;
/*var finalPrice;*/
/*-----*/

fn.addEventListener("blur", function(e) {
  var letters = /^[A-Za-z]+$/;
  var e = fn;
  var showErr = document.getElementById("inCaseOfError");
  if (fn.value == "") {
    showErr.innerHTML = "Ai gresit ceva!";
    fn.setAttribute("style", "border: 1px solid red;");

    console.log("Mai incearca");
  } else if (!e.value.match(letters)) {
    console.log("mai inceraca");
    showErr.innerHTML = "Ai gresit ceva!";
    fn.setAttribute("style", "border: 1px solid red;");
  } else {
    console.log("fnEste corect!");
    isFN = true;
    tryEnable();
  }
});

ln.addEventListener("blur", function(e) {
  var letters = /^[A-Za-z]+$/;
  var e = ln;
  var showErr = document.getElementById("inCaseOfError");
  if (ln.value == "") {
    showErr.innerHTML = "Ai gresit ceva!";
    ln.setAttribute("style", "border: 1px solid red;");
    console.log("Mai incearca");
  } else if (!e.value.match(letters)) {
    console.log("mai inceraca leters");
    showErr.innerHTML = "Ai gresit ceva!";
    ln.setAttribute("style", "border: 1px solid red;");
  } else {
    console.log("lnEste corect!");
    isLN = true;
    tryEnable();
  }
});

email.addEventListener("blur", function(e) {
  var letters = /^[A-Za-z]+$/;
  var e = email;
  var showErr = document.getElementById("inCaseOfError");
  if (email.value == "") {
    showErr.innerHTML = "Ai gresit ceva!";
    email.setAttribute("style", "border: 1px solid red;");
    console.log("Mai incearca");
  } else if (!e.value.match(letters)) {
    console.log("mai inceraca");
    showErr.innerHTML = "Ai gresit ceva!";
    email.setAttribute("style", "border: 1px solid red;");
  } else {
    console.log("Este corect!");
    isEM = true;
    tryEnable();
  }
});

function tryEnable() {
  console.log("zzz", isFN, isLN, isEM);
  if (isFN == true && isLN == true && isEM == true) {
    document.getElementById("checkout").disabled = false;
  }
}

/*globalIndex = 0;*/
/*adaugam functionalitate la butoanele de + si -*/

for (index = 0; index < add.length; index++) {
  add[index].addEventListener("click", addFunction.bind(null, index));
  subtract[index].addEventListener("click", subtractFunction.bind(null, index));
}

function addFunction(index) {
  quantityElements[index].innerHTML =
    Number(quantityElements[index].innerHTML) + 1;
  finalPrice[index].innerHTML = Number(quantityElements[index].innerHTML) * 4;
  totalPrice[0].innerHTML = Number(totalPrice[0].innerHTML) + 4;
}

function subtractFunction(index) {
  quantityElements[index].innerHTML =
    Number(quantityElements[index].innerHTML) - 1;
  finalPrice[index].innerHTML = Number(quantityElements[index].innerHTML) * 4;
  totalPrice[0].innerHTML = Number(totalPrice[0].innerHTML) - 4;
}
