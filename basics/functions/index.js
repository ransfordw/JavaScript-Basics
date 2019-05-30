// function keyword declares the function
// In this case 'greet' is the name of the function

// Performing a task
function greet(name, lastName) { // Inside the curly boys is the body of the function
    console.log(`Hello ${name} ${lastName}`);
}

greet('Ransford', 'Walker');
greet('Kenn', 'Pascasio');
greet('Tom', 'McClellan');

//===================================
// Types of Functions
//===================================

// Performing a task (see above)

// Calculating a value
function square(number){
    return number * number;
}

let numberSquare = square(2); // calculates the square value of two and sets it as the value for a variable

console.log(square(2)); // two function calls here: 1. console.log() and square()

