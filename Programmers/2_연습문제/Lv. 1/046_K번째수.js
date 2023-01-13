function solution(array, commands) {
  return commands.map((c) => array.slice(c[0] - 1, c[1]).sort((a, b) => a - b)[c[2] - 1]);
}

//Try Again !
function solution(array, commands) { //Array destructuring
  return commands.map(([from, to, n]) => array.slice(from - 1, to).sort((a, b) => a - b)[n - 1]);
}

//늘려서 씀
function solution(array, commands) {
  return commands.map((c) => {
    const [from, end, n] = c;
    const newArray = array.filter((_, i) => i >= from - 1 && i <= end - 1).sort((a, b) => a - b);
    return newArray[n - 1];
  });
}

//custom function
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let temp = array.slice(commands[i][0] - 1, commands[i][1]);
    temp = quickSort(temp);
    let ans = temp.length === 1 ? temp[0] : temp[commands[i][2] - 1];
    answer.push(ans);
  }
  return answer;
}

function quickSort(array) { //하나를 기준점으로 create
  if (array.length < 2) return array;

  const pivot = [array[0]]; //concat
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right)); //quickSort를 다시
}


/** TIL
 * 🥲 반성
 * 고차함수 사용시 항상 array descructuring 염두에 둘 것!
 */
