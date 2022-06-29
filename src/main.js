const hamburgerMenu = document.querySelector(".bx");
const mobileMenu = document.querySelector(".nav-btn");
const nav = document.querySelector("header section");

//*********************************************************

const radioBtns = document.querySelectorAll("input[type='radio']");
const continuePledge = document.querySelectorAll(".pledge-price button");
const thankYou = document.querySelector(".thank-you-box");
const gotIt = document.querySelector(".thank-you-content button");
const radioArray = Array.from(radioBtns);
const enterPledge = document.querySelectorAll(".enter-pledge");

// console.log(enterPledge)
// enterPledge.forEach((e) => (e.style.display = "none"));

//*********************************************************

const bookmark = document.querySelector(".bookmark");
const bookmarkSvg = bookmark.firstElementChild.firstElementChild;

//*********************************************************

const backProject = document.querySelector(".item-cta button");
const backProjectModal = document.querySelector(".back-project");
const backProjectContent = document.querySelector(".back-project-modal");
const backProjectCloser = document.querySelector(".modal-content svg");

//*********************************************************

// Button "back this project"
function backProjectModalOpener() {
  // radioArray.forEach(pledger);
  // enterPledge.forEach((e) => (e.style.display = "none"));
  backProjectModal.style.display = "block";
  backProjectContent.style.display = "block";
  backProjectCloser.addEventListener("click", () => {
    backProjectModal.style.display = "none";
    radioArray.forEach((e) => (e.checked = false));
  });
}
backProject.addEventListener("click", backProjectModalOpener);
// radioArray.forEach((e) => (e.checked = false));
// enterPledge.forEach((e) => (e.style.display = "none"));

//ENTER PLEDGE AMOUNTS/DONATION
//function of pledge options
function pledger(element, index) {
  element.checked = false;
  element.addEventListener("change", () => {
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
}
radioArray.forEach(pledger);

//mobile Nav display
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

// SELECT REWARD BUTTONS
const selectRewardBtn = document.querySelectorAll(".item-left-box input");

selectRewardBtn.forEach(function (e) {
  e.addEventListener("click", () => {
    backProjectContent.style.display = "block";
    backProjectModal.style.display = "block";
  });
});

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
  radioArray.forEach((e) => (e.checked = false));
  // enterPledge.forEach((e) => (e.style.display = "none"));
});
