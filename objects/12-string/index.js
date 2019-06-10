
// Built in string object: String
const message = 'hi';
//message. gives access to methods an properties even though message is set to a primative type string
// In js there are two types of strings
// string primative 'string'
// string object String

const anotherMessage = new String('hi');

console.log('String primative:', typeof message);
console.log('String object:', typeof anotherMessage);

// JS String docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

const testMessage = 'This is my first message     ';
console.log(testMessage);
console.log('Length: ', testMessage.length); // returns the length of the string
console.log('Char at index 0: ', testMessage[0]); // returns the char at the specified index
console.log('String includes \'my\': ', testMessage.includes('my')); // returns boolean if the string includes the value
console.log('String starts with \'This\': ', testMessage.startsWith('This'));
console.log('String starts with \'this\': ', testMessage.startsWith('this'));
console.log('String ends with \'This\': ', testMessage.endsWith('This'));
console.log('\'my\' starts at index: ', testMessage.indexOf('my'));
console.log('Replace \'first\' with \'second\': ', testMessage.replace('first', 'second'));
console.log('First message is unmodified: ', testMessage);
console.log('Message uppercase: ', testMessage.toUpperCase());
console.log('Trimmed whitespace message: ',testMessage.trim().length);
console.log('The \'.split(\' \')\' method splits \na string by the passed in value \nand returns an array of values: ', testMessage.trim().split(' '));