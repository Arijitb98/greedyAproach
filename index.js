function minPlanesToReachLastAirport(airports) {
    const n = airports.length;
    let planesNeeded = 0;
    let currentFuel = airports[0];
    let i = 0;

    while (i < n - 1) {
        planesNeeded++;
        let maxReach = i;
        let nextFuel = 0;

        // Check the range we can reach with the current fuel
        for (let j = i + 1; j <= i + currentFuel && j < n; j++) {
            if (j === n - 1) {
                return planesNeeded; // Reached the end
            }
            if (airports[j] + j > nextFuel) {
                nextFuel = airports[j] + j;
                maxReach = j;
            }
        }

        if (maxReach === i) {
            return -1; // If we cannot move forward, return -1
        }

        currentFuel = nextFuel - maxReach;
        i = maxReach;
    }

    return planesNeeded;
}

function getInputFromUser() {
    const input = prompt("Enter the units of fuel available at each airport (separated by commas):");
    const airports = input.split(",").map(Number);
    return airports;
}

const airports = getInputFromUser();
const result = minPlanesToReachLastAirport(airports);

if (result === -1) {
    console.log("It is not possible to reach the last airport.");
} else {
    console.log(`The minimum number of planes needed to reach the last airport is: ${result}`);
}
