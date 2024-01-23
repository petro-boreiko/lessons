"use strict";

const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
   document.documentElement.classList.toggle("menu-open");
});

const buttonOurPorject = document.querySelector(".our-project__button");
const elementOurProject = document.querySelector(".our-project");
const htmlElement = document.documentElement;
const widthWindow = htmlElement.clientWidth;

   if (widthWindow < 767) {
      elementOurProject.insertAdjacentElement("beforeend", buttonOurPorject);
      buttonOurPorject.style.marginLeft = `15px`;
   }

