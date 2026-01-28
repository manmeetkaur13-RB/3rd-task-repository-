document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active-menu");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active-menu");
    });
  });
});
