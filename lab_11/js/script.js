// zavd 2
console.log("Стасюк");

// zavd 3
let a=2;
let b=5;

console.log("a = " + a + "; b = " + b);

b=a;

console.log("a = " + a + "; b = " + b);

//zavd 4
let object={
    string: "string",
    number: 5,
    boolean: true,
    undefined: undefined,
    null: null
};

//zavd 5
let big=confirm("Вам є 18 років?");
console.log(big);

//zavd 6
let surname="Стасюк";
let name="Сергій";
let birth=2004;
let group="КН-321";
let isMarried=false;

console.log(birth);
console.log(isMarried);
console.log(surname);
console.log(name);
console.log(group);

let undefined1;
let null1 = null;

console.log(typeof undefined);
console.log(typeof null1);

//zavd 7
let login=prompt("Введіть логін");
let email=prompt("Введіть email");
let password=prompt("Введіть пароль");

alert("Dear " + login + " your email is " + email + ", your password is " + password);

//zavd 8
let secondInHour=60*60;
let secondInDay=24*secondInHour;
let secondInMonth=31*secondInDay;

alert("Секунд в годині: " + secondInHour + "; Секунд в дні: " + secondInDay + "; Секунд в місяці: " + secondInMonth);