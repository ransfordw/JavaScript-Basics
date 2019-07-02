
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

// Mosh's version

let priceRanges = [
    {label: '$', tootTip: 'Inexpensive', minPerPerson: 0, maxPerPerson:10 },
    {label: '$$', tootTip: 'Moderate', minPerPerson: 11, maxPerPerson:20 },
    {label: '$$$', tootTip: 'Expensive', minPerPerson: 21, maxPerPerson:50 }
];

let restaurants = [
    {averagePerPerson: 5}
]