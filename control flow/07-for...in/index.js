
// For-in loop
// Used to iterate over the properties of an object.

const person = {
    name: 'Ransford',
    age: 28
};

for (let key in person)
    console.log(key, person[key]);

// Dot notation
person.name;

// Bracket Notation
person['name'];

const colors = ['red','green','blue'];
for(let index in colors)
console.log(index, colors[index]);