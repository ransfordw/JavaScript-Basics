
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


//const another = {};
// for (let key in circle)
//     another[key] = circle[key];

const another = Object.assign({
    color: 'yellow' // this adds a new property to the returned object and copies the properties of the other object as well.
}, circle); // takes all the properties of the circle onject and copies them into the new object.

const newCircle = {...circle}; // a more efficient way to clone an object


console.log(another);
console.log(circle);