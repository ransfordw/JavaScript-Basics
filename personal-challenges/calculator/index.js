const listOfFunctions = ['addTwoNumbers(x, y)', 'subtractTwoNumbers(x, y)', 'multiplyTwoNumbers(x, y)', 'divideTwoNumbers(x, y)'];

function addTwoNumbers(x, y) {
    return x + y;
}

function subtractTwoNumbers(x, y) {
    return x - y;
}

function multiplyTwoNumbers(x, y) {
    return x * y;
}

function divideTwoNumbers(x, y) {
    return x / y;
}

function printOptions() {
    console.table(listOfFunctions);
}

printOptions();
console.log('Enter any of the listed functions with params to do maths.');