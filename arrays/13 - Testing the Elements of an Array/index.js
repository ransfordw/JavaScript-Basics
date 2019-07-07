
const numbers = [1,-1, 2, 3];

const allPositive = numbers.every(value => {
    return value >= 0;
});

const atLeastOnePositive = numbers.some(value => {
    return value >= 0;
});

console.log(atLeastOnePositive);
console.log(allPositive);