function solution(nums) {
  let choice = [nums.length / 2, [...new Set(nums)].length];
  return choice[0] < choice[1] ? choice[0] : choice[1];
}

//Fixed !
function solution(nums) {
  let choice = [nums.length / 2, new Set(nums).size];
  return choice[0] < choice[1] ? choice[0] : choice[1];
}

//Try Again !
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];
  return arr.length > max ? max : arr.length;
}

/** TIL
 * 🥲 반성
 * arr에 변수 할당보다 각각 변수 할당이 더 용량이 적고 빨랐음
 */
