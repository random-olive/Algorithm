function solution(score) {
  let sorted = score.map((el, i) => [(el[0] + el[1]) / 2, i]).sort((a, b) => b[0] - a[0]);
  let answer = new Array(score.length).fill(1);
  let test = sorted.map((el) => el[0]);

  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test.length; j++) {
      if (test[i] < test[j]) {
        answer[i]++;
      }
    }
  }

  for (let i = 0; i < sorted.length; i++) {
    sorted[i][0] = answer[i];
  }

  for (let i = 0; i < sorted.length; i++) {
    answer[sorted[i][1]] = sorted[i];
  }

  return answer.map((el) => el[0]);
}


//Try Again !
function solution(score) {
  return score.map(([a, b]) => a + b).map((el, _, arr) => [...arr].sort((a, b) => b - a).indexOf(el) + 1);
}

function solution(score) {
  let arr = score.map((el) => el[0] + el[1]).sort((a, b) => b - a);
  return score.map((el) => arr.indexOf(el[0] + el[1]) + 1);
}

/** TIL
 * π₯² λ°μ±
 * λμΌ μ°μ°μΌλ‘ λΉκ΅νλ κ²½μ° λͺ¨λ  μ°μ°μ λ€ ν  νμλ μλ€
 * 
 * Array.map((el,_,arr)=>[...arr]...)
 * 
 * Array.indexOf(value) 
 * => ordering : sorted.indexOf(raw)  => * method νλ μ΅νλ©΄ λ λ§μ κ²½μ°μ μ test ν΄λ³΄κΈ° *
 */