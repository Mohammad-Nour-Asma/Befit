let header = document.querySelector(".header");
let iconMenu = document.querySelector("#menu-icon");

let menu = document.querySelector(".nav");

iconMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  iconMenu.classList.toggle("fa-times");
});
console.log(header.offsetTop);
window.addEventListener("scroll", () => {
  menu.classList.remove("active");
  iconMenu.classList.remove("fa-times");
  if (window.scrollY != 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
AOS.init();
