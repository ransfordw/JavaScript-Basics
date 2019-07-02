
const numbers = [1, 2, 3, 1, 4];

// .indexOf(param) returns the index of a given param in
// an array. 
// If the param does not exist in the array, it returns -1
console.log(numbers.indexOf('a')); // -1
console.log(numbers.indexOf(1)); // 0
console.log(numbers.indexOf(2)); // 1
console.log(numbers.indexOf('3')); // -1

// .lastIndexOf returns the last index a value is found at
// or -1 if not found
console.log(numbers.lastIndexOf(1)); // 3

// The following returns true if 1 exists in the array
console.log(numbers.indexOf(1) !== -1); 
// So does this
console.log(numbers.includes(1));

// each of these methods can take a second parameter that 
// indicates a starting index point in the array
console.log(numbers.indexOf(1,1)); // returns 3 instead of 0

