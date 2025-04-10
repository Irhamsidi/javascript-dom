const button = document.getElementById("btn");

//const body = document.getElementsByTagName("body")[0]; // bisa langsung document.body

button.addEventListener("click", function () {
  // document.body.style.backgroundColor = "lightblue";
  document.body.classList.toggle("biru-muda");
});

//
// Create Elements
const btnRandomColor = document.createElement("button");

const textRandomColor = document.createTextNode("Random Color");

//
// Arrange Elements

btnRandomColor.appendChild(textRandomColor);
btnRandomColor.setAttribute("type", "button");

button.after(btnRandomColor);

//
// Add Random Color Function
btnRandomColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

//
// Color Slider
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
});

//
//
document.body.addEventListener("mousemove", function (event) {
  // Mencari value dari posisi sumbu x mouse
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  // Mencari value dari posisi sumbu y mouse
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  // Ubah background color menggunakan value yang didapat dari posisi mouse
  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
