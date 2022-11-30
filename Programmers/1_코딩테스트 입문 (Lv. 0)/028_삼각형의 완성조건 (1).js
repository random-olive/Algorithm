function solution(sides) {
  const [longest, ...rest] = sides.sort((a, b) => b - a);
  return longest < [...rest].reduce((acc, cur) => acc + cur) ? 1 : 2;
}

//Try Again !
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

let solution = ([a, b, c]) => (a < b + c && b < a + c && c < a + b ? 1 : 2);
