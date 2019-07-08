var color = 'yellow';
let age = 30;


function start() {
    // var is not limited to the loop
    for (var i = 0; i < 5; i++){ // if let is switched to var, i will print as 5 in a later console.log
     if(true){
         let newColor = 'red';
     }
        console.log(i);
    }
    console.log(i);
    console.log(newColor);
}

// var => function scoped variables
// ES6 (ES2015): let, const => block-scoped variables
start();