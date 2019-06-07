
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle) // with this we can iterate over all of the properties and methods of an object.
    console.log(key, circle[key]); // bracket notation returns the value for each key

//for (let key of circle) // Error: circle is not iterable (objects are not iterable)
//  console.lod(key);

// However
//for (let key of Object.keys(circle)) // ** doesn't run for me?
//  console.log(key);

// Whenever we yous object literal syntax it calls the object contructor
function Object() { }

// Additionally, all functions are objects in js, so the '.' operator can be used to call any method or property
// of an object on a function

if('radius'in circle) console.log('Yes');
if('color'in circle) console.log('Yes');

//for (let entry of Object.defineProperties(circle)) "broken?"
  //  console.log(entry);

