const roles = [
  "React Developer",
  "HTML/CSS Specialist",
  "AI Tool Specialist",
  "Prompt Engineer"
];
let currentRoleIndex = 0;
let isDeleting = false;
let text = '';
let speed = 100; // typing speed in ms
const target = document.getElementById('roles');

function typeRole() {
  const current = roles[currentRoleIndex];
  if (!isDeleting) {
    text = current.substring(0, text.length + 1);
  } else {
    text = current.substring(0, text.length - 1);
  }
  target.textContent = text;

  if (!isDeleting && text === current) {
    // pause at full word
    setTimeout(() => { isDeleting = true; }, 1500);
  } else if (isDeleting && text === '') {
    isDeleting = false;
    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
  }

  setTimeout(typeRole, isDeleting ? speed/2 : speed);
}

// start animation on DOM ready
document.addEventListener("DOMContentLoaded", () => { typeRole(); });
