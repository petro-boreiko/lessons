"use strict";

// Задача №1
// Отримати в константу елемент <body>

//за допомогою document отримуємо елемент body в константі
const bodyElement = document.body;
console.log("Задача №1:");
console.log(bodyElement);

// =============================================================================

// Задача №2
// Написати функцію, яка додає в <body> список UL
// з певною кількістю LI (кількість має передаватись як параметр функції,
// також мати значення за замовченням)

function getList(amountLi = 1) {
   // Робимо перевірку чи параметр amountLi більше нуля
   if (amountLi <= 0) {
      return console.log("Введіть будь ласка число більше нуля");
   }

   const wrapper = document.querySelector(".wrapper");

   // Створюємо перевірку для bodyElement
   if (wrapper) {
      // Додаємо список до "body"
      const ourList = wrapper.insertAdjacentHTML(
         "afterbegin",
         `<ul class = "list"></ul>`
      );
      // Шукаємо наш список по першому входженні
      const bodyList = document.querySelector("ul");

      //Перевіряємо чи наш список на наявність
      if (bodyList) {
         // Створюємо цикл для створення потрібної кількості елементів в списку
         for (let i = 0; i < amountLi; ++i) {
            bodyList.insertAdjacentHTML(
               "afterbegin",
               `<li class = "list__item">Item №${amountLi - i}</li>`
            );
         }
      }

      return console.log(bodyList);
   }

   // ! Цей код для тих хто хoче заморочитися
   // if (bodyElement) {
   // Створюємо перевірку для bodyElement
   // Створюємо список "ul"
   // const createList = document.createElement("ul");
   // Додаємо список до "body"
   // const addListToBody = bodyElement.prepend(createList);
   // Шукаємо наш список по першому входженні
   // let listElement = document.querySelector("ul");

   //Перевіряємо чи наш список на наявність
   // if (listElement) {
   // Створюємо цикл для створення потрібної кількості елементів в списку
   // for (let i = 1; i <= amountLi; ++i) {
   // Створюємо "li"
   // const createItemList = document.createElement("li");
   // Додаємо наш елемент до списку
   //       const addItemToList = listElement.prepend(createItemList);
   //    }
   // }

   // return listElement;
   // }
}

//Оголошуємо нашу функцію
console.log("Задача №2:");
getList(30);

console.log("Задача №2:");
getList(-1);

console.log("Задача №2:");
getList();

// =============================================================================

// Задача №3
// Додати до елементу <body> класс loaded.
// Потім перевірити чи є клас loaded у елемента <body>
// і, якщо є, додати стиль кольору тесту зелений.

// ЗАПИСУЄМО ВІДОМІ НАМ ПАРАМЕТРИ В ЗМІННІ
const COLOR_GREEN = "#008000";
const PADDING = 15;

// Додаємо клас до body
bodyElement.classList.add("loaded");

// Pобимо перевірку на наявність класу
if (bodyElement.classList.contains("loaded")) {
   bodyElement.style.color = `${COLOR_GREEN}`;
   bodyElement.style.padding = `${PADDING}px`;
}
// =============================================================================

// Задача №4
// Дано в html: три елементи з класом item.
// Треба отримати ці елементи в константу, кожному додати клас active,
// та перезаписати контент всередені кожного елемента на
// "Елемент №(тут порядковий номер елементу починаючи з 1)".

//Отримуємо ці елементи в колекцію
const itemElement = document.querySelectorAll(".item");

//Створюємо цикл для перебору кожного елемента
itemElement.forEach((element, index) => {
   // Додаємо клас "active" до елементу
   element.classList.add("active");
   // Перезаписуємо контент в наших елементах
   element.textContent = `Елемент №${index + 1}`;

   element.style.cssText = `
		font-size: 20px;
		margin-bottom: 10px;
	`;
});

// =============================================================================

// Задача №5
// Дано в html: текст, далі кнопка з класом button.
// Треба прокрутити скрол сторінки до кнопки

// Отримуємо елемент з класом .button в константу
const buttonElement = document.querySelector(".button");

// Додамо трошки стилів для нашої кнопки
buttonElement.style.cssText = `
	margin: 10px auto;
	width: 150px;
	border: 2px solid #b93535;
	background-color: yellow;
	padding: 15px 20px;
`;

// Створюємо функцію, яка дозволить прокручувати до нашого елемента
function scrollToBlock(element) {

	// Робимо перевірку
   if (element) {
      // До елемента застосовуємо функцію scrollIntoView
      element.scrollIntoView({
         block: "center",
         inline: "nearest",
         behavior: "smooth",
      });
   }
}

// Оголошуємо нашу функцію
scrollToBlock(buttonElement);

// =============================================================================

// Задача №6
// Дано в html: посилання з класом link
// Треба додати до посилання дата атрибут зі значенням 100
// Поім отримати значення трибуту, та, якщо значення меньше 200
// пофарбувати колір тексту посилання в червоний

// ЗАПИСУЄМО ВІДОМІ НАМ ПАРАМЕТРИ В ЗМІННІ
const COLOR_RED = "#ff0000";

// Отримуємо елемент з класом .link в константу
const linkElement = document.querySelector(".link");
// Додаємо до посилання дата атрибут зі значенням 100
linkElement.dataset.value = 100;

//Перевіряємо чи є наш втрибут
if (linkElement.hasAttribute("data-value")) {
   //Робимо ще одну перевірку, чи наше зеч менше 200
   if (parseFloat(linkElement.dataset.value) < 200) {
      //Фарбуємо текст силки в червоний колір якщо викинується умова
      linkElement.style.color = COLOR_RED;
   }
}

// =============================================================================
