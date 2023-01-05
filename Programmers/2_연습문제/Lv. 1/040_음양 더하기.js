function solution(absolutes, signs) {
  let result = 0;
  signs.forEach((el, i) => (result += absolutes[i] * (el ? 1 : -1)));
  return result;
}

//Fixed !
function solution(absolutes, signs) {
  return signs.reduce((a, c, i) => (a += c ? absolutes[i] : -absolutes[i]), 0);
}

//Another !
function solution(absolutes, signs) {
  return signs.reduce((a, c, i) => (c ? (a += absolutes[i]) : (a -= absolutes[i])), 0);
}

function solution(absolutes, signs) {
  return absolutes.reduce((a, c, i) => a + c * (signs[i] ? 1 : -1), 0);
}

/** TIL
 * 성능 : map > filter == forEach > reduce > for loop
 */
