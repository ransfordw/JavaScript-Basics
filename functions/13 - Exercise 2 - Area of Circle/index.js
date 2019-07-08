
// create circle object
// object literal syntax
// circle.radius = 2;
// circle.area should be readonly

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area);