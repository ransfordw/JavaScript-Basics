
const person = {
    firstName: 'Ransford',
    lastName: 'Walker',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'John Smith';

// getters access properties in an object
// setters change or mutate properties

//console.log(`${person.firstName} ${person.lastName}`);
console.log(person.fullName)