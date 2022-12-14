function solution(hp) {
    let answer = 0;
    [5, 3, 1].map((el) => { answer += ~~(hp / el); hp = hp % el});
    return answer;
  }

//Try Again !
function solution(hp) {
  return ~~(hp / 5) + ~~((hp % 5) / 3) + ((hp % 5) % 3);
}
