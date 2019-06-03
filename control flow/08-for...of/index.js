// For-Of Loop

const colors = ['red', 'green', 'blue'];

for (let color of colors)
    console.log(color);

// Versus a For-in Loop
// Where we have to use bracket notation to call on the specific values in the array by index
for (let color in colors)
    console.log(color, colors[color]);
