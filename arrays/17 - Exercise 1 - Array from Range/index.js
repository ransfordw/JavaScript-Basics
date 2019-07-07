
// Write a function called arrayFromRange and take in two
// parameters (min, max)


const numbers = arrayFromRange(-10,-4);

console.log(numbers);

function arrayFromRange(min, max) {
    const array = [];
    for (min; min <= max; min++)
        array.push(min);
    return array;

}