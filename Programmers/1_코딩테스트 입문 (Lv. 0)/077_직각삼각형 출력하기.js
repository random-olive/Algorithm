// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// let answer = [];

// rl.on('line', function (line) {
//   input = line.split(' ');
//   answer = Array.from(Array(+input[0]), (_, i) => '*'.repeat(i + 1));
// }).on('close', function () {
//   answer.map((el) => console.log(el));
// });

//Try Again !
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  for (let i = 1; i <= +input[0]; i++) {
    console.log('*'.repeat(i));
  }
});

/** TIL
 * 🥲 반성
 * readline 핵심은 console.log만 잘 하면 되는 것 -> 굳이 data 자료를 만들 필요 x
 */