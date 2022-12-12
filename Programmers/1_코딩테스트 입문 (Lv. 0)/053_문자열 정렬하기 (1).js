function solution(my_string) {
    return my_string.match(/[0-9]/g).map(Number).sort();
  }
  
//Try Again !
function solution(s) {
  return s.match(/\d/g)?.map(Number).sort() ?? [];
}

/** TIL
 * 🥲 반성
 * 1자리 숫자 -> \d, sort() 이용이 더 효율적  => 메서드, 정규식을 폭 넓게 고민해보기
 */