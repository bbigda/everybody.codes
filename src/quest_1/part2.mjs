import {readLines} from "../../shared/read-lines.mjs";
import {blue, brightRed, green, red, yellow} from "../../shared/red.mjs";

console.log("2024 Day X Part 1");
console.time();

const file = "input2.txt";
// const file = "test.txt";

const lines = await readLines(file);

const names = lines[0].split(',');

console.dir(names);

const moves = lines[2].split(',');

console.dir(moves);

console.log(brightRed(names.length))

let pointer = 0;

const max = names.length - 1;

console.log(max);

console.log('start', names[pointer]);

for (let move of moves) {
    const direction = move.split('')[0];
    const steps = Number(move.slice(1));
    console.log(green(direction), blue(steps));

    if (direction === "R") {
        pointer = (pointer + steps);
        if(pointer > max){
            pointer = pointer - names.length;
        }

    } else {
        pointer = (pointer - steps);
        if (pointer < 0) {
            pointer = pointer + names.length;
        }
    }

    console.log(red(pointer));
    console.log(brightRed(names[pointer]));

}


console.timeEnd();
