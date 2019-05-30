console.log('Hello World'); //Statement: Statements should be ended with a ;

//==================================================
// Variables
//==================================================
let name ='Ransford';
console.log(name);

// Variable names cannot be reserved keywords
// Variables should be meaningful, they should describe what the variable is doing
// Cannot start with a number
// Cannot contain a space or hyphen (' ' or '-')
// Variables are case sensitive

let firstName = 'Ransford'; //camelCased
let lastName = 'Walker';


//==================================================
// Constants
//==================================================


const constantInterestRate = 0.3; // const variables cannot be reassigned as they are "constant"
let variableInterestRate = 1; // let variables can be reassigned as needed and are not constants

console.log("Constant Rate: ",constantInterestRate);
console.log("Initial Rate: ",variableInterestRate);
variableInterestRate = '.07';
console.log("Adjusted Rate: ",variableInterestRate);


//==================================================
// Primitive Types
//==================================================

// string, number, boolean, undefined, null

let newName = 'Ransford'; // string literal
let age = 27; // number literal
let isApproved = true; // boolean literal (true or false)
let newFirstName = undefined;
let selectedColor = null;
