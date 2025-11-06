import {readLines} from "../../shared/read-lines.mjs";

console.log("everybody.codex ~~ Quest X ~~");
console.time();

const file = "test.txt";
// const file = "input.txt";

const lines = await readLines(file);
for(let line of lines){
    console.log(line);
}


console.timeEnd();
