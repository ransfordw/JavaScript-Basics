
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 3));
console.log(includes(numbers, 6));

function includes(array, searchElement) {
    for (let element of array) 
        if (element === searchElement)
            return true;
        return false;
    
}