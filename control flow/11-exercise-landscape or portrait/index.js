
console.log(`Should be true:`,isLandscape(800,600));
console.log(`Should be false:`,isLandscape(300,600));

//returns true if width is greater than the height
function isLandscape(width, height) {
    // return (width > height) ? true : false;
    return (width > height); // Same as above line
}