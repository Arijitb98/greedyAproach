Given an array of integers where each element represents the units of fuel available at each airport in a sequence, write a function minPlanesToReachLastAirport that determines the minimum number of planes required to reach the last airport.

For example:
fuel = [2, 3, 1, 1, 4]

Here, starting at the first airport, you have 2 units of fuel.
You can reach up to 2 airports ahead (index 1 or index 2).
From each subsequent airport, use the available fuel units to reach further airports.

Tasks:
Implement the function minPlanesToReachLastAirport(fuel) that returns the minimum number of planes needed to reach the last airport or -1 if it is not possible.
Implement the function getInputFromUser to take user input as a string of comma-separated integers representing fuel at each airport.
Explain how the algorithm handles the given example and edge cases, such as when fuel units are all zeroes.

Constraints:
The input array will always have at least one airport.
The fuel values are non-negative integers.

Test Cases:
Input: [2, 3, 1, 1, 4] -> Output: 2
Input: [1, 0, 0, 0] -> Output: -1 (Cannot reach the last airport)


----------------------------------------------------------------------------


Based on the fuel at each airport, this code effectively determines the minimal number of planes required to reach the end airport.

1.minPlanesToReachLastAirport:

This function takes as input an array of "airports" representing the fuel units available at each airport.
n: total number of airports (length of airport pool).
planesNeeded: This variable stores the number of planes needed to reach the latest airport.
currentFuel: This variable indicates the amount of fuel available at the current airport.
i: This variable stores the current airport index.

The function then enters a while loop that continues until i is less than n - 1, which means there are more airports to visit.

Inside the loop:

Increment planesNeeded by 1 to account for hiring a plane at the current airport.
Initialize maxReach to i, which represents the farthest airport we can reach with the current fuel.
Initialize nextFuel to 0, which keeps the maximum distance to the next possible airports.
A nested for loop is used to check the range of airports we can reach with the current fuel. This repeats from i + 1 to i + currentFuel or until the end of the airports array, whichever comes first.
When the loop reaches the last airport (j === n - 1), it returns the planesNeeded because we reached the last airport.
Otherwise, it checks if the fuel available at the next airport plus its index is greater than nextFuel. If so, it will update nextFuel and maxReach respectively.

After the nested loop, if maxReach still equals i, it means we can't move forward with the current fuel, so the function returns -1.
Otherwise, it updates the current fuel based on the furthest reachable airport and updates i to maxReach.
The loop continues until all airports have been visited.
Finally, the function returns planesNeeded, which represents the minimum number of planes needed to reach the final airport.

2.getInputFromUser:

This function asks the user to enter the fuel units available at each airport (separated by commas).
It separates the input string with commas and converts each value to number using the map(Number).
This returns an array representing the fuel units for each airport.

3.Getting user inputs and calling functions:

It calls the getInputFromUser function to get the fuel units for each airport.
It then calls minPlanesToReachLastAirport with the obtained array.
If the result is -1, it logs a message that the last airport is unreachable. Otherwise, it records the minimum number of aircraft required.
