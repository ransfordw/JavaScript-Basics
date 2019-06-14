
// Create an address object with three properties
// street
// city
// zip code
// showAddress(address) that shows the address

let address = {
    street: "12175 Visionary Way",
    city: "Fishers",
    zipCode: 46038,
    showAddress(address) {
        console.log(`${this.street}, ${this.city}, ${this.zipCode}`)
    }
}