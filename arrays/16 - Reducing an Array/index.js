const numbers = [1, 2, -1, 3];

let sum = 0;
for (let n of numbers)
    sum += n;

console.log(sum);

const sum2 = numbers
    .reduce((accumulator, currentValue) =>
        accumulator + currentValue);

console.log(sum2);