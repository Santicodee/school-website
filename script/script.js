const menu = document.querySelector(".menu");
const nav = document.querySelector(".menu-sidebar");

menu.addEventListener("click", () => {
  nav.classList.toggle("change");
});
