function solution(my_string) {
  let check = my_string.match(/[0-9]{1,4}/g);
  return check !== null ? check.reduce((a, c) => a + Number(c), 0) : 0;
}

//Fixed !
function solution(my_string) {
    return my_string.match(/[0-9]{1,4}/g)?.reduce((a, c) => +c + a, 0) || 0;
}
  

//Try Again !
function solution(my_string) { 
    return my_string.toLowerCase().replace(/[a-z]/g, ' ').split(' ').map((v) => v * 1).reduce((a, c) => a + c);
}

function solution(my_string) {
    return my_string.split(/\D+/).filter(el=>el).reduce((a, c) => +c + a, 0);
}


/** TIL
 * str (수학연산) num  => number  (012_OX퀴즈.js 참조)
 * 
 * /\D+/  => \d : 숫자인 것들, \D : 숫자가 아닌 것들, + : 1회 이상 반복    //     \s : 공백문자, \S : 공백 이외의 문자
 * 
 * filter(el=>el)  => ''을 모두 제외시킴
 * 
 */