function solution(price, money, count) {
  let result = (count * (count + 1) * price) / 2 - money;
  return result <= 0 ? 0 : result;
}

//Try Again !
const solution = (..._) => Math.max((_[0] * _[2] * ++_[2]) / 2 - _[1], 0);

//
function solution(p, m, c, r = (p * c * ++c) / 2 - m) {
  return Math.max(r, 0);
}

//slow
function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }

  return money >= 0 ? 0 : Math.abs(money);
}

//slower
function solution(price, money, count) {
  const expected = price * new Array(count).fill(0).reduce((a, _, i) => a + i + 1, 0);
  return expected - money >= 0 ? expected - money : 0;
}
