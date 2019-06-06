
// Write a function that prints the number of stars that 
// corresponds to the given value incrementing up from 1
// the limit. There should be a row for each value.
showStars(5);

function showStars(limit) {
    let stars = '*';
    for (let i = 1; i <= limit; i++) {
        console.log(stars);
        stars += '*';
    }
}