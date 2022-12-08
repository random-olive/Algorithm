function solution(spell, dic) {
  let count = 0;

  for (let i = 0; i < dic.length; i++) {
    count = 0;
    for (let j = 0; j < spell.length; j++) {
      dic[i].includes(spell[j]) ? count++ : null;
      if (count === spell.length) {
        return 1;
      }
    }
  }
  return 2;
}

//Try Again !
function solution(spell, dic) {
  return dic.filter((el) => spell.every((v) => el.includes(v))).length ? 1 : 2;
}

function solution(spell, dic) {
  return dic.map((el) => el.split('').sort().join('')).includes(spell.sort().join('')) ? 1 : 2;
}

function solution(spell, dic) {
  let spellStr = spell.sort().join('');
  for (let i = 0; i < dic.length; i++) {
    if (dic[i].split('').sort().join('') === spellStr) {
      return 1;
    }
  }
  return 2;
}


/** TIL
 * Array.prototype.every((el, idx, arr) => {}) => boolean
 * Array.prototype.some((el, idx, arr) => {}) => boolean
 * 
 ** EXAMPLE
 * [1,2,3].every(el => el <= 3)  => true
 * [1,2,3].some(el => el === 2)  =>true
 * 
 * 🥲 반성
 * 있음/없음 체크시 sorting -> 로직 단순화
 */

