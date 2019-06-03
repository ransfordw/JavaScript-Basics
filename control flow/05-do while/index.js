// Do While
// Slightly different than While Loops
// Do While loops always execute at least once, even if the validating condition is false

let i = 33;

do {
    if (i % 2 !== 0) console.log(i);
    i++;
    console.log(i); // prints after 'i' has incremented
} while (i <= 5)
