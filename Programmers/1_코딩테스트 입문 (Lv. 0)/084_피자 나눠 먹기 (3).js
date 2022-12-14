function solution(slice, n) {
  return ~~(n % slice === 0 ? n / slice : n / slice + 1);
}

//Try Again !
function solution(slice, n) {
  return Math.ceil(n / slice);
}

function solution(slice, n) {
  return ((n + slice - 1) / slice) << 0;
}

/** TIL
 * ๐ฅฒ ๋ฐ์ฑ
 * ์ฌ๋ฆผ, ๋ด๋ฆผ ๊ฐ๋์์ ๋ถ๊ธฐ๊ฐ ๋๋ ์ง๋ ๊ฒ์ ์ดํดํ๊ธฐ
 *
 * x ์ง์ ๊ด๋ จ ๋ณต์ต Update
 * bitshift >>, << : 0์ ์ถ๊ฐํ๋ฉฐ shift
 * unsigned "right" shift : >>> : 0์ ์ถ๊ฐํ๋ฉฐ shift, ๊ทธ๋ฌ๋ ํญ์ ๋ถํธ ์๋ 32๋นํธ ์ ์ return
 * shift assignment : <<=, >>=, >>>= : shift + ์ผ์ชฝ ๋ณ์์ ํ ๋น๊น์ง // x <<= y // x = x << y
 *
 * parseInt('101', 2), (5).toString(2) 
 */
