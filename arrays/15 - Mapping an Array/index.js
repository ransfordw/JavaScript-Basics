const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n })); // this line is line 
    // 13 w/o the filtered constant

// Maps each element in an array to something else.
// const items = filtered.map(n => '<li>' + n + '</li>');

// const html = '<ul>' + items.join('') +'</ul>';

// const items = filtered.map(n =>({value: n})); 
// for single line, fat arrow callback functions,
// '{}' denote code blocks, not objects. To pass an object,
// we must enclose it in parens as well '({object stuff})'

console.log(items);