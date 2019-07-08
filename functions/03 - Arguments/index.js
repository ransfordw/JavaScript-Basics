
function sum(a, b) {
    return a + b;
}

function sum2() {
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum(1, 2)); // returns 3
console.log(sum(1)); // returns NaN because 1 + null is undefined
console.log(sum(1, 2, 3, 4, 5)); // still returns 3
console.log('Second Method');
console.log(sum2(1, 2, 3, 4, 5)); // now returns 15

