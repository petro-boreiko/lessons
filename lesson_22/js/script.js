"use strict";

const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
   document.documentElement.classList.toggle("menu-open");
});

// !Висота ширина вюпорта + скрол
// const windowWidth = window.innerWidth;
// console.log(windowWidth);

// const windowHeight = window.innerHeight;
// console.log(windowHeight);

// !BOM
// ? Navigator
// Дані про браузер
// Перевірка який в нас браузер
// if (navigator.userAgent.includes("Chrome")) {
//    console.log("Brouser Chrome");
// } else if (navigator.userAgent.includes("Firefox")) {
//    console.log("Brouser Firefox");
// }

// ? Platforms
// console.log(navigator.userAgentData.platform);

// ? Location
// Отримує адресний рядок
// console.log(location.href);
// Перенаправлення користувача
// location.href += '#popup';

// ? Alert
// alert("Hello");

// ? Confirm
// let confirmAnswer = confirm('Question?');
// console.log(confirmAnswer ? 'yes' : 'no');

// ? Prompt
// let promtAnswer = prompt("Question?");
// console.log(promtAnswer);

// if (promtAnswer === null) {
// 	console.log("Cancel");
// } else if(promtAnswer) {
// 	console.log(`Answer the question user: "${promtAnswer}"`);
// } else {
// 	console.log('User not answer the question');
// }

// !DOM
// ? Звернення до HTML
// const htmlElement = document.documentElement;
// console.log(htmlElement);

// ? Звернення до HEADE
// const headElement = document.head;
// console.log(headElement);

// ? Звернення до BODY
const bodyElement = document.body;
// console.log(bodyElement);

// ? Перший та останній дочірній елемент
// const firstChild = bodyElement.firstElementChild;
// console.log(firstChild);
// const lastChild = bodyElement.lastElementChild;
// console.log(lastChild);

// ? Отримання усіх дочірних елементів(колекція)
// const childNodes = bodyElement.children;
// console.log(childNodes);

// for (const item of childNodes) {
// 	console.log(item.children);
// }

// ? Отримання попереднього елементу перед даним елементом
// const previousSibling = bodyElement.previousElementSibling;
// console.log(previousSibling);

// ? Отримання наступного елементу після даного ел
// const nextSibling = bodyElement.nextElementSiblingElementSibling;
// console.log(nextSibling);

// ? Пошук та отримання будь якого елементу
// ? Отримання оного першого знайденог елемента
// const liElement = document.querySelector('li')
// console.log(liElement);

// ? Отримання всіх знайдених елементів(колекції)
// const liElements = document.querySelectorAll("li");
// console.log(liElements);

// if (liElements.length) {
// 	liElements.forEach(item => {
// 		console.log(item);
// 	});
// }

// const classElement = document.querySelector('.menu');
// console.log(classElement);
// if (classElement) {
// 	console.log('yes');
// }
// const classElement1 = document.querySelectorAll('.menu .menu__body');
// console.log(classElement1);
// if (classElement1.length) {
// 	console.log('yes');
// }

// ? Отримання батьківського елементу
// const parentElement = bodyElement.parentElement;
// console.log(parentElement);

// ? Closes - перевірка наявності батьківського елемента 
// const parentElement3 = bodyElement.closest('body');
// console.log(parentElement3);

// const parentElement4 = bodyElement.closest('html');
// console.log(parentElement4);