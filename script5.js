// //
// // Event Handler menggunakan inline HTML
// const p3 = document.querySelector(".p3");

// function ubahWarna() {
//   p3.style.backgroundColor = "lightblue";
// }

// //
// // Event Handler menggunakan method
// function ubahWarna2() {
//   p2.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");

// p2.onclick = ubahWarna2;

// //
// // addEventListener()
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   // Ambil parent simpan dalam sebuah variable
//   const ul = document.querySelector("section#b ul");

//   // Buat elemen yang akan ditambahkan
//   const liBaru = document.createElement("li");

//   const teksLiBaru = document.createTextNode("Item Baru");

//   // Masukkan teks ke element baru
//   liBaru.appendChild(teksLiBaru);

//   // Masukkan element baru ke parent
//   ul.appendChild(liBaru);
// });

// Ubah bgColor paragraf 3
const p3 = document.querySelector(".p3");

// p3.onclick = function name() {
//   p3.style.backgroundColor = "lightblue";
// };

// p3.onclick = function name() {
//   p3.style.color = "red";
// }; // Menggunakan event handler hanya dapat mengeksekusi event yang sama yang terakhir dideklarasikan

// Menggunakan addEventListener() bisa 2 event yang sama
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});

p3.addEventListener("click", function () {
  p3.style.color = "red";
});
