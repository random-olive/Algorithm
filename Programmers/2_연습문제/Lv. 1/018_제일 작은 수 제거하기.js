function solution(arr) {//#1: 5251ms
  let result = arr.filter((el) => el !== Math.min(...arr)); //계산하는 부분이 filter 내부로 들어가면서 시간이 늘어났음
  return result.length ? result : [-1];
}

//Try Again !
function solution(arr) {//#2: 3.91ms
  const min = Math.min(...arr);
  return arr.length !== 1 ? arr.filter((el) => el !== min) : [-1]; //arr.length를 체크하는 게 easy
}

function solution(arr) {//#3: 0.5ms
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length === 0 ? [-1] : arr;
}

/** TIL
 * 🥲 반성
 * 메서드 내에 계산 로직 넣지말고 변수를 따로 빼기
 * 최대한 많이 생각해서 풀어보기
 */
