document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Safety check (prevents JS errors)
  if (!hamburger || !navLinks) return;

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active-menu");
  });

  // Close menu when a link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active-menu");
    });
  });
});
