
const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All movies in 2018 with rating greater than 4
// Sort desc by rating
// Display should be by title

// answer should be 'b', 'a'

const movieResult = getCorrectMovies(movies);

console.log(movieResult);

function getCorrectMovies(array) {
     const titles = array
        .filter(item => item.year === 2018 && item.rating >=4)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title);
        return titles;
}