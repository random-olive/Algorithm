function solution(numbers, direction) {
  if (direction === 'right') numbers.unshift(numbers.pop());
  if (direction === 'left') numbers.push(numbers.shift());
  return numbers;
}

//Try Again !
function solution(numbers, direction) {
  direction === 'left' ? numbers.push(numbers.shift()) : numbers.unshift(numbers.pop());
  return numbers;
}
