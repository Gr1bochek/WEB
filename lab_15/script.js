//zavd 1
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function propsCount(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}

console.log(propsCount(mentor));

//zavd 2
let cybersportsman = {
    surname: "Kostilev",
    name: "Sasha",
    birth: "1204",
    post: "pro_gamer",
    country: "Ukrain"
}

function showProps(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

showProps(cybersportsman);

//zavd 3
class Person {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        console.log(this.name + " " + this.surname);
    }
}

class Student extends Person {
    constructor(name,surname,entryYear){
        super(name,surname);
        this.entryYear = entryYear;
    }
    showFullName(middleName){
        console.log(this.surname + " " + this.name + " " + middleName);
    }
    showCourse(){
        let currentYear = new Date().getFullYear();
        return currentYear - this.entryYear;
    }
}
const stud1 = new Student("Petro", "Petrenko", 2019);
stud1.showFullName("Petrovich");
console.log("Current course: " + stud1.showCourse());

//zavd 4
class Worker {
    #_experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary(){
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.showSalary() * this.#_experience;
    }

    get experience(){
        return this.#_experience;
    }
    set experience(value){
        this.#_experience = value;
    }
}

let worker1 = new Worker("Stasiuk Serhii", 20, 30);
console.log(worker1.fullName);
console.log(worker1.showSalaryWithExperience());
worker1.experience = 1.5;
console.log(worker1.showSalary());
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience());
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

function showWorkersWithSortedSalary(workers){
    workers.sort((a,b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());
    workers.forEach(worker => console.log(worker.fullName + " " + worker.showSalaryWithExperience()));
}

showWorkersWithSortedSalary([worker1, worker2, worker3]);

//zavd 5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return (Math.PI * (this.radius**2)).toFixed(2);
    }
}

class Triangle extends GeometricFigure {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        return ((p * (p - this.a) * (p - this.b) * (p - this.c))**1/2).toFixed(2);
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }
    getArea() {
        return (this.a**2).toFixed(2);
    }
}

function handleFigures(figures) {
    let sum = 0;
    for (let i = 0; i < figures.length; i++) {
        sum += parseFloat(figures[i].getArea());
        console.log("Area of " + figures[i].toString() + " is " + figures[i].getArea());
    }
    return sum;
}

console.log(handleFigures([new Circle(5), new Triangle(3, 4, 5), new Square(5)]));