const menuBtn = document.getElementById("menu-button");
const closeBtn = document.getElementById("menu-close");
const asideMenu = document.getElementById("aside-menu");
const visibile = document.querySelector("data-visible");

document
  .querySelector(".nav-menu")
  .querySelectorAll("li")
  .forEach((element) => {
    element.querySelectorAll("a").forEach((elementt) => {
      elementt.addEventListener("click", closeMenu);
    });
  });

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
  if (!visibile) {
    asideMenu.classList.add("menu-open");
    menuBtn.setAttribute("data-visibile", true);
  }
}

function closeMenu() {
  asideMenu.classList.remove("menu-open");
  menuBtn.setAttribute("data-visibile", false);
}

