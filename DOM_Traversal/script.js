// //
// // Tangkap Div Luar
// const card = document.querySelector(".card");
// const tombolHapus = document.querySelector(".close");

// // console.log(container);
// // console.log(tombolHapus);

// tombolHapus.addEventListener("click", function () {
//   card.remove(); // Menghilangkan element
// });

//
// DOM Traversal
//
const close = document.querySelectorAll(".close");

// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     // close[i].parentElement.style.display = "none";
//     event.target.parentElement.style.display = "none";
//   });
// }

// Menggunakan forEach dan arrow function
close.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
    event.preventDefault();
  });
});
