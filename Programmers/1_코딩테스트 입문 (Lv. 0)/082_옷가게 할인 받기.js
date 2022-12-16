function solution(price) {
  return ~~(price >= 5e5 ? price * 0.8 : price >= 3e5 ? price * 0.9 : price >= 1e5 ? price * 0.95 : price);
}

//Try Again !
function solution(price) {
    return ~~(price *[1, 0.95, 0.95, 0.9, 0.9, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8][~~(price / 100000)]);
}

/** TIL
 * 🥲 반성
 * 전체 ~~
 * 100000을 1e5나 100_000로 나타낼 수 있다.
 */