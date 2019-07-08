
walk(); // We can call this function before its definition

// Function Declaration
function walk() {
    console.log('walk');
}

// but we cannot call run before it is declared
run();
// Anonymous Function Expression
let run = function () { 
    console.log('run');
};

// Hoisting is the process of moving function declarations to the top of the file.