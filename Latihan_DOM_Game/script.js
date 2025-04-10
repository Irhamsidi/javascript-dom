//
// Generate random number untuk komputer memilih
function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

//
// Rules
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
}

//
// Fungsi untuk animasi sebelum komputer memilih
function putar() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

//
// Aplikasi Utama
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    // Menunda eksekusi selama 1 detik untuk menunggu fungsi putar selesai
    setTimeout(() => {
      const imgComputer = document.querySelector(".img-computer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

      const tampilHasil = document.querySelector(".hasil");
      tampilHasil.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;

//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   const imgComputer = document.querySelector(".img-computer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const tampilHasil = document.querySelector(".hasil");
//   tampilHasil.innerHTML = hasil;
// });
