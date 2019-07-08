// sum(1,2,3,4) => 10
// challenge: have sum([]) and return result
Array.isArray([]); // returns true
Array.isArray({}); // returns false

function sum(...values) {
    let total = 0;
    for (let value of values)
        total += value;
    return total;
}

console.log(sum(1, 2, 3, 4));

function sumOfArray(values) {
    if (!Array.isArray(values))
        throw new Error('Please enter an array.')
    return values.reduce((a, b) => a + b);
}

try {
    console.log(sumOfArray([1, 2, 3, 4]));
    //console.log(sumOfArray('Hellow World'));
}
catch (e) {
    alert(e);
}