function solution(balls, share) {
    let arr = Array.from(Array(balls), (_) => --balls + 1);
    let [front, rear] = [arr.slice(0, share), arr.slice(-balls - share)].map((el) => el.reduce((a, c) => a * c));

    return front / rear;
}

//Try Again !
const fac = (num) => (num === 0 ? 1 : num * fac(num - 1));

function solution(balls, share) {
    return Math.round(fac(balls) / fac(balls - share) / fac(share));
}

//
function solution(balls, share) {
    let result = 1;
    
    while (share > 0) {
    result = (result * balls) / share;
    balls = balls - 1;
    share = share - 1;
    }

    return Math.round(result);
}

//
function solution(balls, share) {
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, c) => a * c) /
    Array.from({ length: share }, (_, i) => share - i).reduce((a, c) => a * c)
  );
}

//
function solution(balls, share) {
  let fac = (len) => Array(len).fill(1).map((el, i) => BigInt(el + i)).reduce((a, c) => a * c, BigInt(1));
  return Number(fac(balls) / (fac(balls - share) * fac(share)));
}

//
const solution = (balls, share) => fact(balls) / (fact(share) * fact(balls - share));

const fact = (n, acc = BigInt(1)) => n <= 1 ? acc : fact(n - 1, BigInt(n) * acc);

//
function solution(balls, share) {
  let answer = 1;
  for (let i = balls; i > balls - share; i--) {
    answer *= i;
    answer /= balls - i + 1;
  }
  return answer;
}

/** TIL
 * BigInt : values
 * BigInt(1 || '1')  => 1n  // type: 'bigint' 
 * typeof Object(1n) // type: 'object'
 * 
 * ex) test = BigInt(Number.MAX_SAFE_INTEGER) //9007199254740991n
 * BigInt.prototype.toLocaleString()  //'9,007,199,254,740,991'
 * BigInt.prototype.toString() //'9007199254740991'
 * BigInt.prototype.valueOf() //9007199254740991n
 * 
 ** EXAMPLE
 * BigInt(Number.MAX_SAFE_INTEGER) * -1n  // -9007199254740991n
 * 18014398509481982n % 10n  // 2n
 * 2n ** 54n  //18014398509481984n
 * 5n / 2n  //2n
 * 0n !== 0
 * 1n < 2, 2n > 1, 2n >= 2 //true
 * 
 * 
 * 🥲 반성
 * * Array.from({length})
 */