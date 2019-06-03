
let i = 0;
while (i <= 10) {
    // if (i === 5) break; // Breaks out of the loop if i is equal to 5

    // This only allows the loop to print odd numbers
    if (i % 2 === 0) {
        i++;
        continue; // Jumps to the beginning of the iteration
    }
    console.log(i);
    i++;
}

// Break: breaks out of a loop
// Continue: jumps to the next iteration