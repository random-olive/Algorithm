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
 * ๐ฅฒ ๋ฐ์ฑ
 * arr์ ๋ณ์ ํ ๋น๋ณด๋ค ๊ฐ๊ฐ ๋ณ์ ํ ๋น์ด ๋ ์ฉ๋์ด ์ ๊ณ  ๋นจ๋์
 */
