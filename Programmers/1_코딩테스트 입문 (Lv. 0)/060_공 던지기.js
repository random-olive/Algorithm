function solution(numbers, k) {
    let i = k % numbers.length === 0 ? ~~((2 * k) / numbers.length) - 1 : ~~((2 * k) / numbers.length);
    return numbers.length < 2 * k ? numbers[2 * (k - 1) - numbers.length * i] : numbers[2 * (k - 1)];
}

//Fixed !
function solution(numbers, k) {
  return (2 * k - 1) % numbers.length;
}

//Try Again !
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}

function solution(numbers, k) {
  const [idx, len] = [2 * k - 1, numbers.length];
  return idx >= len ? idx % len : idx;
}

/** TIL
 * 🥲 반성
 * -- : Decrement  => k = 3, k-- : 감소시킴, --k : 2
 * % : Reminder  => 몫, 나머지를 모두 표현 가능
 * formulate
 */
