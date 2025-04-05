// Manipulasi Element

// innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Irham Sidi</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>Hi</p></div>";

// element.style.<propertiCSS>
// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "grey";

// setAttribute
// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "Irham");

// const a = document.querySelector("section#a a");
// a.setAttribute("id", "link");

// Menambahkan isi dari attribue yang telah terisi
const p2 = document.querySelector(".p2");
// p2.setAttribute("class", "label"); // Ini gagal attribute yang sudah ada akan ditimpa

p2.classList.add("label");
p2.classList.remove("label");
p2.classList.toggle("label"); // toggle apabila suatu class sudah ada maka akan dihapus berlaku kebalikannya
