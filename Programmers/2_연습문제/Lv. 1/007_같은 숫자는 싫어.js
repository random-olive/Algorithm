function solution(arr) {
  let check = arr[0];

  for (let i = 1; i < arr.length; i++) {
    check === arr[i] ? (arr[i] = '') : (check = arr[i]);
  }

  return arr.filter((el) => el !== '');
}

//Try Again ! //logic
function solution(arr) {
  return arr.filter((el, i) => el != arr[--i]);
}

//immutable
function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {answer.push(arr[i])}
  }

  return answer;
}

//0.0, 12 //logic
function solution(arr) {
  var answer = [];

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] != arr[i + 1]) answer.push(arr[i]);
  }
  //arr.forEach((el, i) => { if (arr[i] !== arr[i + 1]) answer.push(el)});

  return answer;
}

//
function solution(arr) {
  return arr.reduce(function (a, c) {
    if (a.length == 0 || (a.length > 0 && a[a.length - 1] != c)) {a.push(c)} return a}, []);
}

/** TIL
 * π₯² λ°μ±
 * μ΄μ€λ£¨ν λμ  κ° μ§μ  ν λΉκ΅
 */