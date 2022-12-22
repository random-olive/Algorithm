function solution(a, b) {
  //   a < 10 ? (a = '0' + a) : a;
  //   b < 10 ? (b = '0' + b) : b;
  let answer = '' + new Date(`${2016}/${a}/${b}`);
  return answer.slice(0, 3).toUpperCase();
}

//Fixed ! 단축됨 (전체 괄호 활용)
function solution(a, b) {
  return ('' + new Date(`${2016}/${a}/${b}`)).slice(0, 3).toUpperCase();
  return (new Date('2016-' + a + '-' + b) + '').split(' ')[0].toUpperCase();
}

//Try Again ! 시간 오래 걸림 : toString() process 추가되어서
function solution(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

//단축됨 : string화 하지 않고 배열에서 찾아 씀
function solution(a, b) {
  return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][
    new Date(`2016-${a}-${b}`).getDay()
  ];
}

//일수, %
function solution(a, b) {
  const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = b;

  for (let i = 0; i < a - 1; i++) sum += arr[i];

  return ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'][sum % 7];
}

//
function solution(a, b) {
  let arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = -1;

  for (let i = 1; i < a; i++) {
    sum += arr[i];
  }
  sum += b;

  return ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'][sum % 7];
}

//
function solution(a, b) {
  let arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum;
  a < 2 ? (sum = b - 1) : (sum = arr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1);
  return ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'][sum % 7];
}

//switch문 활용
function solution(a, b) {
  switch (new Date(2016, a - 1, b).getDay()) {
    case 0:
      return 'SUN';
    case 1:
      return 'MON';
    case 2:
      return 'TUE';
    case 3:
      return 'WED';
    case 4:
      return 'THU';
    case 5:
      return 'FRI';
    case 6:
      return 'SAT';
  }
}

/** TIL
 * 🥲 반성
 * 전체 괄호 활용 -> method 개입 개수 줄이기
 */
