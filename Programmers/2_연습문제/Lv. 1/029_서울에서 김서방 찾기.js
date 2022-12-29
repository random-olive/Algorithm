function solution(seoul) {
  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

//Try Again !
function solution(seoul) {
  let idx = 0;
  let result = seoul.some((el, i) => {
    if (el === 'Kim') {
      idx = i;
      return true;
    }
  });

  return '김서방은 ' + idx + '에 있다';
}

/** TIL
 * Array.prototype.findIndex(callback(element[, index[, array]])[, thisArg])
 */
