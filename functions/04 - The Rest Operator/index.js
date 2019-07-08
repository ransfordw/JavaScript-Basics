
// ...args rest operator, not spread operator
// called rest because it represents the 'rest' of the arguments

function sum(discount, ...prices) {
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));