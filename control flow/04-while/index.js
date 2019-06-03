
console.log('Call \'whileLoop(i)\' in the console.');
let i = 0;

function whileLoop(i) {

    while (i <= 5) {
        if (i % 2 !== 0) console.log(i);
        i++;
    }
}