function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, c) => +c + a, 0);
}
