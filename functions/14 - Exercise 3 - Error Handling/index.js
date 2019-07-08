

const numbers = [1, 2, 3, 4];

try {
    const count = countOccurences(null, 1);
    console.log(count);
}
catch (e) {
    alert(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Please pass in an array.')
    return array.reduce((accumulator, currentValue) => {
        const occurence = (currentValue == searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}