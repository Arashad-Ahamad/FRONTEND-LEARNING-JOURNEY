const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    window.location.hash = "";
    window.scrollTo(0, 0);
  }
});
