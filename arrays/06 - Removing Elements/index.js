
const numbers = [1, 2, 3, 4, 5, 6, 7];

// End
//numbers.push(); // add to end
const last = numbers.pop(); //removes last
console.log(numbers);

// Beginning
//numbers.unshift(); // add to the beginning
const beginning = numbers.shift(); // removes first
console.log(numbers);

// Middle
//numbers.splice(); // add to the middle
const middle = numbers.splice(2, 1);
console.log(numbers)