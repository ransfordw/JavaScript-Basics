
const numbers = [3, 4]; // numbers here is a constant so we cannot reassign the variable
// but we can add or remove elements within the array

// Remember: Arrays are objects. We can use dot notation

// We will be using three methods to add new elements to an array
// End
numbers.push(5, 6);
console.log(numbers); // Prints '[3, 4, 5, 6]'

// Beginning
numbers.unshift(1, 2);
console.log(numbers); // Prints '[1, 2, 3, 4, 5, 6]'

// Middle
numbers.splice(2, 0, 'a','b'); // Adds "a" and "b" at index 2 (0 is count to be deleted)
console.log(numbers);