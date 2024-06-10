function minPlanesToReachLastAirport(fuel) {
    const n = fuel.length;
    let planesNeeded = 0;
    let currentFuel = fuel[0];
    let i = 0;
    let maxReach = 0;
    let nextMaxReach = 0;

    for (i = 0; i < n - 1; i++) {
        nextMaxReach = Math.max(nextMaxReach, i + fuel[i]);

        if (i === maxReach) {
            planesNeeded++;
            maxReach = nextMaxReach;
            if (maxReach >= n - 1) {
                return planesNeeded; // Reached the last airport
            }
        }

        if (i >= maxReach) {
            return -1; // Cannot reach the last airport
        }
    }

    return planesNeeded;
}

function getInputFromUser() {
    const input = prompt("Enter the units of fuel available at each airport (separated by commas):");
    const fuel = input.split(",").map(Number);
    return fuel;
}

const fuel = getInputFromUser();
const result = minPlanesToReachLastAirport(fuel);

if (result === -1) {
    console.log("It is not possible to reach the last airport.");
} else {
    console.log(`The minimum number of planes needed to reach the last airport is: ${result}`);
}
