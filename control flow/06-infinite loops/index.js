let i = 0;
while (i < 5) {
    console.log(i);
    // without the following line, we create an infinite loop and crash the browser
    // i++;
}

while (true) {
    console.log('Runs forever');
}

// Unreachable code because the abouve loop will never stop
do {
console.log('Will always run');
} while (i < 5)

for (let i = 0; i <10; i) console.log('This will never stop running');