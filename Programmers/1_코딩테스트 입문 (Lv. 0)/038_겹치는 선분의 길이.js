function solution(lines) {
  let s = lines.map((el) => el[0]).sort((a, b) => a - b);
  let e = lines.map((el) => el[1]).sort((a, b) => a - b);

  if (e[0] <= s[1]) {
    if (e[1] <= s[2]) {
      return 0;
    }
    return e[1] - s[2];
  }
  if (e[0] > s[2]) {
    return e[1] - s[1];
  }
  return e[0] - s[1] + e[1] - s[2];
}

//Try Again !
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((a, c) => (c > 1 ? a + 1 : a), 0);
}

function solution(lines) {
  let min = Math.min(...lines.flat());
  let max = Math.max(...lines.flat());
  let arr = Array(max - min + 1).fill(0);

  for (let line of lines) {
    line.sort((a, b) => a - b);
    if (min < 0) {
      line[0] += Math.abs(min);
      line[1] += Math.abs(min);
    }
    for (let i = line[0]; i < line[1]; i++) arr[i]++;
  }

  return arr.filter((v) => v > 1).length;
}

/** TIL
 * Array.prototype.forEach(callback(currentvalue[, index[, array]])[, thisArg])  =>
 *
 * EXAMPLE
 * const items = ['item1', 'item2', 'item3']; const copy = [];
 * 
 * // 이전
 * for (let i=0; i<items.length; i++) {copy.push(items[i])}
 * 
 * // 이후
 * items.forEach( function (item) {copy.push(item)} );
 *
 * 🥲 반성
 * 로직이 이상하다고 생각되는 부분의 테스트 케이스 점검하기
 */


//Fail
function solution(lines) {
    let common = [];
    let excluded = [];
    let included = [];
    let check = [];
    let count = 0;
  
    let [line1, line2, line3] = lines.map((el) => Array(el[1] - el[0] + 1).fill(el[0]).map((_, i) => el[0] + i));
    let rotation = [line1, line2, line3, line1];
  
    for (let i = 0; i < rotation.length - 1; i++) {
      common = rotation[i].map((el) => rotation[i + 1].filter((v) => v === el)[0]).filter((x) => x !== undefined);
      check.push(common)
      common.length !== 1 ? common.map((el) => (included.includes(el) ? null : included.push(el))) : null;
    }
  
    included = included.sort((a, b) => a - b);
  
    if (included.length > 0) {
      Array(included[included.length - 1] - included[0] + 1).fill(included[0]).map((_, i) => included[0] + i)
        .map((el) => (!included.includes(el) ? excluded.push(el) : null));
    }
  
    for (let i = 0; i < check.length-1; i++){
        check[i][1] + 1 === check[i + 1][0] ? count ++ : null
    }
  
    return included.length === 0 ? 0 : included.length - excluded.length - 1;
  }