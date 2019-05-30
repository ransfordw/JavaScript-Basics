// Reference types include: Objects, Arrays, and Functions
// When dealing with multiple related variables, we can encapsulate them inside an object.

// An objcet is comprised of KVPs of a property name (key) and value (value)
let person = {
    name: "Ransford",
    age: 27
};

console.log("Person object: ", person);
// Dot notation allows access to values contained within an object
console.log("The person's name is: ", person.name);

// Bracket notation allows us to access properties in a different way but Dot notation should be te default
person['name'] = 'Ransford Walker';
console.log("The person's name is: ", person.name);

// Bracket notation allows you to select for a property key dynamically 
let userSelection = 'age';
console.log(person[userSelection])