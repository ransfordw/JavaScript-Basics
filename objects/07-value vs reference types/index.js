
// Value Types (primitives)     vs      Reference Types

//      Number                          Object
//      String                          Function
//      Boolean                         Array
//      Symbol
//      undefined
//      null

let x = 10; // here x and y are independent
let y = x; // the value of x is copied into y but they are still separate
x = 20;

// When we use an object, the values are stored somewhere else in memory. The variable itself
// stores the address for where those values are stored.
let a = { value: 10}; 
let b = a; // b === a

a.value = 20;

// Primitives are copied by value
// Objects are copied by reference

let number = 10;
let numberObj = {value: 10}

function increaseObj(obj){
    obj.value++;
}

function increase(someNumber){
    someNumber++;
}

increase(number);
console.log(number); // still equals 10 as the number variable in the function is scoped locally within the function

increaseObj(numberObj);
console.log(numberObj); // since we are using an object, the value itself is stored elsewhere, 
// so even though the call is scoped within the function, the data modification is saved outside of that scope