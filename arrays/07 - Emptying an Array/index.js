let numbers = [1, 2, 3, 4, 5, 6, 7];
let another = numbers; // if we have this line, and 
// reassign numbers to a ew empty array, the original 
// array will not be garbage collected.

// Solution 1
// numbers = [];

console.log(numbers); // numbers array should be empty
console.log(another); // points back to the original array

// Solution 2
numbers.length = 0;
console.log(numbers);
console.log(another);

// Solution 3
numbers.splice(0, numbers.length);
console.log(numbers);
console.log(another);

// Solution 3
while (numbers.length > 0) // with large arrays, comes with a performance cost
    numbers.pop();
console.log(numbers);
console.log(another);