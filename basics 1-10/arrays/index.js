// Arrays are reference types that are used to contain a list of values/objects

// Initialized an empty array
let selectedColorsEmpty = [];

// Initialization with values
const selectedColors = ['red', 'blue'] // array literal
console.log(selectedColors); // Prints the entire array
console.log(selectedColors[0]); // Prints the value at index 0

let newColors = [...selectedColors];
newColors[2] = 'green';
console.log("Added green: ", newColors
);

newColors[3] = 5; // Arrays can contain any number of value types

