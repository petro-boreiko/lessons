"use strict";

const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
   document.documentElement.classList.toggle("menu-open");
});

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