function solution(quiz) {
  let num = [];
  let answer = [];

  for (let i = 0; i < quiz.length; i++) {
    num.push(quiz[i].match(/[-]?[0-9]{1,10000}/g));

    quiz[i].includes('+')
      ? +num[i][0] + +num[i][1] === +num[i][2]
        ? answer.push('O')
        : answer.push('X')
      : +num[i][0] - +num[i][1] === +num[i][2]
      ? answer.push('O')
      : answer.push('X');
  }

  return answer;
}

//Try Again !
function solution(quiz) {
  return quiz.map((el) => {
    const [exp, result] = el.split(' = ');
    const sign = exp.includes('+') ? 1 : -1;
    const [op1, op2] = exp.split(sign === 1 ? ' + ' : ' - ');

    return +op1 + +op2 * sign === +result ? 'O' : 'X';
  });
}

// function solution(quiz) {
//   return quiz.map((el) => el.split(' = ')).map((el) => {
//       return eval(el[0]) == el[1] ? 'O' : 'X';
//     });
// }

// let solution = (q) => q.map((el) => ['X', 'O'][~~eval(el.replace('=', '=='))]);

/** TIL
 * +'1'  => string to number  !
 *
 * eval()  => 사용하지말라는 권장이 있어 학습 x..
 *
 *
 *🥲 반성 : 입출력을 제대로 이해하고 문제풀기 !!
 *        부호 하나를 붙임으로써 쉽게 string에서 number로 형변환할 수 있었다.Type에 대한 문법도 공부 필요.
 *
 */
