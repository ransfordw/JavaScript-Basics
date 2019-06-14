
// Create an address object with three properties
// street
// city
// zip code
// showAddress(address) that shows the address

console.log(`Enter: "showAddress"()\n
and pass in "address" as a parameter.`);

let address = {
    street: "12175 Visionary Way",
    city: "Fishers",
    zipCode: 46038,
};

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}