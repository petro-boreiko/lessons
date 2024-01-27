"use strict";

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener("click", ourFunction);

function ourFunction(e) {
   const targetElement = e.target;

   if (targetElement.closest(".item")) {
      targetElement.classList.toggle("active");
   }
}

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати
// клас до body який прибирає прозорість.
const loading = () => document.body.classList.add("loaded");
window.addEventListener("load", loading);

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.
const footerElement = document.querySelector("footer");
const headerElement = document.querySelector("header");

headerElement.addEventListener("mouseenter", () => {
   footerElement.style.backgroundColor = "#999c32";
});

headerElement.addEventListener("mouseleave", () => {
   footerElement.style.backgroundColor = "#329c3e";
});

// Задача №4
// Дано в html: текст, елемент з класом item, текст.
// Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент
// в елементі item виводячи цифру яка збільшується
// на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал
// має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо
// до елементу item (його видно), і не запускатись повторно.

function counter(element) {
   let minValue = 0;
   const delay = parseInt(element.dataset.delay);
   const maxValue = parseInt(element.dataset.maxValue);
   const intervalElement = setInterval(() => {
      element.textContent = minValue;
      minValue === maxValue ? clearInterval(intervalElement) : minValue++;
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
const itemElement = document.querySelector(".item-element");
observer.observe(itemElement);
