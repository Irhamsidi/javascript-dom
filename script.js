// DOM Selection

// document.getElementById() -> Element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#d7d7d7";
judul.innerHTML = "Irham Sidi";

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";
