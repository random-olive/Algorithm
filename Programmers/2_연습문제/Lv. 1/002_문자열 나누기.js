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
  //   return  arr.join('').split(' ').filter((el) => el).length;
  return count[0] + count[1] !== s.length ? 1 : arr.join('').split(' ').filter((el) => el).length
}

////////
//test
function solution(s) {
  let count = [0, 0];
  let arr = [...s];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      s[i] === s[j] ? count[0]++ : count[1]++;
      if (count[0] === count[1]) {
        i = j + 1;
        //   arr[j] += ' ';
        answer++;
        //   count=[0,0]
      }
    }
  }
  return count[0] !== count[1] ? ++answer : answer;
}

//answer2
function solution(s) {
  let count = [0, 0];
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      s[i] === s[j] ? count[0]++ : count[1]++;
      if (count[0] === count[1]) {
        i = j + 1;
        answer++;
      }
      if (count[0] !== count[1] && j === s.length - 1) {
        return 1;
      }
    }
  }
  return count[0] !== count[1] ? ++answer : answer;
}


//answer
function solution(s) {
    let count = [0, 0];
    let answer = 0;
  
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
        s[i] === s[j] ? count[0]++ : count[1]++;
        if (count[0] === count[1]) {
          i = j + 1;
          answer++
        }
      }
    }

    // return count[0] + count[1] !== s.length && count[0]>count[1] ? 1 : count[0] !== count[1] ? ++answer : answer;
    return count
}