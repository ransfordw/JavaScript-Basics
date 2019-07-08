const numbers = [1, 2, 3, 4, 1, 1, 3];

const count = countOccurences(numbers, 1);
const countTwo = countOccurencesTwo(numbers, 1);

//console.log(count);
console.log(countTwo);


function countOccurences(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;
}

function countOccurencesTwo(array, searchElement) {
    return array
        .reduce((accumulator, current) => {
            const occurence = (current === searchElement) ? 1 : 0;
           // console.log(accumulator, current, searchElement);
            return accumulator + occurence;
        }, 0);
}