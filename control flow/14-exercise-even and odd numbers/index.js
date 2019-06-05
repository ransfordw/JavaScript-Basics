
// Write a function called show numbers that takes a number.
// Take a param called limit
// Print every number up to the limit from zero 
// AND whether or not it is odd/even

showNumbers(10);

function showNumbers(limit) {
    let evenOddMessage;
    for (let i = 0; i <= limit; i++) {
        i % 2 === 0 ? evenOddMessage = 'EVEN' : evenOddMessage = 'ODD';
        console.log(i, evenOddMessage);
    }
}

// Mosh's Way

function showNumbersByMosh(limit) {
    for (let i = o; i <= limit; i++) {
        const message = (i % 2 === 0)? 'EVEN':'ODD';
        console.log(i,message);
    }
}