function solution(s) {
  let hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  hash.forEach((el, i) => {s = s.replaceAll(el, i)});
  return +s;
}

//Try Again !
//reduce
let hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function solution(s) {
  return Number(hash.reduce((answer, word, idx) => answer.replace(new RegExp(word, 'g'), idx), s));
}

//split, join
function solution(s) {
  let hash = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var answer = s;

  hash.forEach((el, i) => {
    let arr = answer.split(el);
    answer = arr.join(i);
  });

  return Number(answer);
}

//using obj
function solution(s) {
  let hash = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};

  //Arr destructuring & return Number(s)
  for (let [key, value] of Object.entries(hash)) {
    s = s.replace(new RegExp(key, 'g'), value);
  }

  //better & return Number(s) **
  for (const key of Object.keys(hash)) {//객체를 활용한 일대일 대응 : key를 만들었으면, 
    s = s.replace(new RegExp(key, 'gi'), hash[key]); //for loop 사용해서 key가 배정되어야 사용 가능
  }

  //RegExp & return +answer; ***
  const pattern = new RegExp(Object.keys(obj).join('|'), 'gi');
  let answer = s.replace(pattern, (v) => obj[v]); //replace에서 객체꼴 사용시 element를 부여해야
}


/** TIL
 * 🥲 반성
 * 배열, 객체를 활용한 일대일 대응 : loop로 해당 el 활용  /  혹은 "정규식 + join" + "replace(함수꼴)"
 * 숫자 : index 활용 !!!!!!
 * 반복 -> reduce
 * 교체에 split, join을 이용할 수도 있구나 ~
 * parseInt보다는 Number가 빠르다
 */
