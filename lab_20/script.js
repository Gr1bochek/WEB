//zavd 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, w, z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log([z]); // [Bob]

//zavd 2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let {
    names: [name1, name2, name3, name4],
    ages: [age1, age2, age3, age4]
} = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

//zavd 3
function mul(...args) {
    let results = 1;
    let count = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === "number") {
            results *= args[i];
            count++;
        }
    }
    if (count === 0) {
        return 0;
    }
    return results;
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

//zavd 4
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"

function mapBuilder(keys, values) {
    let map = new Map();
    for (let i = 0; i < keys.length; i++) {
        map.set(keys[i], values[i]);
    }
    return map;
}