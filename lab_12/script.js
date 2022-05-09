//zavd 1
let x = 1;
let y = 2;
let res1 = String(x) + y;
console.log(res1); // "12"
console.log(typeof res1); // "string"
let res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"
let res3 = Boolean(x);
console.log(res3); // true
console.log(typeof res3); // "boolean"
let res4 = Number(String(x) + Boolean(y));
console.log(res4); // NaN
console.log(typeof res4); // "number"

//zavd 2
let userNumber = prompt("Введіть число:");
if (userNumber > 0 && !(userNumber % 2)) {
    console.log("Число парне додатнє");
} else {
    console.log("Число не парне додатнє");
}

if (!(userNumber % 7)) {
    console.log("Число кратне 7");
} else {
    console.log("Число не кратне 7");
}

//zavd 3
let isAdult;
let age = prompt("Введіть ваш вік:");
isAdult = age >= 18;
if (isAdult) {
    console.log("Ви досягли повнолітнього віку");
} else {
    console.log("Ви ще надто молоді");
}

//zavd 4
let a = Number(prompt("Введіть першу сторону трикутника:"));
let b = Number(prompt("Введіть другу сторону трикутника:"));
let c = Number(prompt("Введіть третю сторону трикутника:"));
if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log("Трикутник не існує");
} else {
    let p = (a + b + c) / 2;
    let area = (p * (p - a) * (p - b) * (p - c)) ** (1 / 2);
    console.log("Площа трикутника: " + area.toFixed(3));
    if (a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2) {
        console.log("Трикутник прямокутний");
    } else {
        console.log("Трикутник не прямокутний");
    }
}

//zavd 5
let hours = new Date().getHours();

if (hours <= 5) {
    console.log("Доброї ночі");
} else if (hours <= 11) {
    console.log("Доброго ранку");
} else if (hours <= 17) {
    console.log("Доброго дня");
} else if (hours <= 23) {
    console.log("Доброго вечора");
}