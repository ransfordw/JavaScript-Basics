
// Imagine you want to repeat 'Hello World' five times
// You could console.log('Hello World') 5 times or use a loop

for (let i = 0; i < 5; i++) {
    console.log('Hello World', i);
}

// Prints odd numbers from 1 - 5
for (let i = 1; i <= 5; i++) {
    if (i % 2 !== 0) console.log(i);
}

// We can do this in reverse order as well
for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
}