//check arr
function solution(s) {
  let count = [0, 0];
  let arr = [...s];

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      s[i] === s[j] ? count[0]++ : count[1]++;
      if (count[0] === count[1]) {
        i = j + 1;
        arr[j] += ' ';
      }
    }
  }
  return count[0] + count[1] !== s.length ? 1 : arr.join('').split(' ').filter((el) => el).length;
}

//fail : 시간 초과 (39, 41) / wrong (35, 7)
function solution(s) {
    let count = [0, 0];
    let answer = 0;
  
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) { //j = i  --> success
        s[i] === s[j] ? count[0]++ : count[1]++;
        if (count[0] === count[1]) {
          i = j + 1;
          answer++;
        }
      }
    }
    return count[0] !== count[1] ? ++answer : answer;
}

//시간 단축
function solution(s) {
    let count = [0, 0];
    let answer = 0;
  
    for (let i = 0; i < s.length; i++) {
        count[0]++
      for (let j = i + 1; j < s.length; j++) {
        s[i] === s[j] ? count[0]++ : count[1]++;
        if (count[0] === count[1]) {
          i = j + 1;
          answer++;
        }
      }
    }
    return count[0] !== count[1] ? ++answer : answer;
}

//Try Again !
//1ms
function solution(s) {
    const splitUp = (s, answer) => {
      if (!s.length) return answer;
  
      const first = s[0];
      let count = 1;

      for (let i = 1; i < s.length; i++) {
        if (first !== s[i]) count--;
        else count++;
        if (count == 0) {
          return splitUp(s.slice(i + 1), answer + 1);
        }
      }

      return answer + 1;
    };

    return splitUp(s, 0);;
}

//0.6ms
function solution(s) {
    let answer = 0;
  
    outer: while (true) {
      const x = s[0]; let count_x = 0; let count_not_x = 0;
  
      for (let i = 0; i < s.length; i++) {
        if (s[i] === x) count_x++;
        else count_not_x++;
        if (count_x === count_not_x) {s = s.slice(i + 1); answer++; continue outer}
      }

      if (s.length > 0) {answer++} //더이상 분해할 문자열이 없는 경우 남은 문자를 마지막 문자열로 카운트에 ++, while문 탈출
      break;
    }
    return answer;
}

//
function solution(s) {
    let first = '';
    let cnt = (ans = 0);
    for (let el of s) {
      if (!first) first = el;
      cnt += first === el ? 1 : -1;
      if (!cnt) (first = ''), ans++;
    //   if (!cnt) {first = ''; ans++}
    }
    return !!cnt + ans;
}

