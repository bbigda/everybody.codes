import Parallel from "paralleljs";

// Define a heavy computing task, for example, calculating factorial
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function add(d) {
    return d[0] + d[1];
}

// Array of numbers for which we want to calculate factorial
const numbers = [5, 7, 8, 10, 12, 15, 20];

// Create a new Parallel instance with the array
const p = new Parallel(numbers);

// // Map the factorial function over the array
p.map(factorial).reduce(add).then(console.log)
