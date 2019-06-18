
class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;
// Constructor Function 
// function Address(street, city, zip) {
//     this.street = street,
//     this.city = city,
//     this.zip = zip
// }

// If the objects have the same properties
function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zip === address2.zip;
}

// If the parameters are accessing the same instance of the objects
function areSame(address1, address2) {
    return address1 === address2;
}

console.log(address1);
console.log('Should be true: ',areEqual(address1,address2));
console.log('Should be false: ',areSame(address1,address2));
console.log('Should be true: ',areSame(address1,address3));

