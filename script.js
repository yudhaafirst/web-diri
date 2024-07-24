document.addEventListener("DOMContentLoaded", function () {
  // Efek pengetikan
  var h1Element = document.getElementById("typing-effect");
  var text = h1Element.innerText; // Simpan teks asli

  // Kosongkan teks asli
  h1Element.innerText = "";

  // Terapkan efek pengetikan
  new Typed(h1Element, {
    strings: [text],
    typeSpeed: 30, // Menyesuaikan kecepatan pengetikan
    backSpeed: 20, // Menyesuaikan kecepatan penghapusan
    backDelay: 1000, // Penundaan sebelum memulai penghapusan
    startDelay: 500, // Penundaan sebelum memulai pengetikan
    loop: false, // Atur ke true jika ingin efek ini berulang
    showCursor: true,
    cursorChar: "|", // Karakter kursor
    fadeOut: true, // Efek memudar saat kursor menghilang (berfungsi jika browser mendukung)
    onComplete: function (self) {
      // Pindahkan kursor ke akhir kalimat setelah animasi selesai
      var cursor = self.cursor;
      if (cursor) {
        cursor.style.marginLeft = "0";
      }
    },
  });

  // Animasi masuk dari kiri ke kanan
  const animateLeftElements = document.querySelectorAll(".animate-left");
  const animateRightElements = document.querySelectorAll(".animate-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  animateLeftElements.forEach((el) => {
    observer.observe(el);
  });

  animateRightElements.forEach((el) => {
    observer.observe(el);
  });
});
