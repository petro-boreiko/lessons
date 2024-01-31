"use strict";

document.addEventListener("click", clickEvents);

function clickEvents(e) {
   const targetElement = e.target;

   if (targetElement.closest(".icon-menu")) {
      document.documentElement.classList.toggle("menu-open");
   }

   if (targetElement.closest(".form-book__item--date")) {
      const inputBoxDate = document.querySelector(".form-book__item--date");
      inputBoxDate.classList.add("date");
   }

   if (targetElement.closest(".form-book__item--time")) {
      const inputBoxDate = document.querySelector(".form-book__item--time");
      inputBoxDate.classList.add("time");
   }
}

window.addEventListener("resize", function () {
   transferElement(
      ".our-project__button", // element
      ".our-project__container", // originalParent
      ".our-project", // newParent
      767.98, // sizeToTransfer
      "beforeend", // placeOriginalParent
      "beforeend" //placeNewParent
   );
});

// Функція для переносу елементу
function transferElement(
   element, // Наш елемент
   originalParent, // Батько елемента
   newParent, // Новий батько елемента
   sizeToTransfer, // Розмір вюпорта де відбуваються зміни
   placeOriginalParent, // Місце в функції "insertAdjacentElement"
   placeNewParent // Місце в функції "insertAdjacentElement"
) {
   // Наш елемент
   const elementDoc = document.querySelector(element);
   // Батько елемента
   const originalParentEl = document.querySelector(originalParent);
   // Новий батько елемента
   const newParentEl = document.querySelector(newParent);
   const htmlElement = document.documentElement;
   // Ширина вікна вюпорта
   const widthWindow = htmlElement.clientWidth;

   // Виконується перевіркаю коли має відбутися перестановка
   if (widthWindow < sizeToTransfer) {
      // Якщо наш ел не має класу"done" то...
      if (!elementDoc.classList.contains("done")) {
         // то наш елемент переноситься в нове місце
         newParentEl.insertAdjacentElement(placeNewParent, elementDoc);
         // І добавляємо класс до HTML для стилізації
         htmlElement.classList.add("transfer-element");
      }
   } else {
      //  Якщо HTML має даний клас то...
      if (htmlElement.classList.contains("transfer-element")) {
         // Наш елемент переносимо на старе місце
         originalParentEl.insertAdjacentElement(
            placeOriginalParent,
            elementDoc
         );
         // І удаляємо клас з HTML
         htmlElement.classList.remove("transfer-element");
      }
   }
}

transferElement(
   ".our-project__button", // element
   ".our-project__container", // originalParent
   ".our-project", // newParent
   767.98, // sizeToTransfer
   "beforeend", // placeOriginalParent
   "beforeend" //placeNewParent
);

function counter(element) {
   let minValue = 0;
   const delay = parseInt(element.dataset.delay);
   const maxValue = parseInt(element.dataset.maxValue);
   const intervalElement = setInterval(() => {
      element.textContent = minValue;
      if (minValue === maxValue) {
         clearInterval(intervalElement);
      } else {
         minValue++;
         console.log(minValue);
      }
   }, delay);
}

const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         counter(entry.target);
         observer.unobserve(entry.target);
      }
   });
});
const itemElement = document.querySelector(".expierience-info__number");
observer.observe(itemElement);
