function solution(sides) {
  let answer = [];
  sides = sides.sort((a, b) => a - b);

  for (let i = 1; i < sides[0] + sides[1]; i++) {
    if (i + sides[0] > sides[1] || (i > sides[1] && i > sides[0] + sides[1])) {
      answer.push(i);
    }
  }
  return answer.length;
}

//Try Again !
function solution(sides) {
  return 2 * Math.min(...sides) - 1;
}

function solution(sides) {
  sides.sort((a, b) => a - b);
  return 2 * sides[0] - 1;
}
