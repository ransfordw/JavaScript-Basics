// Built in Object: Date

const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018,4,11,9); // (years, month (jan = 0, feb = 1, etc), day, hours, minutes, seconds)

now.setFullYear(2019);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());