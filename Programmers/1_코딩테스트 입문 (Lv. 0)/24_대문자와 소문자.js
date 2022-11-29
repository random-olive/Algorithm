function solution(my_string) {
  return [...my_string].map((el) => (/[a-z]/g.test(el) ? el.toUpperCase() : el.toLowerCase())).join('');
}
