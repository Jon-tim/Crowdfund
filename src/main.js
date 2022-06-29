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

// Button "back this project"
const backProject = document.querySelector(".item-cta button");
const backProjectModal = document.querySelector(".back-project");
const backProjectContent = document.querySelector(".back-project-modal");
const backProjectCloser = document.querySelector(".modal-content svg");

function backProjectModalOpener() {
  backProjectModal.style.display = "block";
  backProjectContent.style.display = "block";
}
backProject.addEventListener("click", backProjectModalOpener);
backProjectCloser.addEventListener("click", () => {
  backProjectModal.style.display = "none";
});

// SELECT REWARD BUTTONS
const selectRewardBtn = document.querySelectorAll(".item-left-box input");

selectRewardBtn.forEach(function (e) {
  e.addEventListener("click", () => {
    backProjectContent.style.display = "block";
    backProjectModal.style.display = "block";
  });
});

//ENTER PLEDGE AMOUNTS/DONATION
const radioBtns = document.querySelectorAll("input[type='radio']");
const continuePledge = document.querySelectorAll(".pledge-price button");
const thankYou = document.querySelector(".thank-you-box");
const gotIt = document.querySelector(".thank-you-content button");

// const enterPledge = document.querySelectorAll(".enter-pledge");

const radioArray = Array.from(radioBtns);
// console.log(radioArray);

// console.log(radioArray[0].parentNode.parentElement.parentElement.lastElementChild)

radioArray.forEach((element, index) => {
  element.addEventListener("change", () => {
    // enterPledge.classList.add("close-pledge");
    radioArray.forEach((cur, i) => {
      if (element.checked) {
        element.parentNode.parentElement.parentElement.lastElementChild.classList.add(
          "open-pledge"
        );
        cur.parentNode.parentElement.parentElement.lastElementChild.classList.remove(
          "open-pledge"
        );
      }
    });
  });
});
//functions

// THANK YOU MODAL

continuePledge.forEach(function (e) {
  e.addEventListener("click", () => {
    thankYou.style.display = "block";
    backProjectContent.style.display = "none";
  });
});

gotIt.addEventListener("click", () => {
  thankYou.style.display = "none";
  backProjectModal.style.display = "none";
  backProjectContent.style.display = "none";
});
