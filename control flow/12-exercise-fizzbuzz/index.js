
// Write a function the prints out Fizz for numbers divisible by 3, 
// Buzz for numbers divisible by 5, 
// FizzBuzz for numbers divisible by 3 and 5, 
// or the number if not divisible by 3 or 5
// If a non-number is passed, print "Not a Number"

//const output = fizzBuzz(15);
//console.log(output);

for (let i = 0; i < 25; i++)
    console.log(fizzBuzz(i));

console.log(fizzBuzz('hello'));

function fizzBuzz(input) {

    if (typeof input != 'number')
        return NaN;

    else if (input === 0 || (input % 3 != 0 && input % 5 != 0))
        return input;

    else if (input % 5 == 0 && input % 3 == 0)
        return 'FizzBuzz';

    else if (input % 3 == 0)
        return 'Fizz';

    else if (input % 5 == 0)
        return 'Buzz';
}