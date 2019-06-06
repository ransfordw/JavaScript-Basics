
// We use the 'const' keyword which means we can't reassign 
// the circle object but we can modify the existing one
const circle = {
    radius: 1
};
// At this point, the circle object only has one property of radius defined
// but js obj are dynamic, we can add a 'color' property
circle.color = 'yellow';
// or a 'draw' function
circle.draw = function(){};

delete circle.color; // deletes the color property

console.log(circle);