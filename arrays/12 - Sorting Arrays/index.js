
const numbers = [2, 3, 1];

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// The above work well with primatives but not references

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
]

courses.sort((first, second) => {
    const nameOne = first.name.toUpperCase();
    const nameTwo = second.name.toUpperCase();
    if (nameOne < nameTwo) return -1;
    if (nameOne > nameTwo) return 1;
    return 0;
});

console.log(courses);