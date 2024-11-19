// //Calulator
// document.getElementById("btn").addEventListener("click", Areafunc);

// function Areafunc() {
//   var topbase = document.getElementById("b1").value;
//   var bottombase = document.getElementById("b2").value;
//   var height = document.getElementById("h").value;

//   let Area = (1 / 2) * (topbase + bottombase) * height;
//   let opa = Area.toFixed(2);
//   Area = opa;
//   document.getElementById("op").innerHTML = Area;
// }

document.getElementById("btn").addEventListener("click", Areafunc);

function Areafunc() {
  var topbase = parseFloat(document.getElementById("b1").value);
  var bottombase = parseFloat(document.getElementById("b2").value);
  var height = parseFloat(document.getElementById("h").value);
  var unit = document.getElementById("input units").value;

  // Calculate the area of the trapezoid
  let Area = (1 / 2) * (topbase + bottombase) * height;
  let opa = Area.toFixed(2); // Round to two decimal places

  let result = opa + " " + unit;

  document.getElementById("op").innerHTML = result;

  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("h").value = "";

  document.getElementById("op").classList.add("green");
  document.getElementById("image").src = "Images/CheckMark.webp";
}
