function solution(numbers) {
    return numbers.sort((a, b) => a - b)[numbers.length - 1] * numbers.sort((a, b) => a - b)[numbers.length - 2];
  }

//Try Again !
function solution(numbers) {  
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}

/** TIL
 * 🥲 반성
 * sort => mutable
 */