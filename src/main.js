const hamburgerMenu = document.querySelector(".bx");
const mobileMenu = document.querySelector(".nav-btn");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("bx-x")
    ? (mobileMenu.style.display = "block")
    : (mobileMenu.style.display = "none");
});

//change header color on scroll to white
function scroller() {
  window.scrollY >= nav.clientHeight
    ? nav.classList.add("nav-onscroll")
    : nav.classList.remove("nav-onscroll");
}

window.addEventListener("scroll", scroller);
