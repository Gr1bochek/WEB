//zavd 1
function upperCase(expression) {
    let regExp = /[A-Z]/g;
    if (regExp.test(expression[0])) {
    console.log("String's starts with uppercase character");
    }
    else {
    console.log("String's doesn't start with uppercase character");
    }
}

upperCase('Master Ball');
upperCase('master ball');

//zavd 2
function switchSubstring(expression) {
    return expression.split(/\s/).reverse().join(', ');
}

console.log(switchSubstring('Master Ball'));

//zavd 3
function validateCardNumber(cardNumber) {
    let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return regExp.test(cardNumber);
}

console.log(validateCardNumber('1234-5678-9012-3456'));
console.log(validateCardNumber('1-23-456-7890'));

//zavd 4
function validateEmail(email) {
    let regExp = /^[a-zA-Z\d]+-?\w*@[a-zA-Z\d]+\.[a-zA-Z\d]+$/;
    if (regExp.test(email)) {
        console.log("Email is correct!");
    }
    else {
        console.log("Email is incorrect!");
    }
}

validateEmail('my_mail@gmail.com');
validateEmail('#my_mail@gmail.com');
validateEmail('my_ma--il@gmail.com');

//zavd 5
function checkLogin(login) {
    let regExp = /^[a-zA-Z_.]+[\w.]{2,10}$/;
    console.log(regExp.test(login)+'\n');
    let result = login.match(/\d*\.?\d*/g)
        .filter(n => n.length > 0)
        .join(", ");
    console.log(result);
}

checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');