
// Falsy (not a boolean false)
// undefined
// null
// 0
// false
// ''
// Nan (not a number)

// Truthy Values (not a boolean true)
// Anything that is not falsy

// Short-circuiting i.e. 'false || 1 || 2' would print 1

let userColor = 'red';
// let userColor = ''; // if you uncomment this line, the log will print blue instead of red.
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);