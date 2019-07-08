
const numbers = [1, 2, 3, 4, 34];

// const max = getMax(numbers);
const maxUsingReduce = getMaxUsingReduce(numbers);

// console.log(max);
console.log(maxUsingReduce);

function getMax(array) {
    if (array.length === 0) return undefined;
    const sorted = array
        .sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    return sorted.pop();
}

function getMaxByMosh(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];
    return max;
}

function getMaxUsingReduce(array) {
   return array.reduce((a, b) => (a > b) ? a : b);
}