//burgermenu

const btn = document.querySelector(".toggle-btn");
const nav = document.querySelector("nav");

function toggleMenu() {
  console.log("toggleMenu");
  nav.classList.toggle("shown");

  const menuShown = nav.classList.contains("shown");

  if (menuShown) {
    btn.textContent = "LUK";
  } else {
    btn.textContent = "MENU";
  }
}

btn.addEventListener("click", toggleMenu);
