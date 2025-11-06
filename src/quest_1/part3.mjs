import {readLines} from "../../shared/read-lines.mjs";
import {blue, brightGreen, brightRed, green} from "../../shared/red.mjs";

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log("2024 Day X Part 1");
console.time();

const file = "input3.txt";
// const file = "test.txt";

const lines = await readLines(file);

const names = lines[0].split(',');
const moves = lines[2].split(',');

console.dir(names);
console.dir(moves);


let pointer = 0;

console.log('start', names[pointer], pointer);

for (let move of moves) {
    const direction = move.split('')[0];
    const steps = Number(move.slice(1));
    console.log(green(direction), blue(steps));

    let target = 0;

    if (direction === "R") {
        target = (target + steps) % (names.length);
    } else {
        target = (target - steps) % (names.length);
        if (target < 0) {
            target = target + names.length;
        }
    }

    console.log(brightRed(target));

    swap(names, 0, target);
    console.log(names);

}

console.log(brightGreen(names[0]));

console.timeEnd();
