function solution(arr1, arr2) {
  let len = [arr1[0].length, arr1.length];
  let answer = [];

  arr1 = arr1.flat();
  arr2 = arr2.flat();
  let arr = arr1.map((el, i) => el + arr2[i]);

  for (let i = 0; i < len[1]; i++) {
    answer.push(arr.splice(0, len[0]));
  }

  return answer;
}

//Try Again !
function solution(arr1, arr2) {//for: 2 times
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

//
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((_, j) => arr1[i][j] + arr2[i][j]));
}

//
function solution(arr1, arr2) {//for: 2 times
  return arr1.reduce((a, b, i) => ((a[i] = b.reduce((c, d, j) => ((c[j] += d), c), a[i])), a), arr2.slice());
}

//
function solution(arr1, arr2) {
  let arr = Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    arr[i] = Array(arr1[0].length); //삭제 -> Cannot set properties of (undefined setting '0')
    for (let j = 0; j < arr1[0].length; j++) {
      arr[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return arr;
}

//
function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((el, i) => answer.push(el.map((v, j) => v + arr2[i][j])));
  return answer;
}

/** TIL
 * 🥲 반성
 * formulate..
 */
