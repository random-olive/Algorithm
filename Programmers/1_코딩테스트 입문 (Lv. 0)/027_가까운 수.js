function solution(array, n) {
  let difference = array.sort((a, b) => a - b).map((el) => Math.abs(el - n));
  return array[difference.indexOf(Math.min(...difference))];
}

//Try Again !
function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);
  return array[0];
}  

function solution(array, n) {
  return array[array.sort((a, b) => a - b).map((el) => Math.abs(el - n)).indexOf(Math.min(...array.map((el) => Math.abs(el - n))))];
}

function solution(array, n) {
  return array.sort((a, b) => a - b).map((el) => [Math.abs(n - el), el]).sort((a, b) => a[0] - b[0])[0][1]}

function solution(array, n) {
  return array.reduce((acc, cur) =>
    Math.abs(acc - n) < Math.abs(cur - n) ? acc : Math.abs(acc - n) === Math.abs(cur - n) ? Math.min(acc, cur) : cur)}

    
/** TIL
 *๐ฅฒ ๋ฐ์ฑ : index๊ฐ์ ๊ตฌํ์ง ๋ง๊ณ  []์ ์ง์ ํด์ ํธํ๊ฒ ๊บผ๋ด ์ฐ๊ธฐ
           sort, reduce
           ์๋ฃํํ๊ฐ ๊ฐ์ฅ ๋จ์ํ  ๋ sort
           ์์ธ ์ผ์ด์ค- ์์ถ๋ ฅ ํํ ์์ฌํด๋ณด๊ธฐ
 */
