// Logical Operators

// Logical And: &&
// Returns true if both operands are true
console.log(true && true); // prints true
console.log(true && false); // prints false

// Example
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(`Eligible for loan: ${eligibleForLoan}`);

// Logical Or (||)
// Returns true as long as one operand is true.
let isFriendly = false;
let isDog = true;
let isGoodPet = isFriendly || isDog; // Even though the dog is not friendly, it is still a good pet.

// Not(!)
let applicationRefused = !eligibleForLoan; // ! converts something to the opposite.
console.log(`Eligible for loan: ${eligibleForLoan}`);
console.log(`Application refused: ${applicationRefused}`);



