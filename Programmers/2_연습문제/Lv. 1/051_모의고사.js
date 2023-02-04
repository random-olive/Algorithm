function solution(answers) {
  answers = answers.join('');
  //let len = answers.length;
  let one = '12345'.repeat(2000); //Math.ceil(len/5)
  let two = '21232425'.repeat(1250); //Math.ceil(len/8)
  let three = '3311224455'.repeat(1000); //Math.ceil(len/10)
  let score = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i] === answers[i]) score[0]++;
    if (two[i] === answers[i]) score[1]++;
    if (three[i] === answers[i]) score[2]++;
  }

  let max = Math.max(...score);
  return score.map((el, i) => {if (el === max) return i + 1}).filter((v) => v);
}

//Try Agian !
//1 : params: ([el,i])
let solution = function (arr) {
  let man = [
    [1, [1, 2, 3, 4, 5]],
    [2, [2, 1, 2, 3, 2, 4, 2, 5]],
    [3, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]],
  ];

  let passed = man.map(([order, answer]) => [order, arr.filter((el, i) => el === answer[i % answer.length]).length]);
  let max = Math.max(...passed.map((el) => el[1]));
  return passed.filter((el) => el[1] === max).map((v) => v[0]);
};

//2 : basic
function solution(answers) {
  let answer = [];
  let man1 = [1, 2, 3, 4, 5];
  let man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let pass1 = answers.filter((el, i) => el === man1[i % man1.length]).length;
  let pass2 = answers.filter((el, i) => el === man2[i % man2.length]).length;
  let pass3 = answers.filter((el, i) => el === man3[i % man3.length]).length;
  let max = Math.max(pass1, pass2, pass3);

  if (pass1 === max) answer.push(1);
  if (pass2 === max) answer.push(2);
  if (pass3 === max) answer.push(3);

  return answer;
}

//3 : for
function solution(answers) {
  let answer = [];
  let man = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  let point = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (man[0][i % 5] == answers[i]) point[0]++;
    if (man[1][i % 8] == answers[i]) point[1]++;
    if (man[2][i % 10] == answers[i]) point[2]++;
  }

  let max = Math.max(...point);

  for (let i = 0; i < 3; i++) {
    if (point[i] == max) answer.push(i + 1);
  }

  return answer;
}

//4 : apply
const solution = (answers) => {
  const passed = [
    { key: 1, value: 0 },
    { key: 2, value: 0 },
    { key: 3, value: 0 },
  ];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((answer, i) => {
    if (man1[i % 5] === answer) passed[0].value += 1;
    if (man2[i % 8] === answer) passed[1].value += 1;
    if (man3[i % 10] === answer) passed[2].value += 1;
  });

  const max = Math.max.apply(null, passed.map((v) => v.value)); 
  return passed.filter((el) => el.value === max).map((v) => v.key);
};

//5 : practical
function solution(answers) { 
  const givers = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };
  let numOfSuccess = [];

  numOfSuccess[0] = {
    name: 1,
    success: answers
      .map((answer, idx) => (givers[1][idx % 5] === answer ? 1 : 0))
      .filter((answer) => answer).length,
  };
  numOfSuccess[1] = {
    name: 2,
    success: answers
      .map((answer, idx) => (givers[2][idx % 8] === answer ? 1 : 0))
      .filter((answer) => answer).length,
  };
  numOfSuccess[2] = {
    name: 3,
    success: answers
      .map((answer, idx) => (givers[3][idx % 10] === answer ? 1 : 0))
      .filter((answer) => answer).length,
  };

  const successOrder = numOfSuccess.sort((a, b) => b.success - a.success);
  const bestStudents = successOrder
    .filter((el) => el.success === successOrder[0].success)
    .map((el) => el.name);

  return bestStudents.length > 1 ? bestStudents.sort((a, b) => a - b) : bestStudents;
}

//6 : reduce ********
function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  function getCount(arr) { // a += (true && 1 || 0) -> 1 or 0 계속 더함
    return answers.reduce((a, c, i) => (a += (c === arr[i % arr.length] && 1) || 0), 0);
  }

  const p1c = getCount(p1);
  const p2c = getCount(p2);
  const p3c = getCount(p3);
  const max = Math.max(p1c, p2c, p3c);

  const answer = [];
  if (max === p1c) answer.push(1);
  if (max === p2c) answer.push(2);
  if (max === p3c) answer.push(3);

  return answer;
}

//7 : if(X) -> &&
function solution(answers) {
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const passed = [0, 0, 0];

  answers.forEach((el, i) => {// !!
    el === man1[i % man1.length] && passed[0]++;
    el === man2[i % man2.length] && passed[1]++;
    el === man3[i % man3.length] && passed[2]++;
  });

  const max = Math.max(...passed);
  const answer = [];

  max === passed[0] && answer.push(1);
  max === passed[1] && answer.push(2);
  max === passed[2] && answer.push(3);

  return answer;
}

/** TIL
 * 🥲 반성
 * params: ([a, b])
 * 반복 element 처리 : i % (해당 arr.length)
 * forEach((el,i)=>{
 * A && A'
 * B && B'
 * })  === 2개의 if...
 */
