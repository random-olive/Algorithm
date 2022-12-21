function solution(s) {
  let count = [0, 0];

  //저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
  //이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
  //처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
  //"abracadabra" -> ab - ra - ca - da - br - a

  //'ba'

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        count[0]++;
      }
      if (s[i] !== s[j]) {
        count[1]++;
      }
      if (count[0] === count[1]) {
        s += ',';
      }
    }
  }
  return s;
}

function solution(s) {
  let count = [0, 0];
  let set = [...new Set([...s])];

  //저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
  //이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
  //처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
  //"abracadabra" -> ab - ra - ca - da - br - a

  //'ba'
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] === j[i]) { count[0]++;}
      if (s[i] !== j[i]) { count[1]++;
          if (count[0] === count[1]) {  s += ',';   count=[0,0]  }
      }
    }
  }
  return [count, s];
}

//
function solution(s) {
  let count = [0, 0];
  let set = [...new Set([...s])];

  //저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
  //이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
  //처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
  //"abracadabra" -> ab - ra - ca - da - br - a

  //'ba'
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) { count[0]++;}
      if (s[i] !== s[j]) { count[1]++;
          if (count[0] === count[1]) {  s += ',';   count=[0,0]  }
      }
    }
  }
  return [count, s];
}

