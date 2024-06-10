function minPlanesToReachLastAirport(fuel) {
	const n = fuel.length;
	let planesNeeded = 0;
	let currentFuel = fuel[0];
	let i = 0;

	while (i < n - 1) {
		planesNeeded++;
		let maxReach = i;
		let nextFuel = 0;

		// Checking the range we can reach with the current fuel
		for (let j = i + 1; j <= i + currentFuel && j < n; j++) {
			if (j === n - 1) {
				return planesNeeded; // Reached the last airport
			}
			if (fuel[j] + j > nextFuel) {
				nextFuel = fuel[j] + j;
				maxReach = j;
			}
		}

		if (maxReach === i) {
			return -1; // Cannot reach the last airport
		}

		currentFuel = nextFuel - maxReach;
		i = maxReach;
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
