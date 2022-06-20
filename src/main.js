const hamburgerMenu = document.querySelector(".bx");
const mobileMenu = document.querySelector(".nav-btn");
const nav = document.querySelector("header section");

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

//Bookmark status when active/clicked

const bookmark = document.querySelector(".bookmark");
const bookmarkSvg = bookmark.firstElementChild.firstElementChild;

function bookmarker() {
  bookmarkSvg.firstElementChild.classList.toggle("g-circle");
  bookmarkSvg.lastElementChild.classList.toggle("g-path");
  bookmark.querySelector("span").classList.toggle("bookmark-clicked");
  bookmark.querySelector("span").textContent === "Bookmark"
    ? (bookmark.querySelector("span").textContent = "Bookmarked")
    : (bookmark.querySelector("span").textContent = "Bookmark");
}

//when bookmark is clicked:
bookmark.addEventListener("click", bookmarker);
