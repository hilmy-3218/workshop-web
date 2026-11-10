const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("navLinks");
const icon = toggle.querySelector("i");

toggle.addEventListener("click", function () {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    icon.className = "fas fa-times";
  } else {
    icon.className = "fas fa-bars";
  }
});
