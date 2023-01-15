function solution(numbers) {
  let answer = []; // numbers = numbers.sort((a, b) => a - b); -> 어차피 뒤에서 다시 sorting하니까 삭제하기

  for (let i = 0; i < numbers.length - 1; i++) { //시간 단축 : numbers.length-1
    for (let j = i + 1; j < numbers.length; j++) { //혹은 i,j=0부터 start, if (i===j) continue (skip)
      let el = numbers[i] + numbers[j]; //혹은 다 더한 후 answer = [...new Set(answer)]
      !answer.includes(el) ? answer.push(el) : ''; //indexOf로도 찾을 수 있다.
    }
  }

  return answer.sort((a, b) => a - b);
}

//Try Again !
function solution(numbers) {
  let answer = [];

  numbers.forEach((x, i) => {
    const numbers2 = numbers.slice(i + 1); //forEach 안에서 새 배열 생성
    //혹은 아래처럼 indexOf, splice 이용
    // let idx = numbers2.indexOf(x);
    // numbers2.splice(idx, 1);

    numbers2.forEach((y) => {
      let el = x + y;
      if (!answer.includes(el)) answer.push(el);
    });
  });

  return answer.sort((a, b) => a - b);
}

//판단하고 넣느냐 Set에서 넣고 판단하느냐 -> Set에서 판단이 더 빠름
function solution(numbers) {
  const mySet = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      mySet.add(numbers[i] + numbers[j]);
    }
  }
  return [...mySet].sort((a, b) => a - b);
}

//간단한 로직
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (i === j) continue; //*** 다음꺼부터 하되 모든 중복 제거
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
}

//obj를 활용한 중복 제거
function solution(numbers) {
  let answer = [];
  let obj = {};
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let value = numbers[i] + numbers[j];
      obj[value] = (obj[value] || 0) + 1; //count하면서 자동 중복 제거
    }
  }
  for (let key in obj) {
    answer.push(+key);
  }
  return answer;
}

//answer.sort(compare) 참고
const compare = (num1, num2) => {
  if (num1 === num2) {
    return 0;
  }

  return Number(num1) < Number(num2) ? -1 : 1;
};

/** TIL
 * 😀 for loop 중첩시 낭비하지 않는 idx 설정을 생각한다. (i<numbers.length-1, j=i+1)
 *
 * 🥲 반성
 * ** 중복을 의도적으로 제거할 때도 arr 보다 obj 활용을 고려할 수 있다. **
 * ** process 수 차이가 비슷하면, 여러가지 기능이 조합된 최신의 method가 가장 성능이 좋은 듯 하다. **
 * Set 활용을 생각했었는데 for 쪽이 process가 더 적을 것이라고 판단해서 사용하지 않았다.
 * 논리단계를 차근차근히 나열 해 볼 것 : 진짜 프로세스가 더 적은지 -> 여기서는 Set에 의한 중복 체크, input이 훨씬 쉬웠다.
 *
 */
