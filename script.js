// script.js

// Initialize AOS (already present in your setup, included for context)
AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
    offset: 100,
});

window.onscroll = function() {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

