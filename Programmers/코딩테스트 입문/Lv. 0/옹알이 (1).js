function solution(babbling) {
  let answer = 0;
  let word = ["aya", "ye", "woo", "ma"];
  let filtered = [];

  for (let i = 0; i < word.length; i++) {
    babbling = babbling.map((el) => el.replace(word[i], word[i].toUpperCase()));
  }

  filtered = babbling.filter((el) => /^[A-Z]+$/.test(el));
  answer = filtered.length;

  return answer;
}

// TIL

// Array.prototype.map((el, idx, arr) => {})
// Array.prototype.filter((el, idx, arr) => {})

// String.prototype.replace(regexp|substr, newSubstr|function)
// String.prototype.toUpperCase()

// Contructor : RegExp(/ab+c/, 'i')
// RegExp.prototype.test(str)
