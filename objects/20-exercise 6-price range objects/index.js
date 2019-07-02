
// Create a series of Price Range Objects
class PriceRangeObject {
    constructor(rangeIndex, toolTip, minCostPerPerson, maxCostPerPerson) {
        this.message = createMessage(rangeIndex),
            this.rangeIndex = rangeIndex,
            this.toolTip = toolTip,
            this.minCostPerPerson = minCostPerPerson,
            this.maxCostPerPerson = maxCostPerPerson
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

let price1 = new PriceRangeObject(1, 'Inexpensive', 1, 10);
let price2 = new PriceRangeObject(2, 'Moderate', 11, 20);
let price3 = new PriceRangeObject(3, 'Expensive', 21, 50);

console.log(price1);
console.log(price2);
console.log(price3);

// Mosh's version

let priceRanges = [
    {label: '$', tootTip: 'Inexpensive', minPerPerson: 0, maxPerPerson:10 },
    {label: '$$', tootTip: 'Moderate', minPerPerson: 11, maxPerPerson:20 },
    {label: '$$$', tootTip: 'Expensive', minPerPerson: 21, maxPerPerson:50 }
];

let restaurants = [
    {averagePerPerson: 5}
]