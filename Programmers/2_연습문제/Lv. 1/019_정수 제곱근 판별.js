function solution(n) {
  let sqrt = Math.sqrt(n);
  return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
  //return sqrt%10? -1 : (sqrt + 1) ** 2;
}

//Try Again !
function solution(n) {
  const sqrt = Math.sqrt(n);
  const trunc = Math.trunc(sqrt);
  return sqrt === trunc ? Math.pow(sqrt + 1, 2) : -1;
}

//
function solution(n) {
  return parseInt(Math.sqrt(n)) == parseFloat(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}

function solution(n) {
  let upper = n;
  let lower = 1;
  let answer, x;
  let cnt = 0; //혹시라도 infinite loop안걸리게....
  while (cnt < 100000) {
    x = (upper + lower) / 2;
    x = x - (x % 1);
    if (x ** 2 === n) {
      answer = x;
      break;
    } else if (x ** 2 > n) {
      upper = x;
    } else if (x ** 2 < n) {
      if (lower === x) {
        answer = 0;
        break;
      }
      lower = x;
    }
    cnt++;
  }
  return answer ? (answer + 1) ** 2 : -1;
}

/** TIL
 * Math.pow(base, exponent)
 *
 * parseFloat(num||str)
 *
 **EXAMPLE
 * Math.pow(4, 0.5)  => 4의 제곱근
 * Math.pow(8, 1/3)  => 8의 세제곱근
 * Math.pow(-7, 0.5) => NaN
 *
 * parseFloat('3.14','   3.14   ','3.14abc',"314e-2", "0.0314E+2") //3.14
 * parseFloat('abc') //NaN
 */
