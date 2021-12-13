//burgermenu

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  console.log("toggleMenu");
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn.textContent = "Luk";
  } else {
    btn.textContent = "Menu";
  }
}

btn.addEventListener("click", toggleMenu);
