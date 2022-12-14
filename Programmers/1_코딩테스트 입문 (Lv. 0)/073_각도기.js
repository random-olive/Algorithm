function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

//Try Again !
function solution(angle) {
  return [0, 90, 91, 180].filter((el) => angle >= el).length;
}

/** TIL
 * π₯² λ°μ±
 * μΌλμΌ λμ / λ³ν  => κ°μ²΄ object μ¬μ©, filter μ¬μ©
 */