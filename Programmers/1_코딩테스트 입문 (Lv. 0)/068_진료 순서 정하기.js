function solution(emergency) {
    let chart = {};
    emergency.slice().sort((a, b) => b - a).map((el, i) => (chart[el] = i + 1));
    return emergency.map((el) => chart[el]);
}

//Try Again !
function solution(emergency) {
  return emergency.map((el) => [...emergency].sort((a, b) => b - a).indexOf(el) + 1);
}

/** TIL
 * 🥲 반성
 * spread도 slice처럼 임의 배열 생성에 쓰임
 * index를 찾는 것은 따로 data를 생성하지 않고 indexOf 활용
 */