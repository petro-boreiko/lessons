"use strict";

const icon = document.querySelector(".icon-menu");
icon.addEventListener("click", function () {
   document.documentElement.classList.toggle("menu-open");
});

let myAge = 18;
console.log("Hello");
console.log(myAge);

const petroBoreiko = {
   age: 28,
   firstName: "Petro",
   lastName: "Boreiko",
};
console.log("My age: " + petroBoreiko.age);

console.log(petroBoreiko.age);

const user = [28, "Petro", "Boreiko"];

console.log(user[2]);

const admin = "Petro Boreiko";

console.log(petroBoreiko);
console.log(user);

const info = `name: ${petroBoreiko.firstName}, age: ${petroBoreiko.age}`;
console.log(info);

console.log(petroBoreiko.firstName.length);
console.log(petroBoreiko.firstName[3]);
console.log(petroBoreiko.firstName.toLowerCase())
console.log(petroBoreiko.firstName.toUpperCase())
console.log(petroBoreiko.firstName.includes('or'));
console.log(petroBoreiko.firstName.replace('o', 1));

let number = '12';
console.log(typeof number)
console.log(typeof +number)
console.log(+number)
console.log(number)


