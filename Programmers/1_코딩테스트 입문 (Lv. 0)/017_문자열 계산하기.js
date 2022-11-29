function solution(my_string) {
  const num = my_string.split('').filter((el) => el !== ' ').join('').match(/[-]?[0-9]{1,20000}/g);

  return num.reduce((acc, cur) => +acc + +cur, 0);
}
