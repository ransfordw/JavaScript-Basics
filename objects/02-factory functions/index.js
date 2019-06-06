
// If we have logic in our objects
// we will want to use factory or constructor functions


// Factory Function
function createCircle(radius){
    return {
        radius, // === 'radius: radius,'
        
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(2);
console.log(circle2);