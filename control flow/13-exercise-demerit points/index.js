
//Speed Limit = 70
//If someone is at or under the speed limit, print ok
// for every 5 above limit => 1 point
// if points > 12 isSuspended = true;
Math.floor(1.3); // converts to greatest integer.
let mySpeed = 80;

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed > speedLimit) {
        const points = (speed - speedLimit) / kmPerPoint;
        return Math.floor(points);
    }
    else
        console.log('Speed Ok');
}

function getLicenseStatus(points) {
    const pointsForSuspension = 12;
    return points > pointsForSuspension;
}

function logSpeedInfo(speed) {

    console.log('License Suspended: ', getLicenseStatus(checkSpeed(mySpeed)), '\nTotal Points: ', checkSpeed(mySpeed));
}