
// Write a function that takes in an array and counts the 
// number of truthy elements in that array

const array = [1, 0, 'hello', 7,'', NaN];

console.log('Number of \'truthy\' values: ', countTruthy(array));

function countTruthy(array) {
    let counter = 0;
    for (let value of array)
        if (value) counter++;
        return counter;
}