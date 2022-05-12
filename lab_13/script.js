//zavd 1
let arr = [];
arr[0] = 6;
arr[1]= "Info";
arr[2] = true;
arr[3] = null;

console.log(arr.length);
arr[4] = prompt("Введіть будь-яке значення");
console.log(arr[4]);
arr.shift();
console.log(arr);

//zavd 2
let cities=["Ternopil", "Lviv", "Warsaw"];
console.log(cities.join("*"));

//zavd 3
let numbers=[2,3,4,5];
let multiply=1;
for (let i=0; i<numbers.length; i++){
    multiply*=numbers[i];
}
console.log(multiply);
multiply=1;
let i=0;
while (numbers[i]!==undefined){
    multiply*=numbers[i];
    i++;
}
console.log(multiply);

//zavd 4
i=0;
for(let i=0; i<=15; i++){
    if (i%2===0){
        console.log(i+" is even");
    }
    else {
        console.log(i+" is odd");
    }
}

//zavd 5
function randArray(k){
    let arr=[];
    for (let i=0; i<k; i++){
        arr[i]=Math.floor(Math.random()*100);
    }
    return arr;
}

let arr2=randArray(10);
console.log(arr2);

//zavd 6
let number=prompt("Введіть число");
let degree=prompt("Введіть степінь");
function raiseToDegree(number, degree){
    let result=1;
    for (let i=0; i<degree; i++){
        result*=number;
    }
    return result;
}
console.log(raiseToDegree(number, degree));

//zavd 7
function findMin(){
    let min=arguments[0];
    for (let i=0; i<arguments.length; i++){
        if (arguments[i]<min){
            min=arguments[i];
        }
    }
    return min;
}

console.log(findMin(7.6,-5.7,0.4,11.1,0.1));

//zavd 8
function findUnique(){
    for (let i=0; i<arguments.length; i++){
        for (let j=i+1; j<arguments.length; j++){
            if (arguments[i]===arguments[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(findUnique(3,8,13,18,23));
console.log(findUnique(3,8,13,13,23));

//zavd 9
function lastElement(arr, n){
    let returnArr=[];
    if(n===undefined){
        return arr[arr.length-1];
    }
    else{
        for (let i=arr.length-n; i<arr.length; i++){
            returnArr.push(arr[i]);
        }
        return returnArr;
    }
}

let example=[1,2,3,4,5,6,7,8,9,10];
console.log(lastElement(example));
console.log(lastElement(example,7));

//zavd 10
function firstLettersToUpperCase(str){
    let arr=str.split(" ");
    for (let i=0; i<arr.length; i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    return arr.join(" ");
}

console.log(firstLettersToUpperCase("hello world"));