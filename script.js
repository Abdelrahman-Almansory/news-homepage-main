const hamburgerBtn = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
  sideBar.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});
