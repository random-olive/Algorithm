function solution(n, arr1, arr2) {
  let answer = Array(n).fill('');
  arr1 = arr1.map((el) => +el.toString(2));
  arr2 = arr2.map((el) => +el.toString(2));
  answer.forEach((_, i) => (answer[i] = `${arr1[i] + arr2[i]}`.padStart(n, 0)));

  return answer.map((el) => [...el].map((v) => (v === '0' ? (v = ' ') : (v = '#'))).join(''));
}

//Try Again !
function solution(n, arr1, arr2) {
  return arr1.map((el, i) => (el | arr2[i]).toString(2).padStart(n, '0').replace(/1|0/g, (v) => (+v ? '#' : ' ')));
}

//
function solution(n, arr1, arr2) {
  return arr1.map((el, i) => ('0'.repeat(n) + (el | arr2[i]).toString(2)).slice(-n)).map((v) => v.replace(/0/g, ' ').replace(/1/g, '#'));
}


//
function solution(n, arr1, arr2) {
  return arr1.map((el, i) => addZero(n, (el | arr2[i]).toString(2)).replace(/1|0/g, (v) => +v ? '#' : ' ')); 
}

const addZero = (n, s) => {
  return '0'.repeat(n - s.length) + s;
};

//
function solution(n, arr1, arr2) {//n진법 -> %, /로 구현
  let num1, num2, line;
  let answer = [];
  for (let i = 0; i < n; i++) {
    num1 = arr1[i];
    num2 = arr2[i];
    line = '';
    for (let j = 0; j < n; j++) {
      line = (num1 % 2) + (num2 % 2) ? '#' + line : ' ' + line;
      num1 = ~~(num1 / 2);
      num2 = ~~(num2 / 2);
    }
    answer.push(line);
  }
  return answer;
}

//c에 하나씩 더하느냐, answer에 직접 push하고 padStart까지 모든 연산을 체인으로 넣느냐 -> 효율성 차이가 약간 있음
function solution(n, arr1, arr2) {
  var answer = [];
  let c;
  for (let i = 0; i < n; i++) {
    c = (arr1[i] | arr2[i]).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
    while (c.length != n) {
      c = ' ' + c;
    }
    answer.push(c);
  }
  return answer;
}

/** TIL
 * 비트연산자 (|, &) : 각 수를 2진법(bit)으로 계산 :::: 각 "대응" 비트가 (하나라도 / 모두) 1일 경우 1을 반환 
 * -> 10진법 input시 : 2진법으로 계산해서 10진법으로 output
 * 
 **EXAMPLE
 * (4|5) //5
 * (100|101) //101
 * 
 * 🥲 반성
 * 일대일 대응 : 정규식을 활용한 replace
 * 삼항연산자 : +v? '#' : ''
 * n진법 : %, /
 */