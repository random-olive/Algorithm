function solution(s) {
  return [...s].filter((el) => s.indexOf(el) === s.lastIndexOf(el)).sort().join('');
}

//Try Again !
var solution = (s) => [...s].filter((el) => s.match(new RegExp(el, 'g')).length == 1).sort().join('');
