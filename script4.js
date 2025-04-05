// Manipulasi Node

//
// Buat element baru
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

// Simpan text ke dalam paragraf
pBaru.appendChild(teksPBaru);

// Simpan element baru (pBaru) di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

//
// Buat element baru
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");

// Simpan text ke dalam Li
liBaru.appendChild(teksLiBaru);

// Simpan element baru (liBaru) ke daftar sebelum item 2
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

//
// Remove element
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

//
// Replace element
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

// Buat element baru
const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2Baru.style.backgroundColor = "lightgreen";
