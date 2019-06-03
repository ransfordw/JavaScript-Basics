
// decimal = bitwise
// 1 = 00000001 
// 2 = 00000010
// R = 00000011 result is 3

// BitWise operators function simmilarly to logical operators except they operate on the individual bits

console.log(1 | 2); // Bitwise OR


console.log(1 & 2); // Bitwise AND
// 1 = 00000001 
// 2 = 00000010
// R = 00000000 result is 0 because the bit locations are never alligned.

// An Example
// User can have Read, Write, Execute
// 00000100 // Read
// 00000110 // Read and Write
// 00000111 // Read, Write, Execute

const readPermission = 4;   // 000000100
const writePermission = 2;  // 000000010
const executePermission = 1;// 000000001
let myPermission = 0;

// With BitWise Or we can add permisions
// With BitWise And we can check permisions

myPermission = myPermission  | writePermission;
console.log(`My Permission: ${myPermission}`);

let message = (myPermission & readPermission) ? 'yes':'no';
console.log(message);

