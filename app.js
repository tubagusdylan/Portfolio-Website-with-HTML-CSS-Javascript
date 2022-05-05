// === Menu show & Hidden in Mobile ===
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

const navItems = document.getElementsByClassName("nav-items");

// Menu SHOW and HIDDEN Toggle
// Cek apakah variabel ada
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-container");
  });
}

for (const item of navItems) {
  if (item) {
    item.addEventListener("click", () => {
      navMenu.classList.add("nav-container");
    });
  }
}

// Dark Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const sunIcon = "fi-rr-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(sunIcon) ? "fi-rr-moon" : "fi-rr-sun");

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "fi-rr-moon" ? "add" : "remove"](sunIcon);
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(sunIcon);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
