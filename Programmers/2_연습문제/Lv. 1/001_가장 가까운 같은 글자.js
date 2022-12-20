function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    let check = s.slice(0, i);
    check.includes(s[i])
      ? answer.push(i - check.lastIndexOf(s[i]))
      : answer.push(-1);
  }

  return answer;
}

//Fixed !
function solution(s) {
  return [...s].map((el, i) => {
    const count = s.slice(0, i).lastIndexOf(el);
    return count < 0 ? count : i - count;
  });
}

const solution = (s) =>
  [...s].map((el, i) => {
    const count = s.slice(0, i).lastIndexOf(el);
    return count < 0 ? count : i - count;
  });

//Try Again !
function solution(s) {
  const hash = {};

  return [...s].map((el, i) => {
    let result = hash[el] === undefined ? -1 : i - hash[el];
    hash[el] = i;
    return result;
  });
}

/** TIL
 * 🥲 반성
 * map(() => { return .. });
 * index 활용
 */
