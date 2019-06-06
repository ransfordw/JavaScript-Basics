// Factory Functions are camelCased
// Constructor Functions are PascalCased

// Factory Function
function createCircle(radius) {
    return {
        radius, // === 'radius: radius,'

        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);

// Constructor Function (will construct an object)
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
    // 'return this;' happens inherantly under the hood
}

const circle = new Circle(1); // new operator creates a new empty object

// ===================================================
// Code refactor suggestion:
// ===================================================
class CircleRefactorExample {
    constructor(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log('draw');
        };
    }
}
