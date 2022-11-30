function solution(my_string) {
  return [...my_string].reduce((acc, cur) => (!acc.includes(cur) ? acc + cur : acc), '');
}

function solution(my_string) {
  return [...new Set(my_string)].join('');
}


/** TIL
 * Set 객체 : 자료형에 상관없이 유일한 값을 저장, iterable
 * Set.prototype.add(value)  => 합집합 union 구현
 * Set.prototype.delete(value) 
 * Set.prototype.clear()
 * Set.prototype.has(value)  => 교집합 intersection, 차집합 difference 구현
 * 
 * 
 ** EXAMPLE
 * let intersection = new Set([...set1].filter(x => set2.has(x)));
 * let difference = new Set([...set1].filter(x => !set2.has(x)));
 * 
 * 
 *🥲 반성 : Set 결과가 {} 꼴로 나와서 오류 발생.. Set 함수에 대해 제대로 알고 쓰기
 */
