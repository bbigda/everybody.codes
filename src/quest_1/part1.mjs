import {readLines} from "../../shared/read-lines.mjs";
import {blue, brightRed, green, red} from "../../shared/red.mjs";

console.log("2024 Day X Part 1");
console.time();

const file = "input.txt";
// const file = "test.txt";

const lines = await readLines(file);

const names = lines[0].split(',');

console.dir(names);

const moves = lines[2].split(',');

console.dir(moves);

let pointer = 0;

const max = names.length - 1;

console.log(max);

for(let move of moves){
    const direction = move.split('')[0];
    const steps = Number(move.split('')[1]);
    console.log(green(direction), blue(steps));

    if(direction === "R"){
      pointer = pointer + steps;
      if(pointer >= max){
          pointer = max;
      }
    } else {
        pointer = pointer - steps;
        if(pointer <= 0){
            pointer = 0;
        }
    }

    console.log(red(pointer));
    console.log(brightRed(names[pointer]));
}





console.timeEnd();
