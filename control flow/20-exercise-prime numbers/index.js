
// Write a function that takes in a limit and prints all the
// prime numbers up to that limit to the console.

showPrimes(16);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++)
        if (determineIfIsPrime(number)) console.log(number);
}

function determineIfIsPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0)
            return false;
            
        return true;
    }
}