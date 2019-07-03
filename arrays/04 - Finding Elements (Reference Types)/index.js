
// An array of course objects
const courses = [
    {id: 1, name: 'Math'},
    {id: 2, name: 'Science'},
    {id: 3, name: 'History'}
]

// When checking a reference type, it checks thr reference, not the value
console.log(courses.includes({id: 1, name: 'Math'})); // returns false even thoygh the values are in the array

const course = courses.find(function(course){ // predicate or callback function
    return course.name == 'Math'
}) // returns the desired object

const courseIndex = courses.findIndex(function(course){ // predicate or callback function
    return course.name == 'Math'
}) // returns the index of the desired object

console.log(course);
console.log(courseIndex);