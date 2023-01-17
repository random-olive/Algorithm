function solution(a, b, bottles) {
  let total = 0;
  while (bottles >= a) { //1. n === a일때도 count
    let recycle = ~~(bottles / a) * b; //2. answer에 받는 병까지 추가해서 넣어야 하는 것을 잊음
    total += recycle;
    bottles = recycle + (bottles % a);
    //if (n === a) answer += b; //2.에 *b가 추가되면서 필요없어짐
  }
  return total;
}

function solution(a, b, n) {
  let get = [];
  let left = [];
  while (n >= a) {
    get.push(~~(n / a) * b);
    n = ~~(n / a) * b + (n % a);
    left.push(n);
  }
  return get.reduce((a, c) => a + c, 0);
}

//Try Again !
solution = (a, b, n) => ~~(Math.max(n - b, 0) / (a - b)) * b;

//no % -> 주고 받은 것만 cnt해서 계산
function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const cnt = ~~(n / a);
    answer += cnt * b;
    n += cnt * (b - a); //n = n... -> 기존 + 주고 받음
  }

  return answer;
}

//recursion
function solution(a, b, n) {
  var answer = getCola(a, b, n, 0);
  return answer;
}

function getCola(a, b, n, result) {
  const newCola = ~~(n / a) * b;
  result += newCola;
  if (newCola > 1) return getCola(a, b, newCola + (n % a), result);
  else return ~~result;
}

/** TIL
 * 🥲 반성
 * 테스트케이스 예상값마저 다 틀리면 내가 간과한 부분이 있다든 것 -> 그림을 그려서 생각해보기 : 그림 그려서 한 게 맞았음..
 * 변수 나눠 쓰기 + 변수 재사용
 * %=
 * 
 */