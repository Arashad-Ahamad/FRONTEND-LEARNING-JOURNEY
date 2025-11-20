document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const nav = document.getElementById("nav");
  const hamburger = "☰";
  const cross = "×";

  // Initial state: menu closed, hamburger icon
  if (nav.classList.contains("hidden") === false) {
    nav.classList.add("hidden");
  }
  btn.innerHTML = hamburger;

  // Toggle menu on button click
  btn.addEventListener("click", function (e) {
    e.stopPropagation(); 
    e.preventDefault(); 
    const isOpen = !nav.classList.contains("hidden");
    nav.classList.toggle("hidden");
    btn.innerHTML = isOpen ? hamburger : cross;
  });

  // Close menu on outside click (excluding button and nav)
  document.addEventListener("click", function (e) {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.add("hidden");
      btn.innerHTML = hamburger;
    }
  });

  // Prevent menu links from closing on click (optional, if you want menu to stay open on link click)
  const links = nav.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      nav.classList.add('hidden');
      btn.innerHTML = hamburger;
    });
  });
});
