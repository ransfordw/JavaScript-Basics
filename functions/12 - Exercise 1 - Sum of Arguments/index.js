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

function moshSum(...items){
    if(items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a,b) => a+b);
}

console.log(moshSum([1,2,3,4,5]));
console.log(moshSum(1,2,3,4,5));