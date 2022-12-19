function solution(array, height) {
  return array.filter((el) => el > height).length;
}

//Try Again !
function solution(array, height) {
  array.push(height);
  array.sort((a, b) => a - b);
  return array.length - (array.lastIndexOf(height) + 1);
}
