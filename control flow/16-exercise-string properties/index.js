
// Create a function called showProperties that takes in
// an object and shows all properties that are of type string.

const bird = {
    numberOfEggs: 3,
    isBanded: false,
    commonName: 'American Robin',
    latinName: 'Turdas migratorius',
    sciOrder: 'Passeriformes'
};

showProperties(bird);

function showProperties(obj) {
    for (let key in obj) {
        if(typeof obj[key] ==='string')
        console.log(key, obj[key]);
    }
}