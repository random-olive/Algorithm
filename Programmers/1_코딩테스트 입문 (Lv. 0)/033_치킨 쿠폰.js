function solution(chicken) {
  let answer = 0;
  let rest = 0;

  while (chicken > 1) {
    answer += Math.floor(chicken / 10);
    rest += chicken % 10;
    chicken = chicken / 10;
  }
  answer += Math.floor(rest / 10);
  return answer;
}

//Try Again !
function solution(chicken) {
  var answer = 0;

  while (chicken >= 10) {
    answer += Math.floor(chicken / 10);
    chicken = Math.floor(chicken / 10) + (chicken % 10);
  }

  return answer;
}

function solution(chicken) {
  var answer = parseInt((chicken - 1) / 9);
  return answer;
}

function solution(chicken) {
  return ~~(chicken * 0.111111);
}

function solution(chicken) {
  return ~~((chicken - 1) / 9) === -1 ? 0 : ~~((chicken - 1) / 9);
}


/** TIL
 * Operators : tilde, shift operator
 * ~  : NOT
 * ~~ : NOT+NOT 하거나 Math.floor()처럼 쓰거나 undefined/null을 0으로 변환할 때
 * 
 * [아래 내용 확인 전까지 폐기]
 * >> :  bitshift, (2진수 경우) 1로 채우면서 push  // returns decimal ?? 
 * >>> : bitshift, (2진수 경우) 0으로 채우면서 push  // returns decimal ?? 
 * 
 ** EXAMPLE
 * ~ 0000000000000101 (5 in decimal) = 1111111111111010 (-6 in decimal)
 * 
 * const arr = [1,1,1,2,2,3,3,3,3], const obj2 = {};
 * arr.forEach(v => obj2[v] = ~~obj2[v] + 1);  // undefined + 3 => NaN 방지
 * 
 * -9       (10진수): 11111111111111111111111111110111 (2진수)
 * -9 >>  2 (10진수): 11111111111111111111111111111101 (2진수) = -3 (10진수)
 * -9 >>> 2 (10진수): 00111111111111111111111111111101 (2진수) = 1073741821 (10진수)
 * [아래 내용 확인 전까지 폐기]
 */
