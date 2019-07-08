
// every param after a defaulted param should also have a default value
function cacluateTotalInterest(principal, rate = 3.5, years = 5) {
    //rate = rate || 3.5;
    //years= years || 5;
    return principal * rate / 100 * years;
}

console.log(cacluateTotalInterest(10000, 2));