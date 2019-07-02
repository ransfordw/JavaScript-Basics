
// Create a series of Price Range Objects
class PriceRangeObject {
    constructor(rangeIndex) {
        this.message = createMessage(rangeIndex),
            this.rangeIndex = rangeIndex;
    }
}

function createMessage(rangeIndex) {
    let message = '';
    if (rangeIndex > 3) return 'Not a valid range'
    else {
        for (let i = 1; i <= rangeIndex; i++)
            message += '$'
        return message
    }
}

let price1 = new PriceRangeObject(1);
let price2 = new PriceRangeObject(2);
let price3 = new PriceRangeObject(3);

console.log(price1.message);
console.log(price2.message);
console.log(price3.message);