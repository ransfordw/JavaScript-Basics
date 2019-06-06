
// Objects are collections of key:value pairs

// Lets say we are building an application for building different kinds of shapes

// Circle parameters
let radius = 1;
let x = 1;
let y = 1;

// or...

// Example of OOP
// If a function is a part of an object, it is called a method
const circle = { // Object literal syntax
    radius: 1,
    location: { // an additional object inside the parent
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    },
    move: function () {
        console.log('move');
    }
};
function draw() { }
function move() { }
