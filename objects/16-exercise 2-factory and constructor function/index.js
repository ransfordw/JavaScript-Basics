
let address = createAddress('a','b','c');
let address2 = new Address('a2','b2','c2');

// Factory Function
function createAddress(street, city, zipCode){
    return {
        // street:street, same as below
        street,
        city,
        zipCode
    };
}

console.log(address);
console.log(address2);

// Constructor Function
function Address(street, city, zipCode){
    this.street = street,
    this.city = city,
    this.zipCode
}
