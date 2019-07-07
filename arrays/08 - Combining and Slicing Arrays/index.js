
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 4); // starts at index 2 and ends at 4
// const slice = combined.slice(2); // Starts at 2 and gets the rest 
// const slice = combined.slice(); // copies the original array

console.log(slice);

// when using concat with reference types, it copies the reference, not the actual object.
// so if a reference type is altered, it is altered everywhere.