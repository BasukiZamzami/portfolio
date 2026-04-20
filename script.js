// AMBIL SEMUA ELEMENT
const elements = document.querySelectorAll('.fade-in');

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  }
});

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// FUNCTION UNTUK TAMPIL SAAT LOAD
function showOnLoad() {
    elements.forEach(el => {
        el.classList.add('show');
    });
}

// JALANKAN SAAT HALAMAN LOAD
window.addEventListener('load', showOnLoad);

// ANIMASI SAAT SCROLL
window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('show');
        }
    });
});

// TYPING EFFECT (AMAN)
const text = "Web Developer | IoT Enthusiast";
let index = 0;

function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return; // FIX supaya tidak error di halaman lain

    if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();
