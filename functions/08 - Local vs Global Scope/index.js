
const color = 'red'; // global scope, accesible everywhere in the file

function start() {
    const message = 'hi'; // local scope, only accesible in this code block
    const color = 'blue';

    console.log(color);
    if (true) {
        const another = 'bye';
    }
    for (let i = 0; i < 5; i++)
        console.log(i);
    console.log(i);
}
function stop() {
    const message = 'bye';
}

start();