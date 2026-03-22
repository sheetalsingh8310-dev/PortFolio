const roles = ["full Stack web developer", "AI Tool Specialist", "Prompt Engineer"];
let currentRoleIndex = 0;
let isDeleting = false;
let text = "";
let speed = 100; // typing speed in ms
const target = document.getElementById("roles");
const nav = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

function typeRole() {
  if (!target) {
    return;
  }

  const current = roles[currentRoleIndex];
  if (!isDeleting) {
    text = current.substring(0, text.length + 1);
  } else {
    text = current.substring(0, text.length - 1);
  }
  target.textContent = text;

  if (!isDeleting && text === current) {
    // pause at full word
    setTimeout(() => {
      isDeleting = true;
    }, 1500);
  } else if (isDeleting && text === "") {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  }

  setTimeout(typeRole, isDeleting ? speed / 2 : speed);
}

// start animation on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  if (target) {
    typeRole();
  }

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
