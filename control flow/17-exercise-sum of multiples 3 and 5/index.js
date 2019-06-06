
// Write a function that returns the sum of all multiples
// of 3 and 5 up to the passed in limit

console.log(getSumOfMultiples3And5UpToLimit(146));

function getSumOfMultiples3And5UpToLimit(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 && i % 5 === 0)
            sum += i;

    return sum;
}