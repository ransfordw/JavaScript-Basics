// Each js obj inherantly has a 'constructor' property.

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(1);

let x = {};
// let x = new Object();