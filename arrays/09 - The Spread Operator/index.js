
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];
// when we spread an array, all of its elements 
// are returned individually

const copy = [...combined]; // returns all the elements of the combined array into this new array.

