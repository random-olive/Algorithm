function solution(number) {//sort할 필요 없음
  let len = number.length;
  let answer = 0;
  for (let i = 0; i < len - 2; i++) {//end point
    for (let j = i + 1; j < len - 1; j++) {//end point
      for (let k = j + 1; k < len; k++) {
        number[i] + number[j] + number[k] === 0 && answer++;
      }
    }
  }
  return answer;
}

//Try Again !
function solution(number) {
  let sum = 0;

  //dfs:1
  const dfs1 = (n, list) => {
    if (n === number.length) {
      if (list.length === 3) list.reduce((a, c) => a + c) === 0 && sum++;
      return;
    }

    dfs1(n + 1, [...list, number[n]]);
    dfs1(n + 1, list);
  };

  //dfs:2
  const dfs2 = (n, list) => {
    if (list.length === 3) {
      sum += list.reduce((a, c) => a + c) ? 0 : 1;
      return;
    }

    for (let i = n; i < number.length; i++) {
      dfs2(i + 1, [...list, number[i]]);
    }
  };

  dfs(0, []);
  return sum;
}

//dfs3
function solution(number) {
  let check = Array.from({ length: number.length }, () => false);
  let result = 0;

  const dfs = (idx, cnt) => {
    if (cnt === 3) {
      let sum = 0;
      check.map((v, i) => {
        if (v === true) sum += number[i];
      });
      result += sum === 0 ? 1 : 0;
    }

    for (let i = idx; i < number.length; i++) {
      if (check[i] === true) continue;
      check[i] = true;
      dfs(i, cnt + 1);
      check[i] = false;
    }
  };

  dfs(0, 0);
  return result;
}

//filter, slice, pivot* //loop에 따라 연속적으로 바뀌는 경우 =가 아니라 +=를 고려하기
function solution(number = []) {
  let answer = 0;

  for (let i = 0; i < number.length; i++) {
    let pivot = number[i];
    for (let j = i + 1; j < number.length; j++) {
      let pivot2 = number[j];
      answer += number.slice(j + 1).filter((el) => el === (pivot + pivot2) * -1).length;
    }
  }

  return answer;
}

/** TIL
 * 서로 다른 학생의 정수 번호가 같을 수 있습니다.
 *
 * 🥲 반성
 * filter => slice + pivot
 * loop => +=
 * Array.from({ length: number.length }, () => false); //[false,...]
 * dfs : 공간 절약
 */
